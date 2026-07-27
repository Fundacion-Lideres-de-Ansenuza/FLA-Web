"use client";

import { useTranslation } from "react-i18next";

export default function AmbientaliaIdentity() {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl border border-[#bbf7d0] bg-white/80 p-6 shadow-[0_24px_60px_rgba(16,185,129,0.12)] backdrop-blur-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-[#10b981] px-5 py-6 text-white shadow-lg">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">{t("ambientaliaIdentity.baseColor")}</p>
          <p className="mt-3 font-contrail text-3xl">{t("ambientaliaIdentity.forestAndWater")}</p>
          <p className="mt-2 text-sm font-arimo text-white/85">{t("ambientaliaIdentity.baseColorDescription")}</p>
        </div>
        <div className="rounded-3xl bg-[#ecfdf5] px-5 py-6 text-[#065f46] border border-[#bbf7d0]">
          <p className="text-xs font-black uppercase tracking-[0.2em]">{t("ambientaliaIdentity.approach")}</p>
          <p className="mt-3 font-contrail text-3xl">{t("ambientaliaIdentity.learningByDoing")}</p>
          <p className="mt-2 text-sm font-arimo text-[#14532d]">{t("ambientaliaIdentity.approachDescription")}</p>
        </div>
      </div>
    </div>
  );
}
