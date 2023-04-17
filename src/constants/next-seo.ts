import { DefaultSeoProps } from "next-seo";

import { SITE_METADATA } from "../constants/site";

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.name,
  },
  twitter: {
    // @author_handle
    handle: "@MyCenterPortal",
    // @publisher_handle
    site: "@MyCenterPortal",
    cardType: "summary_large_image",
  },
};
