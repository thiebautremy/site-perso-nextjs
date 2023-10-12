import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webcraft - Présentation",
  description:
    "Webcraftman, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO.",
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
