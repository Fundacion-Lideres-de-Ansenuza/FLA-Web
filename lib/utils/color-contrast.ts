/**
 * Utilidades para garantizar contraste WCAG AA cuando se usan los colores
 * de cada programa (que pueden ser paletas claras) como texto sobre fondos
 * claros/blancos.
 */

type RGB = [number, number, number];

function hexToRgb(hex: string): RGB {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const value = parseInt(full, 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function rgbToHex([r, g, b]: RGB): string {
  const toHex = (c: number) => Math.round(Math.min(255, Math.max(0, c))).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl([r, g, b]: RGB): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): RGB {
  if (s === 0) {
    const v = l * 255;
    return [v, v, v];
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return [r * 255, g * 255, b * 255];
}

function relativeLuminance([r, g, b]: RGB): number {
  const channel = (c: number) => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hexToRgb(hex1)) + 0.05;
  const l2 = relativeLuminance(hexToRgb(hex2)) + 0.05;
  return l1 > l2 ? l1 / l2 : l2 / l1;
}

/**
 * Devuelve el color dado, oscurecido lo mínimo necesario, para cumplir
 * con un ratio de contraste mínimo (AA = 4.5 para texto normal, 3 para
 * texto grande/negrita) respecto a un fondo. Si el color ya cumple, lo
 * devuelve sin modificar.
 */
export function getAccessibleTextColor(hex: string, background = "#ffffff", minRatio = 4.5): string {
  // Los fondos reales de las tarjetas son un tinte leve del color del programa
  // (por ejemplo `${color}14` sobre blanco), levemente más oscuros que el
  // blanco puro usado por defecto acá. Se agrega un margen para que el
  // contraste se cumpla también contra ese fondo tintado real.
  const target = minRatio + 0.3;

  if (contrastRatio(hex, background) >= target) {
    return hex;
  }

  const [h, s, l] = rgbToHsl(hexToRgb(hex));
  let lightness = l;

  for (let i = 0; i < 40 && lightness > 0; i += 1) {
    lightness = Math.max(0, lightness - 0.025);
    const candidate = rgbToHex(hslToRgb(h, s, lightness));
    if (contrastRatio(candidate, background) >= target) {
      return candidate;
    }
  }

  return "#111827";
}
