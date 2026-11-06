import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { useFieldControl } from "./Field";
import { fieldBase, fieldBorder } from "./field-styles";

export type TextareaProps = ComponentProps<"textarea"> & {
  invalid?: boolean;
  autoResize?: boolean;
};

export function Textarea({ invalid, autoResize, className, id, onInput, ...props }: TextareaProps) {
  const f = useFieldControl({
    id,
    invalid,
    "aria-describedby": props["aria-describedby"],
  });
  return (
    <textarea
      id={f.id}
      aria-invalid={f.invalid || undefined}
      aria-describedby={f["aria-describedby"]}
      rows={3}
      {...props}
      onInput={(e) => {
        if (autoResize) {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
        }
        onInput?.(e);
      }}
      className={cn(
        fieldBase,
        "w-full px-3 py-2 text-sm",
        autoResize ? "resize-none overflow-hidden" : "resize-y",
        fieldBorder(f.invalid),
        className,
      )}
    />
  );
}
