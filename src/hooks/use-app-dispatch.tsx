"use client";
import { type AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => {
  return useDispatch() as AppDispatch;
};
