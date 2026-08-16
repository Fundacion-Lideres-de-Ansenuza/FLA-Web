# Newsletter

El formulario del newsletter guarda las suscripciones en una planilla de Google Sheets mediante la API de Next.js.

## Estructura de la planilla

Crear una pestaña llamada `Newsletter` con estos encabezados en la primera fila:

| timestamp | email | source | form |
| --- | --- | --- | --- |

La API evita duplicar emails comparando la columna `email` sin distinguir mayúsculas/minúsculas.

## Variables de entorno

- `GOOGLE_SHEETS_SPREADSHEET_ID`: ID de la planilla, tomado de su URL.
- `GOOGLE_SHEETS_NEWSLETTER_TAB`: nombre de la pestaña; por defecto `Newsletter`.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` y `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`: credenciales de una cuenta de servicio con acceso de editor a la planilla.
- Alternativamente, `GOOGLE_SERVICE_ACCOUNT_JSON` puede contener el JSON completo de la cuenta de servicio.

## Prueba de producción

1. Compartir la planilla con el email de la cuenta de servicio como Editor.
2. Cargar las variables en el panel de Hostinger.
3. Enviar un email nuevo desde el sitio.
4. Confirmar que aparece una fila nueva.
5. Repetir el mismo email y confirmar que no se duplica.
