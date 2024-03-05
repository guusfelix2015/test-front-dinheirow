import { HeroThumbnail } from "@/types";
import Image from "next/image";

export const MainImage = ({ thumbnail }: { thumbnail: HeroThumbnail }) => {
  return (
    <div className="max-w-md w-full">
      <Image
        unoptimized
        width={500}
        height={500}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={thumbnail.path}
      />
    </div>
  );
};
