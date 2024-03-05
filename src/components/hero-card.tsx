import { Hero } from "@/types";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hero: HeroCard;
}

interface HeroCard {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const HeroCard = ({ hero }: Props) => {
  return (
    <Link href={`/${hero.id}`}>
      <div className="relative flex flex-col items-center justify-center p-1 bg-slate-800 rounded-lg shadow-lg aspect-square">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 bg-marvel-red/30 hover:opacity-100">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-marvel-red">
            <PlusCircle />
            <span className="font-bold text-white uppercase">See more</span>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-t-lg shadow-lg">
          <Image
            unoptimized
            width={500}
            height={500}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
            className="object-width={500} height={500}"
          />
        </div>
        <div className="flex items-center justify-center w-full h-10 p-1 text-white rounded-b-lg bg-marvel-red">
          <h2 className="font-bold text-center truncate">{hero.name}</h2>
        </div>
      </div>
    </Link>
  );
};
