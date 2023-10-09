import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webcraft - Presentation",
  description: "Développeur web, créateur de site web",
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
