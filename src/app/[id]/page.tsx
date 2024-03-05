"use client";

import { MainImage } from "@/components";
import { HeroInfo } from "@/components/hero-info";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getHeroDetailsById, selectCharacterById } from "@/store/characters";
import { getComicsByHeroId } from "@/store/comics";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function HeroDetails({ params }: Props) {
  const comics = useAppSelector((state) => state.comics);
  const dispatch = useAppDispatch();

  const { id } = params;

  const character = useAppSelector(selectCharacterById(Number(id)));

  const description = character?.description === '' ? 'Descrição não informada' : character?.description;

  useEffect(() => {
    dispatch(getComicsByHeroId(Number(id)));
  }, [id, dispatch]);

  useEffect(() => {
    if (!id) return;

    dispatch(getHeroDetailsById(Number(id)));
  }, [id, dispatch]);

  return (
    <>
      <div className="flex mt-4 mb-4">
        <Link
          href="/"
          className="flex items-center gap-2 p-3 mb-1 rounded-md bg-red-700 hover:bg-red-500"
        >
          <ArrowLeft />
          <span>Go back</span>
        </Link>
      </div>

      {character && <MainImage thumbnail={character.thumbnail} />}

      <main className="flex items-center overflow-x-hidden">
        {comics && character && (
          <HeroInfo
            name={character?.name}
            description={description ?? ''}
            comics={comics?.comics}
          />
        )}
      </main>
    </>
  );
}
