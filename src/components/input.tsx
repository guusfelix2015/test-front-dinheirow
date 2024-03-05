"use client"
import { classNames } from "@/utils";
import { forwardRef } from "react";

type InputProps = JSX.IntrinsicElements["input"];

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        "text-gray-950 block h-9 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:ring-offset-1",
        props.className
      )}
    />
  );
});
