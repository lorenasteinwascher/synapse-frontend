import type { HTMLAttributes, PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export default function Badge({ className = "", children, ...rest }: BadgeProps) {
  return (
    <span
      {...rest}
      className={[
        "inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900",
        "ring-1 ring-slate-200 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
