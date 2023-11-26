import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Webosaurus",
    address: {
      "@type": "PostalAddress",
      streetAddress: "358 rue Pierre Adt",
      addressLocality: "Pont à mousson",
      postalCode: "54700 ",
    },
    email: "remythiebaut52@gmail.com",
    url: "https://webosaurus.fr",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.921324 ",
      longitude: "6.068659",
    },
  };
  return (
    <Html lang="fr">
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="myScript"
          strategy="lazyOnload"
        />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index" />
        <meta
          name="google-site-verification"
          content="lJglgwqCjmHc9T4STICOyemXyUOQvxUPNiq87P5pP1k"
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDVB5LLZ" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
