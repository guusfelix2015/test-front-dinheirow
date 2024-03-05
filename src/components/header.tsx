import Image from "next/image";

export const HomeHeader = () => {
  return (
    <header className="flex flex-wrap mt-8">
      <Image
        unoptimized
        width={500}
        height={200}
        priority
        src="/img/marvel-logo.png"
        alt="Marvel Logo"
        className="w-32 lg:w-48"
      />
    </header>
  );
};

