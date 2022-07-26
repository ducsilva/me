import { RootState } from "@States/store";
import NextHead from "next/head";
import { useSelector } from "react-redux";

type HeadProps = {
  title?: string;
  url?: string;
  description?: string;
  shareImage?: string;
  keywords?: string;
  preventIndexing?: boolean;
};

const Head = () => {
  const { user } = useSelector((state: RootState) => state?.user);

  return (
    <NextHead>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <link rel="stylesheet" href="/nprogress.css" type="text/css" />

      <title>{user?.attributes?.Seo?.title ?? ""}</title>
      <meta name="keywords" content={user?.attributes?.Seo?.keywords} />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        property="og:url"
        content={user?.attributes?.Seo?.url}
        key="og:url"
      />
      <meta
        property="og:description"
        content={user?.attributes?.Seo?.description}
        key="og:description"
      />
      <meta
        property="og:image"
        content={user?.attributes?.Seo?.shareImage}
        key="og:image"
      />
      <link rel="canonical" href={user?.attributes?.Seo?.url} />

      {user?.attributes?.Seo?.preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )}
    </NextHead>
  );
};

export default Head;
