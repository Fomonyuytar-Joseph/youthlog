import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function allFieldsFilled(
  ...fields: (string | number | null | undefined)[]
): boolean {
  return fields.every((field) => {
    if (typeof field === "string") return field.trim() !== "";
    return field !== null && field !== undefined;
  });
}

