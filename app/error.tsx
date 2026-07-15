"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fff7f6_0%,#ffffff_100%)] px-6">
      <section className="mx-auto w-full max-w-xl rounded-[32px] border border-[#f1dcdc] bg-white p-8 text-center shadow-[0_20px_55px_rgba(144,20,14,0.1)]">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#bc2222]">Error</p>
        <h1 className="mt-3 font-contrail text-5xl text-[#2f1614]">Algo salió mal</h1>
        <p className="mt-4 font-arimo text-lg text-[#5a3c37]">
          Ocurrió un problema al cargar esta sección. Intentá nuevamente.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-[#bc2222] px-7 py-3 font-arimo text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(188,34,34,0.24)] transition-colors hover:bg-[#a71d1d]"
          >
            Reintentar
          </button>
        </div>
      </section>
    </main>
  );
}
