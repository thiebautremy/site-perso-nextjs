import { StaticImageData } from "next/image";

export type Article = {
  id: number;
  slug: string;
  title: string;
  text: string;
  catchPhrase: string;
  picture: { src: StaticImageData; alt: string; title: string };
  publishedAt: string;
  updatedAt: string;
  tag: string;
  readingTime: number;
};
