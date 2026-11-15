"use client"

import Image from "next/image";
import { Contrail_One, Arimo } from "next/font/google";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const contrail = Contrail_One({ subsets: ["latin"], weight: "400" });
const arimo = Arimo({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

const TEXTS = {
  es: {
    lead: "Liderazgo en diversidad, equidad e inclusión",
    heroBody: "Para jóvenes de 15 a 19 años · 11 semanas · virtual y gratuito",
    slogan: "«Por un mundo más justo e igualitario»",
    transformTitle: "Diversidad que transforma",
    transformBody: "Talleres con expertxs, mentorías personalizadas y materiales exclusivos para convertirte en líder de tu comunidad.",
    chips: ["Diversidad", "Liderazgo", "Autoconocimiento"],
    journeyTitle: "El recorrido",
    stops: [
      { title: "Aprendé", body: "Talleres de diversidad y proyectos, con mentorías semanales." },
      { title: "Accioná", body: "Implementás una acción que transforme tu comunidad." },
      { title: "Cierre", body: "Compartimos las acciones y la comunidad sigue creciendo." },
    ],
    numbersTitle: "SOMOS en números",
    badges: [
      { value: "5", label: "ediciones realizadas" },
      { value: "6.000", plus: true, label: "personas impactadas" },
      { value: "11", label: "semanas de duración" },
    ],
    communityTitle: "Nuestra comunidad",
    communityBody: "De todas las provincias de Argentina, con una acción de impacto en cada comunidad.",
    joinTitle: "¿Quiénes participan?",
    pills: [
      "Jóvenes de 15 a 19 años de todo el país",
      "Estudiantes de nivel secundario",
      "Que quieran aplicar una acción de impacto en su comunidad",
      "Totalmente gratuito, con materiales y mentorías",
    ],
    closing: "Fundación Líderes de Ansenuza",
    closingSub: "SOMOS - un programa de FLA",
  },
  en: {
    lead: "Leadership in diversity, equity and inclusion",
    heroBody: "For youth aged 15 to 19 · 11 weeks · virtual and free",
    slogan: "«For a fairer and more equal world»",
    transformTitle: "Diversity that transforms",
    transformBody: "Workshops with experts, personalized mentorships and exclusive materials to become a leader in your community.",
    chips: ["Diversity", "Leadership", "Self-knowledge"],
    journeyTitle: "The journey",
    stops: [
      { title: "Learn", body: "Diversity and project workshops, with weekly mentorships." },
      { title: "Take action", body: "You implement an action that transforms your community." },
      { title: "Closing", body: "We share the actions and the community keeps growing." },
    ],
    numbersTitle: "SOMOS in numbers",
    badges: [
      { value: "5", label: "editions held" },
      { value: "6,000", plus: true, label: "people impacted" },
      { value: "11", label: "weeks long" },
    ],
    communityTitle: "Our community",
    communityBody: "From every province in Argentina, with an impact action in each community.",
    joinTitle: "Who can join?",
    pills: [
      "Youth aged 15 to 19 from all over the country",
      "High school students",
      "Who want to carry out an impact action in their community",
      "Completely free, with materials and mentorships",
    ],
    closing: "Fundación Líderes de Ansenuza",
    closingSub: "SOMOS - an FLA program",
  },
};

const SLIDER_IMAGES = [1, 2, 3, 4, 5].map((n) => `/images/programs_sliders/somos/${n}.jpg`);

const RAINBOW_STOPS = ["#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e"];

function RainbowDeco({ style, rotate }: { style: React.CSSProperties; rotate?: number }) {
  return (
    <svg className="deco" style={{ ...style, transform: `rotate(${rotate ?? 0}deg)` }} viewBox="0 0 100 60" aria-hidden="true">
      {[44, 36, 28, 20, 12].map((r, i) => (
        <path key={r} d={`M${50 - r} 54 A${r} ${r} 0 0 1 ${50 + r} 54`} fill="none" stroke={RAINBOW_STOPS[i]} strokeWidth="7" />
      ))}
    </svg>
  );
}

function BoltDeco({ style, rotate }: { style: React.CSSProperties; rotate?: number }) {
  return (
    <svg className="deco" style={{ ...style, transform: `rotate(${rotate ?? 0}deg)` }} viewBox="0 0 60 100" aria-hidden="true">
      <path d="M34 4 L10 52 L26 52 L18 96 L50 40 L32 40 Z" fill="#ffed00" stroke="#221a3a" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

const PILL_ICONS = [
  <svg key="0" width="34" height="34" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="10" r="5" fill="none" stroke="#2c04bf" strokeWidth="2.6" /><path d="M6 26 C 6 19, 24 19, 24 26" fill="none" stroke="#2c04bf" strokeWidth="2.6" /></svg>,
  <svg key="1" width="34" height="34" viewBox="0 0 30 30" aria-hidden="true"><path d="M6 26 V10 L15 4 L24 10 V26" fill="none" stroke="#2c04bf" strokeWidth="2.6" strokeLinejoin="round" /><path d="M3 26 H27" stroke="#2c04bf" strokeWidth="2.6" strokeLinecap="round" /></svg>,
  <svg key="2" width="34" height="34" viewBox="0 0 30 30" aria-hidden="true"><path d="M15 27 C 7 20, 4 15, 6 10 C 8 5, 14 6, 15 10 C 16 6, 22 5, 24 10 C 26 15, 23 20, 15 27 Z" fill="none" stroke="#2c04bf" strokeWidth="2.6" strokeLinejoin="round" /></svg>,
  <svg key="3" width="34" height="34" viewBox="0 0 30 30" aria-hidden="true"><path d="M15 3 L26 8 V15 C 26 22 21 26 15 27 C 9 26 4 22 4 15 V8 Z" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" /><path d="M10 15 L14 19 L21 11" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export default function SomosPageClient() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("en") ? "en" : "es";
  const t = TEXTS[lang];
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const svg = main.querySelector<SVGSVGElement>("#camino");
    const cometa = main.querySelector<SVGSVGElement>("#cometa");
    if (!svg || !cometa) return;
    let path: SVGPathElement | null = null;
    let L = 0;
    let dots: { el: HTMLElement; y: number }[] = [];
    let letters: { el: HTMLElement; i: number }[] = [];
    let badges: { el: HTMLElement; base: string; y: number }[] = [];
    let titleY = 0;

    function build() {
      if (!main || !svg || !cometa) return;
      const mainTop = main.getBoundingClientRect().top + window.scrollY;
      const W = main.clientWidth;
      const D = main.scrollHeight;
      svg.setAttribute("width", String(W));
      svg.setAttribute("height", String(D));
      svg.setAttribute("viewBox", `0 0 ${W} ${D}`);
      const iso = main.querySelector("#isoFLA");
      if (!iso) return;
      const endY = iso.getBoundingClientRect().top + window.scrollY - mainTop - 190;
      const pts: [number, number][] = [[W * 0.5, -40]];
      const n = 14;
      for (let i = 1; i <= n; i++) {
        pts.push([W * (0.5 + 0.07 * Math.sin(i * 1.7)), ((endY + 40) * i) / (n + 1) - 40]);
      }
      pts.push([W * 0.5, endY]);
      let d = `M ${pts[0][0]} ${pts[0][1]}`;
      for (let i = 1; i < pts.length - 1; i++) {
        d += ` Q ${pts[i][0]} ${pts[i][1]} ${(pts[i][0] + pts[i + 1][0]) / 2} ${(pts[i][1] + pts[i + 1][1]) / 2}`;
      }
      d += ` L ${pts[pts.length - 1][0]} ${pts[pts.length - 1][1]}`;
      const ex = pts[pts.length - 1][0];
      const rainbow = RAINBOW_STOPS.map((c, i) => {
        const r = 46 - i * 9;
        return `<path d="M${-r} 4 A${r} ${r} 0 0 1 ${r} 4" fill="none" stroke="${c}" stroke-width="7"/>`;
      }).join("");
      svg.innerHTML = `<defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e40303"/><stop offset=".2" stop-color="#ff8c00"/><stop offset=".4" stop-color="#ffed00"/><stop offset=".6" stop-color="#008026"/><stop offset=".8" stop-color="#24408e"/><stop offset="1" stop-color="#732982"/></linearGradient></defs><path d="${d}" fill="none" stroke="url(#rg)" stroke-width="40" stroke-linecap="round" opacity="0.08"/><path id="draw" d="${d}" fill="none" stroke="url(#rg)" stroke-width="12" stroke-linecap="round" opacity="0.45"/><g transform="translate(${ex},${endY})">${rainbow}</g>`;
      path = svg.querySelector("#draw");
      if (!path) return;
      L = path.getTotalLength();
      path.style.strokeDasharray = String(L);
      path.style.strokeDashoffset = String(L);
      const tit = main.querySelector<HTMLElement>("#titNumeros");
      if (tit) {
        if (!tit.dataset.split) {
          tit.dataset.split = "1";
          tit.innerHTML = (tit.textContent ?? "").split("").map((c) => `<span class="ltr">${c === " " ? "&nbsp;" : c}</span>`).join("");
        }
        const tr = tit.getBoundingClientRect();
        titleY = tr.top + window.scrollY - mainTop + tr.height / 2;
        letters = Array.from(tit.querySelectorAll<HTMLElement>(".ltr")).map((el, i) => ({ el, i }));
      }
      dots = Array.from(main.querySelectorAll<HTMLElement>(".stop .dot")).map((el) => {
        const r = el.getBoundingClientRect();
        return { el, y: r.top + window.scrollY - mainTop + r.height / 2 };
      });
      badges = Array.from(main.querySelectorAll<HTMLElement>(".badge")).map((el) => {
        const r = el.getBoundingClientRect();
        return { el, base: el.style.transform || "", y: r.top + window.scrollY - mainTop + r.height / 2 };
      });
      update();
    }

    function update() {
      if (!main || !path || !cometa) return;
      const mainTop = main.getBoundingClientRect().top + window.scrollY;
      const p = Math.min(1, Math.max(0, (window.scrollY - mainTop + window.innerHeight) / main.scrollHeight));
      path.style.strokeDashoffset = String(L * (1 - p));
      const pt = path.getPointAtLength(Math.max(0.01, L * p));
      cometa.style.transform = `translate(${pt.x - 20}px,${pt.y - 20}px)`;
      for (const dt of dots) {
        const dy = Math.abs(pt.y - dt.y);
        const s = dy < 160 ? 1 + 0.5 * (1 - dy / 160) : 1;
        dt.el.style.transform = `scale(${s.toFixed(3)})`;
      }
      for (const lt of letters) {
        const off = (lt.i - (letters.length - 1) / 2) * 20;
        const dl = Math.abs(pt.y - (titleY + off));
        const sl = dl < 110 ? 1 + 0.5 * (1 - dl / 110) : 1;
        lt.el.style.transform = `scale(${sl.toFixed(3)})`;
      }
      for (const bg of badges) {
        const db = Math.abs(pt.y - bg.y);
        const sb = db < 200 ? 1 + 0.22 * (1 - db / 200) : 1;
        bg.el.style.transform = `${bg.base} scale(${sb.toFixed(3)})`;
      }
    }

    build();
    const onResize = () => build();
    const onScroll = () => requestAnimationFrame(update);
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [lang]);

  return (
    <main ref={mainRef} className={`somos-demo ${arimo.className}`}>
      <svg id="camino" aria-hidden="true"></svg>
      <svg id="cometa" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="11" fill="#fff" stroke="#a78bfa" strokeWidth="5" /></svg>

      <section style={{ paddingTop: 120 }}>
        <RainbowDeco style={{ left: "3vw", top: 100, width: 110, opacity: 0.9, position: "absolute" }} rotate={-12} />
        <BoltDeco style={{ right: "4vw", top: 180, width: 56, opacity: 0.9, position: "absolute" }} rotate={14} />
        <div className="card" style={{ padding: "30px 40px", transform: "rotate(-1.4deg)" }}>
          <Image src="/images/Logos/Somos.webp" alt="SOMOS" width={473} height={263} style={{ width: "min(480px,64vw)", height: "auto" }} />
        </div>
        <p className={`lead ${contrail.className}`} style={{ color: "var(--violet)", marginTop: 52 }}>{t.lead}</p>
        <p className="body-txt" style={{ marginTop: 14 }}>{t.heroBody}</p>
        <p className={contrail.className} style={{ fontStyle: "italic", fontSize: "clamp(26px,2.5vw,34px)", color: "var(--rose)", marginTop: 20 }}>{t.slogan}</p>
      </section>

      <section>
        <svg className="deco" style={{ left: "4vw", bottom: 60, width: 64, opacity: 0.85, position: "absolute" }} viewBox="0 0 60 60" aria-hidden="true"><path d="M30 4 L36 22 L55 24 L40 36 L45 55 L30 44 L15 55 L20 36 L5 24 L24 22 Z" fill="#c026d3" opacity=".8" /></svg>
        <h2 className="sec-title font-fla" style={{ color: "var(--rose)" }}>{t.transformTitle}</h2>
        <p className="body-txt" style={{ marginTop: 16 }}>{t.transformBody}</p>
        <div style={{ marginTop: 20, display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <span className={`chip ${contrail.className}`} style={{ background: "var(--rose)" }}>{t.chips[0]}</span>
          <span className={`chip ${contrail.className}`} style={{ background: "var(--sky)" }}>{t.chips[1]}</span>
          <span className={`chip ${contrail.className}`} style={{ background: "var(--violet)" }}>{t.chips[2]}</span>
        </div>
      </section>

      <section style={{ gap: 22 }}>
        <svg className="deco" style={{ right: "3vw", top: 70, width: 80, opacity: 0.85, position: "absolute" }} viewBox="0 0 100 60" aria-hidden="true">
          {[[12, 12, "#e40303"], [36, 8, "#ff8c00"], [60, 14, "#ffed00"], [84, 10, "#008026"], [24, 36, "#24408e"], [52, 40, "#732982"], [80, 36, "#c026d3"]].map(([x, y, c]) => (
            <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r="5" fill={c as string} />
          ))}
        </svg>
        <h2 className="sec-title font-fla" style={{ color: "var(--sky)" }}>{t.journeyTitle}</h2>
        {t.stops.map((stop, i) => (
          <div className="stop" key={stop.title}>
            <div className="dot font-fla" style={{ background: ["var(--rose)", "var(--sky)", "var(--violet)"][i] }}>{i + 1}</div>
            <div>
              <h3 className="font-fla" style={{ color: ["var(--rose)", "var(--sky)", "var(--violet)"][i] }}>{stop.title}</h3>
              <p>{stop.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="sec-title font-fla" id="titNumeros" key={lang} style={{ color: "var(--fuchsia)" }}>{t.numbersTitle}</h2>
        <svg style={{ width: "min(360px,58vw)", marginTop: 2 }} viewBox="0 0 340 24" aria-hidden="true">
          <defs><linearGradient id="wc" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#c026d3" /><stop offset=".5" stopColor="#7c3aed" /><stop offset="1" stopColor="#2c04bf" /></linearGradient></defs>
          <path d="M6 13 C 60 5, 120 20, 172 12 S 292 6, 334 13" fill="none" stroke="url(#wc)" strokeWidth="10" strokeLinecap="round" opacity=".45" />
          <path d="M6 13 C 60 5, 120 20, 172 12 S 292 6, 334 13" fill="none" stroke="url(#wc)" strokeWidth="4" strokeLinecap="round" opacity=".8" />
        </svg>
        <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 40, alignItems: "center" }}>
          {t.badges.map((b, i) => (
            <div className="badge" key={b.label} style={{ background: ["var(--blue)", "var(--violet)", "var(--rose)"][i], transform: `translateX(${i === 1 ? 72 : -72}px)` }}>
              <span className="v font-fla">{b.plus && <span className="plus">+</span>}{b.value}</span>
              <span className={`l ${contrail.className}`}>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <RainbowDeco style={{ left: "3vw", top: 90, width: 90, opacity: 0.9, position: "absolute" }} rotate={10} />
        <h2 className="sec-title font-fla" style={{ color: "var(--violet)" }}>{t.communityTitle}</h2>
        <div className="cut" style={{ transform: "rotate(-1.6deg)", marginTop: 22 }}>
          <span className="tape"></span>
          <div className="slider">
            {SLIDER_IMAGES.map((src, i) => (
              <Image key={src} src={src} alt={`SOMOS ${i + 1}`} width={520} height={390} style={{ animationDelay: `${i * 3}s` }} />
            ))}
          </div>
        </div>
        <p className="body-txt" style={{ marginTop: 18, fontStyle: "italic" }}>{t.communityBody}</p>
      </section>

      <section style={{ gap: 34, paddingTop: 66, paddingBottom: 72 }}>
        <BoltDeco style={{ right: "4vw", bottom: 90, width: 56, opacity: 0.9, position: "absolute" }} rotate={-12} />
        <h2 className="sec-title font-fla" style={{ color: "var(--rose)" }}>{t.joinTitle}</h2>
        {t.pills.map((pill, i) => (
          <div className={`pill font-fla`} key={pill} style={i === 3 ? { background: "var(--violet)", color: "#fff" } : undefined}>
            {PILL_ICONS[i]}{pill}
          </div>
        ))}
      </section>

      <section style={{ paddingTop: 150, paddingBottom: 150 }}>
        <Image id="isoFLA" src="/images/Logos/Iso%20FLA.webp" alt="FLA" width={500} height={500} style={{ width: "min(170px,22vw)", height: "auto" }} />
        <h2 className="sec-title font-fla" style={{ fontSize: "clamp(52px,5.4vw,76px)", marginTop: 26, color: "var(--blue)" }}>{t.closing}</h2>
        <p className={`lead ${contrail.className}`} style={{ color: "var(--violet)", fontSize: "clamp(26px,2.5vw,34px)", marginTop: 18 }}>{t.closingSub}</p>
      </section>

      <style jsx global>{`
        .somos-demo {
          --blue: #2c04bf; --violet: #7c3aed; --fuchsia: #c026d3; --rose: #be123c; --sky: #0369a1;
          --paper: #faf8f3; --ink: #221a3a;
          position: relative;
          color: var(--ink);
          background-color: var(--paper);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.46 0 0 0 0 0.42 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
          overflow-x: hidden;
        }
        .somos-demo #camino { position: absolute; top: 0; left: 0; z-index: 0; pointer-events: none; }
        .somos-demo #cometa { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none; filter: drop-shadow(0 3px 5px rgba(34,26,58,.18)); }
        .somos-demo .deco { position: absolute; z-index: 1; pointer-events: none; }
        .somos-demo section { position: relative; z-index: 2; padding: 46px 10vw 52px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; overflow: hidden; }
        .somos-demo .sec-title { font-size: clamp(56px,6vw,84px); line-height: .98; text-transform: uppercase; text-shadow: 0 4px 0 rgba(34,26,58,.14); -webkit-text-stroke: .8px rgba(34,26,58,.28); }
        .somos-demo .sec-title .ltr { display: inline-block; transition: transform .12s ease-out; }
        .somos-demo .lead { font-size: clamp(30px,3vw,40px); margin-top: 12px; }
        .somos-demo .body-txt { font-size: clamp(30px,2.8vw,38px); line-height: 1.45; max-width: 30ch; }
        .somos-demo .chip { display: inline-block; color: #fff; font-size: clamp(26px,2.4vw,32px); padding: 10px 26px; border-radius: 999px; box-shadow: 0 5px 0 rgba(34,26,58,.15); }
        .somos-demo .card { background: #fff; border-radius: 24px; padding: 26px 34px; box-shadow: 0 10px 0 rgba(34,26,58,.08); }
        .somos-demo .stop { display: flex; align-items: center; gap: 20px; background: #fff; border-radius: 20px; padding: 18px 26px; box-shadow: 0 8px 0 rgba(34,26,58,.09); max-width: 720px; width: 88%; text-align: left; }
        .somos-demo .stop .dot { flex: 0 0 auto; width: 64px; height: 64px; border-radius: 50%; color: #fff; font-size: 30px; display: flex; align-items: center; justify-content: center; transition: transform .16s ease-out; }
        .somos-demo .stop h3 { font-size: clamp(34px,3.2vw,44px); text-transform: uppercase; text-shadow: 0 3px 0 rgba(34,26,58,.12); }
        .somos-demo .stop p { font-size: clamp(26px,2.4vw,32px); line-height: 1.35; margin-top: 2px; text-align: left; }
        .somos-demo .badge { width: clamp(180px,20vw,240px); height: clamp(180px,20vw,240px); border-radius: 50%; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 8px 0 rgba(34,26,58,.14); transition: transform .16s ease-out; }
        .somos-demo .badge .v { font-size: clamp(48px,5vw,66px); line-height: 1; position: relative; }
        .somos-demo .badge .v .plus { position: absolute; left: -.55em; top: .05em; font-size: .62em; }
        .somos-demo .badge .l { font-size: clamp(24px,2.2vw,30px); margin-top: 4px; padding: 0 10px; line-height: 1.15; }
        .somos-demo .cut { position: relative; background: #fff; padding: 14px 14px 20px; border-radius: 6px; box-shadow: 0 12px 26px rgba(34,26,58,.18); display: inline-block; }
        .somos-demo .tape { position: absolute; top: -14px; left: 50%; transform: translateX(-50%) rotate(-3deg); width: 120px; height: 30px; background: rgba(124,58,237,.35); border-radius: 3px; }
        .somos-demo .slider { position: relative; width: min(520px,54vw); aspect-ratio: 4/3; overflow: hidden; border-radius: 3px; }
        .somos-demo .slider img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; animation: somos-xfade 15s infinite; border-radius: 3px; }
        @keyframes somos-xfade { 0% { opacity: 0 } 3% { opacity: 1 } 18% { opacity: 1 } 23% { opacity: 0 } 100% { opacity: 0 } }
        .somos-demo .pill { display: flex; align-items: center; gap: 14px; background: #fff; color: var(--blue); font-size: clamp(28px,2.7vw,36px); padding: 16px 30px; border-radius: 999px; box-shadow: 0 6px 0 rgba(44,4,191,.14); max-width: 88%; }
        .somos-demo .pill svg { flex: 0 0 auto; }
        @media (max-width: 640px) {
          .somos-demo .stop p { font-size: 22px; }
          .somos-demo .body-txt { font-size: 24px; }
          .somos-demo .pill { font-size: 22px; }
        }
      `}</style>
    </main>
  );
}
