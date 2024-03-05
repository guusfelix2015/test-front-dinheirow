import { twMerge } from "tailwind-merge";

export function classNames(...classes: unknown[]) {
  const classesString = classes.filter(Boolean).join(" ");
  return twMerge(classesString);
}
