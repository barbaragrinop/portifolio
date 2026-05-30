import clsn from "classnames";

import { useState } from "react";
import { WorkExperience } from "../../types/WorkExperience";
import { Icon } from "./Icons";

export function Card({ exp, defaultOpen }: { exp: WorkExperience; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={clsn(
        "rounded-xl border overflow-hidden transition-colors duration-200",
        "bg-white/[0.03]",
        open ? "border-pink-primary/25" : "border-white/8 hover:border-pink-primary/20"
      )}
    >
      {/* cabeçalho clicável */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-4 flex flex-col gap-2 focus:outline-none"
        aria-expanded={open}
      >
        {/* cargo + chevron */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {exp.current && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              )}
              <span className="text-white font-semibold text-sm leading-snug">{exp.role}</span>
            </div>
            <span className="text-pink-primary text-xs font-medium">{exp.company}</span>
          </div>
          <span className="text-grey-primary/50 mt-0.5">
            <Icon.Chevron open={open} />
          </span>
        </div>

        {/* período + localização */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-xs text-grey-primary/60 flex items-center gap-1">
            <Icon.Clock />
            {exp.period}
          </span>
          <span className="text-xs text-grey-primary/40">· {exp.duration}</span>
        </div>
        <span className="text-xs text-grey-primary/40 flex items-center gap-1">
          <Icon.Pin />
          {exp.location}
        </span>
      </button>

      {/* corpo expansível */}
      <div
        className={clsn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pb-5 pt-3 flex flex-col gap-4 border-t border-white/5">
          {/* bullets de descrição */}
          <ul className="flex flex-col gap-2.5">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className="w-1 h-1 rounded-full bg-pink-primary/60 flex-shrink-0 mt-[7px]" />
                <p className="text-xs text-grey-primary/80 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          {/* tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full
                bg-pink-primary/8 border border-pink-primary/20 text-pink-primary/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
