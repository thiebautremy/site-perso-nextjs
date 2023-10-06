import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THIEBAUT Rémy - Projets",
  description: "Développeur web, créateur de site web",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
