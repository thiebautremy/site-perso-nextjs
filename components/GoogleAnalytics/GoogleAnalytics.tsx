import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtagHelper";
import Script from "next/script";

type GoogleAnalyticsProps = {
  GA_MEASUREMENT_ID: string;
};
const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  GA_MEASUREMENT_ID,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E4H3JCJ3C8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E4H3JCJ3C8');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
