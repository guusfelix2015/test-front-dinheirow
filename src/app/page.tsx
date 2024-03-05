"use client";
import { HeroList, SearchHero } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getCharacters, charactersSlice } from "@/store/characters";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { characters, page } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  console.log(value);


  const handleNextPage = () => {
    dispatch(charactersSlice.actions.setPage(page + 1));
  };

  const handlePreviousPage = () => {
    if (page >= 1) {
      dispatch(charactersSlice.actions.setPage(page - 1));
    }
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch, page]);

  const filterCharacterByName = characters.filter((character) => {
    return character.name.includes(value);
  });

  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-4">
        <div className="flex items-center gap-4">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            <ArrowLeftSquare />
          </button>
          {page}
          <button onClick={handleNextPage}>
            <ArrowRightSquare />
          </button>
        </div>
        <SearchHero onSearch={(searchValue) => {
          setValue(searchValue);
        }} />
      </div>
      {characters && <HeroList heroes={filterCharacterByName} />}
    </>
  );
}
