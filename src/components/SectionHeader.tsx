import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  title: string;
  subtitle?: string;
  badges?: ReactNode;
}>;

export default function SectionHeader({ title, subtitle, badges, children }: Props) {
  return (
    <header className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 md:p-8 ring-1 ring-slate-200 shadow-sm mb-6">
      {badges && <div className="mb-3 flex flex-wrap items-center gap-2">{badges}</div>}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h1>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-700">{subtitle}</p>}
      {children}
    </header>
  );
}
