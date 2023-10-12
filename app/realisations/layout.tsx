import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web craftman - Réalisations",
  description:
    "Découvrez toutes les réalisations de Web craftman : sites vitrines, projets professionels ou personnels.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
