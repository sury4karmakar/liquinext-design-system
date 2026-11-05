import type { ReactNode } from "react";
import { Button, type ButtonProps } from "./Button";

export type IconButtonProps = Omit<
  ButtonProps,
  "size" | "children" | "aria-label"
> & {
  "aria-label": string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function IconButton({
  size = "md",
  variant = "ghost",
  ...props
}: IconButtonProps) {
  return <Button variant={variant} size={`icon-${size}`} {...props} />;
}
