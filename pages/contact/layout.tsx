import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THIEBAUT Rémy - Contact",
  description: "Développeur web, créateur de site web",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
