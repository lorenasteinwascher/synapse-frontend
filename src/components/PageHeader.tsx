import Badge from "@/components/Badge";
import { LinkButton } from "@/components/Button";

type Action = { label: string; to?: string; onClick?: () => void; variant?: "primary"|"ghost"; };
type Props = {
  title: string;
  subtitle?: string;
  badges?: string[];
  actions?: Action[];
};

export default function PageHeader({ title, subtitle, badges = [], actions = [] }: Props) {
  return (
    <header className="hero">
      <div className="container-page py-6">
        <div className="glass rounded-2xl px-6 py-6">
          {!!badges.length && (
            <div className="flex flex-wrap gap-2 mb-3">
              {badges.map((b, i) => <Badge key={i}>{b}</Badge>)}
            </div>
          )}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-1 text-slate-600 max-w-3xl">{subtitle}</p>}
            </div>
            {!!actions.length && (
              <div className="flex gap-2">
                {actions.map((a, i) =>
                  a.to ? (
                    <LinkButton key={i} to={a.to} variant={a.variant ?? "primary"}>{a.label}</LinkButton>
                  ) : (
                    <button key={i} onClick={a.onClick} className={(a.variant==="ghost"?"btn-ghost":"btn-primary")}>
                      {a.label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
