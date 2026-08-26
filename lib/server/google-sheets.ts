import { google } from "googleapis"

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function getSheetsClient() {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const credentials = serviceAccountJson
    ? JSON.parse(serviceAccountJson)
    : {
        client_email: requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
        private_key: requiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n"),
      }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return google.sheets({ version: "v4", auth })
}

function quotedSheetName(sheetName: string) {
  return `'${sheetName.replace(/'/g, "''")}'`
}

function formatTimestamp(date: Date) {
  const parts = new Intl.DateTimeFormat("es-AR", {
    timeZone: "America/Argentina/Cordoba",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date)
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ""
  return `${get("day")}/${get("month")}/${get("year")} ${get("hour")}:${get("minute")}`
}

export async function addNewsletterSubscriber(email: string) {
  const spreadsheetId = requiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID")
  const sheetName = process.env.GOOGLE_SHEETS_NEWSLETTER_TAB?.trim() || "Newsletter"
  const sheets = getSheetsClient()
  const sheet = quotedSheetName(sheetName)

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheet}!C:C`,
  })
  const alreadySubscribed = (existing.data.values || []).some(
    ([value]) => typeof value === "string" && value.trim().toLowerCase() === email.toLowerCase(),
  )

  if (alreadySubscribed) {
    return { duplicate: true }
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheet}!A:D`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [["", "", email, formatTimestamp(new Date())]],
    },
  })

  return { duplicate: false }
}
