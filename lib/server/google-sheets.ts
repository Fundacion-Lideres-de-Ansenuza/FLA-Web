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

export async function addNewsletterSubscriber(email: string) {
  const spreadsheetId = requiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID")
  const sheetName = process.env.GOOGLE_SHEETS_NEWSLETTER_TAB?.trim() || "Newsletter"
  const sheets = getSheetsClient()
  const sheet = quotedSheetName(sheetName)

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheet}!B:B`,
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
      values: [[new Date().toISOString(), email, "website", "newsletter"]],
    },
  })

  return { duplicate: false }
}
