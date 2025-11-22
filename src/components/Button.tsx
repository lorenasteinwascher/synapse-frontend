import { Link, LinkProps } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
export function Button({ variant = "primary", className = "", ...rest }: BtnProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return <button className={`${base} ${className}`} {...rest} />;
}

type LinkBtnProps = LinkProps & { variant?: Variant; className?: string };
export function LinkButton({ variant = "primary", className = "", ...rest }: LinkBtnProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return <Link className={`${base} ${className}`} {...rest} />;
}
