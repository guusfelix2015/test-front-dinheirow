import { Hero, HeroesApiResponse } from "@/types";
import { HeroCard } from "./hero-card";
import { Skeleton } from ".";

export const HeroList = ({ heroes }: { heroes: Hero[] }) => {
  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-5 place-content-start">
      {!heroes.length &&
        Array.from({ length: 15 }).map((_, index) => (
          <Skeleton className="h-60 w-full rounded-lg" key={index} />
        ))}

      {heroes.length && (
        <>
          {heroes?.map((hero, index) => (
            <HeroCard hero={hero} key={index} />
          ))}
        </>
      )}
    </main>
  );
};
