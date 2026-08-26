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
  const pad = (value: number) => String(value).padStart(2, "0")
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
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
