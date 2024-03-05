"use client";
import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
