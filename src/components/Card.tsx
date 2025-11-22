import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    headerTitle?: ReactNode;  
    subtitle?: ReactNode;      
    actions?: ReactNode;       
  }
>;

export default function Card({
  className = "",
  headerTitle,
  subtitle,
  actions,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={[
        "rounded-2xl border border-zinc-200/70 bg-white shadow-sm",
        "hover:shadow-md transition-shadow",
        "p-5 sm:p-6",
        className,
      ].join(" ")}
    >
      {(headerTitle || subtitle || actions) && (
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex flex-col">
            {headerTitle && (
              <h3 className="text-lg font-semibold tracking-tight">
                {headerTitle}
              </h3>
            )}

            {subtitle && (
              <p className="text-sm text-zinc-500 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {actions && (
            <div className="shrink-0 flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
