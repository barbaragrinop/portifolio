import clsn from "classnames";

import { useState } from "react";
import { Project } from "../../types/Project";
import { ProjectIcon } from "./Icons";

const STATUS_CONFIG = {
  production: { label: "", color: "text-green-400", dot: "bg-green-400" },
  development: { label: "Em desenvolvimento", color: "text-yellow-400", dot: "bg-yellow-400" },
  pending: { label: "Link em breve", color: "text-grey-primary/50", dot: "bg-grey-primary/50" },
} as const;


export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const status = STATUS_CONFIG[project.status];

  return (
    <article
      className={clsn(
        "group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300",
        "bg-white/[0.03]",
        expanded
          ? "border-pink-primary/30"
          : "border-white/8 hover:border-pink-primary/20"
      )}
    >

      <div
        className={clsn(
          "h-px w-full transition-all duration-500",
          expanded
            ? "bg-gradient-to-r from-pink-primary/60 via-pink-primary/20 to-transparent"
            : "bg-white/5 group-hover:bg-gradient-to-r group-hover:from-pink-primary/30 group-hover:via-pink-primary/10 group-hover:to-transparent"
        )}
      />

      <div className="p-5 flex flex-col gap-4 flex-1">

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-grey-primary/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-grey-primary/50 bg-white/4 border border-white/6 rounded-full px-2 py-0.5">
              <span className="text-grey-primary/40">{ProjectIcon.TypeIcons[project.type]}</span>
              {project.type}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={clsn("w-1.5 h-1.5 rounded-full flex-shrink-0", status.dot,
              project.status === "production" && "animate-pulse"
            )} />
            <span className={clsn("text-[10px] font-medium whitespace-nowrap", status.color)}>
              {status.label}
            </span>
          </div>
        </div>


        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
          <span className="text-[11px] text-grey-primary/30 font-mono flex-shrink-0">{project.year}</span>
        </div>

        <p className="text-grey-primary/70 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* descrição longa (expansível) */}
        <div
            className={clsn(
                "transition-all duration-300 ease-in-out border-white/5  overflow-y-auto ",
                expanded 
                ? "max-h-40 opacity-100 border-t pt-3" 
                : "max-h-0 opacity-0 pt-0 border-t-0"
            )}
        >
          
        <p className="text-grey-primary/60 text-xs leading-relaxed custom-scrollbar pr-1">
            {project.longDescription}
        </p>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full
                         bg-pink-primary/8 border border-pink-primary/20 text-pink-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* rodapé: botões */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">

          {/* expandir */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-[11px] text-grey-primary/50 hover:text-pink-primary transition-colors flex items-center gap-1"
          >
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={clsn("transition-transform duration-300", expanded ? "rotate-180" : "")}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {expanded ? "Menos detalhes" : "Mais detalhes"}
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver código"
                className="flex items-center gap-1.5 text-[11px] text-grey-primary/50
                           hover:text-white transition-colors border border-white/8
                           hover:border-white/20 rounded-lg px-2.5 py-1.5"
              >
                <ProjectIcon.Github />
                <span>Código</span>
              </a>
            )}
            {project.liveUrl && project.status !== "pending" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver ao vivo"
                className="flex items-center gap-1.5 text-[11px] font-medium text-white
                           bg-pink-primary/15 hover:bg-pink-primary/25
                           border border-pink-primary/30 hover:border-pink-primary/50
                           rounded-lg px-2.5 py-1.5 transition-all duration-200"
              >
                <ProjectIcon.External />
                <span>Ver site</span>
              </a>
            )}
            {project.status === "pending" && (
              <span className="text-[11px] text-grey-primary/30 border border-white/5 rounded-lg px-2.5 py-1.5">
                Em breve
              </span>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}