# Newsletter

El formulario del newsletter usa Netlify Forms para funcionar sin backend propio.

## Como funciona

1. Netlify detecta el formulario `newsletter` leyendo el archivo estatico `public/__forms.html` durante el deploy.
2. El componente visual `components/home/newsletter-form.tsx` envia el email con `POST /` en formato `application/x-www-form-urlencoded`.
3. Netlify captura la solicitud, guarda la suscripcion en el panel del sitio y aplica el honeypot `bot-field` para filtrar bots simples.

## Que revisar en produccion

- El sitio debe seguir desplegandose en Netlify.
- En el panel del sitio, la seccion Forms debe mostrar el formulario `newsletter` despues del deploy.
- Si mas adelante quieren mandar estas altas a Mailchimp, Brevo o similar, se puede conectar desde Netlify o reemplazar el endpoint del submit.
