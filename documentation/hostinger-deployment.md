# Deploy en Hostinger Business

La aplicación requiere un entorno **Node.js Web App** porque las rutas `/api/contact` y `/api/newsletter` se ejecutan en el servidor. No se debe usar un export estático ni subir solamente la carpeta `out`.

## Configuración de la aplicación

- Framework: Next.js
- Node.js: 22.x o superior compatible con Next.js 16
- Build command: `bun run build` (o `npm run build`)
- Start command: `bun run start` (o `npm run start`)
- Puerto: el asignado por Hostinger mediante `PORT`

## Variables requeridas

### Contacto por SMTP Hostinger

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contacto@lideresdeansenuza.org
SMTP_PASSWORD=
CONTACT_TO=contacto@lideresdeansenuza.org
```

### Newsletter en Google Sheets

```env
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_NEWSLETTER_TAB=Newsletter
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
```

La clave privada puede cargarse con `\\n` en lugar de saltos de línea. Nunca se deben versionar estas variables ni el JSON de la cuenta de servicio.

## Checklist

- [ ] Crear la cuenta de email de contacto en Hostinger.
- [ ] Crear la pestaña `Newsletter` en Google Sheets.
- [ ] Compartir la planilla con la cuenta de servicio como Editor.
- [ ] Configurar las variables de entorno en Hostinger.
- [ ] Ejecutar build y start en el panel.
- [ ] Probar contacto y recepción de email.
- [ ] Probar alta nueva y deduplicación del newsletter.
- [ ] Verificar dominio, HTTPS y rutas `/api/*`.
