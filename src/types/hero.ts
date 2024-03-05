export type HeroThumbnail = {
  path: string;
  extension: string;
};

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: HeroThumbnail;
}

export type HeroesApiResponse = {
  results: Hero[];
  offset: number;
  limit: number;
  total: number;
  count: number;
};
