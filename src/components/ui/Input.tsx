import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useFieldControl } from "./Field";
import { fieldBase, fieldBorder, fieldSizes, type FieldSize } from "./field-styles";

export type InputProps = Omit<ComponentProps<"input">, "size"> & {
  invalid?: boolean;
  size?: FieldSize;
  leading?: ReactNode;
  trailing?: ReactNode;
};

export function Input({
  invalid,
  size = "md",
  leading,
  trailing,
  className,
  id,
  ...props
}: InputProps) {
  const f = useFieldControl({
    id,
    invalid,
    "aria-describedby": props["aria-describedby"],
  });
  const input = (
    <input
      id={f.id}
      aria-invalid={f.invalid || undefined}
      aria-describedby={f["aria-describedby"]}
      {...props}
      className={cn(
        fieldBase,
        fieldSizes[size],
        "w-full",
        fieldBorder(f.invalid),
        leading ? "pl-9" : undefined,
        trailing ? "pr-10" : undefined,
        className,
      )}
    />
  );
  if (!leading && !trailing) return input;
  return (
    <div className="relative w-full">
      {leading && (
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-fg-muted">
          {leading}
        </span>
      )}
      {input}
      {trailing && (
        <span className="absolute inset-y-0 right-1.5 flex items-center text-fg-muted">
          {trailing}
        </span>
      )}
    </div>
  );
}
