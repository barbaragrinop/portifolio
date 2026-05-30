import { JSX } from "react";

const TYPE_ICONS: Record<string, JSX.Element> = {
  "Web App": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 6h14" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="4" cy="4.5" r="0.7" fill="currentColor"/>
      <circle cx="6.5" cy="4.5" r="0.7" fill="currentColor"/>
    </svg>
  ),
  "Site Institucional": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 1l7 5v9H1V6l7-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <rect x="5.5" y="9" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  "Landing Page": (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M13 10l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}


export const ProjectIcon = {
  External: ExternalIcon,
  Github: GithubIcon,
  TypeIcons: TYPE_ICONS,
}