import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false;
  variant?: "primary" | "secondary" | "ghost";
};

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asChild: true;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-cyan-300/45 bg-cyan-300/12 text-cyan-50 shadow-[0_0_35px_rgba(75,214,255,0.16)] hover:border-cyan-200 hover:bg-cyan-300/18 hover:shadow-[0_0_45px_rgba(75,214,255,0.24)]",
  secondary:
    "border-white/14 bg-white/[0.055] text-slate-100 hover:border-indigo-200/50 hover:bg-white/[0.085] hover:shadow-[0_0_32px_rgba(129,140,248,0.18)]",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/12 hover:bg-white/[0.055] hover:text-white",
};

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

export function Button({
  className,
  variant = "primary",
  asChild,
  ...props
}: ButtonProps | AnchorButtonProps) {
  if (asChild) {
    const { asChild: _asChild, ...anchorProps } = props as AnchorButtonProps;
    void _asChild;
    return (
      <a
        className={cn(base, variants[variant], className)}
        {...anchorProps}
      />
    );
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      suppressHydrationWarning
      {...(props as ButtonProps)}
    />
  );
}
