"use client";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./input";
import { Search } from "lucide-react";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchHero = ({ onSearch }: Props) => {
  const search = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 300);

  return (
    <div className="relative flex w-full max-w-[350px]">
      <Search className="pointer-events-none absolute left-[10px] top-[10px] h-4 w-4 text-gray-500" />
      <Input

        type="search"
        placeholder="Pesquisar por nome"
        className="pl-8"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
};
