import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Web craftman",
    address: {
      "@type": "PostalAddress",
      streetAddress: "358 rue Pierre Adt",
      addressLocality: "Pont à mousson",
      postalCode: "54700 ",
    },
    email: "remythiebaut52@gmail.com",
    url: "https://webcraftman.fr",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.921324 ",
      longitude: "6.068659",
    },
  };
  return (
    <Html lang="fr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
