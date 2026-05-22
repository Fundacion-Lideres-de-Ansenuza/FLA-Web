export default function GlobalLoader() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fff7f6_0%,#ffffff_45%,#fff4f4_100%)]">
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#f45e5e]/20 blur-3xl" />
      <div className="absolute -right-14 bottom-16 h-64 w-64 rounded-full bg-[#bc2222]/15 blur-3xl" />

      <div className="relative flex flex-col items-center gap-5">
        <div className="relative h-20 w-20">
          <span className="absolute inset-0 rounded-full border-4 border-[#bc2222]/15" />
          <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#bc2222] border-r-[#f45e5e] animate-spin" />
        </div>
        <p className="font-arimo text-base font-semibold tracking-[0.08em] text-[#90140e] uppercase">
          Cargando Fundación Líderes de Ansenuza
        </p>
      </div>
    </div>
  );
}
