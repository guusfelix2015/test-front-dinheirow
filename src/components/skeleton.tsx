import { classNames } from "@/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

export const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={classNames("animate-pulse bg-gray-500", className)}
    ></div>
  );
};
