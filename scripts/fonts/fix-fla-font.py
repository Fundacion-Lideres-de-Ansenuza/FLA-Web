#!/usr/bin/env python3
# Usage: pip install fonttools && python scripts/fonts/fix-fla-font.py <FLA-original.otf> public/fonts/FLA.otf
"""Completa FLA.otf (Saridona extendida) con los caracteres del español que le faltan
y corrige el ancho de á/Á. Construye todo con piezas de la propia fuente."""
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.recordingPen import RecordingPen

src, dst = sys.argv[1], sys.argv[2]
f = TTFont(src)
glyf, hmtx = f["glyf"], f["hmtx"]
order = f.getGlyphOrder()

def rec(name):
    p = RecordingPen(); glyf[name].draw(p, glyf); return p

def rect(pen, x0, y0, x1, y1):
    # sentido horario (TrueType): contorno exterior
    pen.moveTo((x0, y0)); pen.lineTo((x0, y1)); pen.lineTo((x1, y1)); pen.lineTo((x1, y0)); pen.closePath()

def add(name, codepoint, pen, adv, lsb=None):
    g = pen.glyph(); g.recalcBounds(glyf) if hasattr(g, "recalcBounds") else None
    glyf[name] = g
    if name not in order: order.append(name)
    hmtx[name] = (adv, g.xMin if lsb is None else lsb)
    for t in f["cmap"].tables:
        if t.isUnicode(): t.cmap[codepoint] = name

def transformed(src_name, matrix):
    pen = TTGlyphPen(None); rec(src_name).replay(TransformPen(pen, matrix)); return pen

# 1) á / Á: mismo avance que a / A (tenían 98 y 41 unidades de más → hueco visible)
hmtx["aacute"] = (hmtx["a"][0], hmtx["aacute"][1])
hmtx["Aacute"] = (hmtx["A"][0], hmtx["Aacute"][1])

# 2) "!" = palo (ancho del punto, como la i) + punto de la fuente
pen = TTGlyphPen(None)
rec("period").replay(pen)
rect(pen, 33, 180, 133, 750)
add("exclam", 0x21, pen, 167)

# 3) "¡" y "¿" = "!" y "?" girados 180°, con el tope a la altura de la i (564)
K = 563
for new, base, cp in (("exclamdown", "exclam", 0xA1), ("questiondown", "question", 0xBF)):
    adv = hmtx[base][0]
    add(new, cp, transformed(base, (-1, 0, 0, -1, adv, K)), adv)

# 4) ü / Ü = u / U + dos puntos (punto de la fuente al 85%)
def with_dots(base, name, cp, y):
    pen = TTGlyphPen(None); rec(base).replay(pen)
    g = glyf[base]; g.recalcBounds(glyf)
    s, dot_w = 0.85, 100 * 0.85
    cx = (g.xMin + g.xMax) / 2
    for x in (cx - dot_w - 18, cx + 18):
        rec("period").replay(TransformPen(pen, (s, 0, 0, s, x - 33 * s, y)))
    add(name, cp, pen, hmtx[base][0])
with_dots("u", "udieresis", 0xFC, 636)
with_dots("U", "Udieresis", 0xDC, 815)

f.setGlyphOrder(order)
f.save(dst)
print("ok ->", dst)
