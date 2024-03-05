import Image from "next/image";
import { Comic } from "@/types";

export const HeroInfo = ({
  name,
  description,
  comics,
}: {
  name: string;
  description: string;
  comics: Comic[];
}) => {
  const uniqueComics = comics.filter(
    (comic, index) =>
      index ===
      comics.findIndex(
        (item) =>
          item.thumbnail.path === comic.thumbnail.path &&
          item.thumbnail.extension === comic.thumbnail.extension
      )
  );

  return (
    <div className="flex flex-col max-w-5xl">
      <div className="flex flex-col gap-2">
        <h1 className="w-full text-3xl font-bold leading-tight break-words md:text-6xl mt-4">
          {name}
        </h1>
        <p className="md:text-x tx-white">{description}</p>
      </div>

      <div className="gap-1 block">
        <h2 className="text-xl font-bold md:text-3xl mt-2 mb-4">Comics</h2>
      </div>
      {uniqueComics.length > 0 ? (
        <div className="flex flex-nowrap gap-4 overflow-x-scroll w-full scrollbar-thumb-gray-900 scrollbar-thin scrollbar-track-gray-500">
          {uniqueComics.map((comic, i) => (
            <div key={i} className="min-w-[200px]">
              <Image
                unoptimized
                quality={100}
                width={200}
                height={100}
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-32 text-xl font-bold text-center text-white bg-gray-800 rounded-lg">
          <span>No comics found</span>
        </div>
      )}
    </div>
  );
};
