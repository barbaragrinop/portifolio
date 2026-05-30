import clsn from "classnames";

import { WorkExperience } from "../../types/WorkExperience";
import { Card } from "./Card";


/* ─── Linha da timeline ─────────────────────────────────────────
   Mobile  : linha à esquerda, card ocupa 100% da direita
   Desktop : linha ao centro, cards alternam esquerda/direita
─────────────────────────────────────────────────────────────── */
export default function TimelineRow({ exp, index, isLast }: { exp: WorkExperience; index: number; isLast: boolean }) {
  const isRight = index % 2 !== 0; // no desktop, ímpares vão pra direita

  const dot = (
    <div
      className={clsn(
        "w-3 h-3 rounded-full border-2 flex-shrink-0 z-10",
        exp.current
          ? "border-pink-primary bg-pink-primary shadow-[0_0_8px_2px_rgba(236,100,100,0.35)]"
          : "border-white/30 bg-black-primary"
      )}
    />
  );

  const line = !isLast && (
    <div className="flex-1 w-px bg-gradient-to-b from-pink-primary/25 to-white/5 mt-1" />
  );

  return (
    <>
      {/* ══ MOBILE: coluna única, linha à esquerda ══ */}
      <div className="flex gap-4 md:hidden pb-8 last:pb-0">
        {/* linha + dot */}
        <div className="flex flex-col items-center pt-3">
          {dot}
          {line}
        </div>
        {/* card ocupa todo o espaço restante */}
        <div className="flex-1 min-w-0">
          <Card exp={exp} defaultOpen={index === 0} />
        </div>
      </div>

      {/* ══ DESKTOP: alternância esquerda/direita ══ */}
      <div className="hidden md:grid grid-cols-[1fr_40px_1fr] pb-10 last:pb-0">
        {/* coluna esquerda */}
        <div className={clsn("pr-6", isRight ? "invisible" : "")}>
          {!isRight && <Card exp={exp} defaultOpen={index === 0} />}
        </div>

        {/* linha central + dot */}
        <div className="flex flex-col items-center">
          <div className="mt-3">{dot}</div>
          {line}
        </div>

        {/* coluna direita */}
        <div className={clsn("pl-6", !isRight ? "invisible" : "")}>
          {isRight && <Card exp={exp} defaultOpen={false} />}
        </div>
      </div>
    </>
  );
}
