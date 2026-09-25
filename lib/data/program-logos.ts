/**
 * Mapeo de logo por slug de programa (no por título traducido).
 * Usar el slug evita bugs de mayúsculas/idioma como el que hubo con
 * "Lideres" en inglés vs "Líderes" en español.
 *
 * Para agregar el logo de un programa nuevo: sumar el archivo en
 * `public/images/Logos/` y agregar una entrada `slug: "nombre-archivo"`
 * (sin extensión; se asume `.webp` salvo que termine en `.png`).
 */
const LOGO_FILE_BY_SLUG: Record<string, string> = {
  ambientalia: "Experiencia_Ambientalia",
  somos: "Somos",
  lideres: "lideres",
  potenciate: "Potenciate",
  futuras: "Futuras",
  impulsatec: "Impulsatec",
  "ciencia-fuera-de-la-caja": "Ciencia fuera de la caja",
  "aventura-matematica": "Aventura Matemagica",
  "decidir-con-ciencia": "Decidir_con_Ciencia.png"
};

export function getProgramLogoSrc(slug: string): string | undefined {
  const fileName = LOGO_FILE_BY_SLUG[slug];
  if (!fileName) return undefined;
  return fileName.endsWith(".png") ? `/images/Logos/${fileName}` : `/images/Logos/${fileName}.webp`;
}
