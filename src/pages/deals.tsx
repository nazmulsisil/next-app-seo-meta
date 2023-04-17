import { SITE_METADATA } from "@/constants/site";
import { NextSeo } from "next-seo";

const DealsPage = () => {
  return (
    <>
      <NextSeo
        title="Deals page title"
        description="Deals page description"
        canonical={`${SITE_METADATA.siteUrl}deals/`}
        openGraph={{
          url: `${SITE_METADATA.siteUrl}deals/`,
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://via.placeholder.com/800x600?text=Og+Image+01",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://via.placeholder.com/900x800?text=Og+Image+02",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://via.placeholder.com/1200x800?text=Og+Image+03" },
            { url: "https://via.placeholder.com/1200x1000?text=Og+Image+04" },
          ],
          siteName: SITE_METADATA.name,
        }}
        twitter={{
          handle: "@MyCenterPortal",
          site: "@MyCenterPortal",
          cardType: "summary_large_image",
        }}
      />

      <h1>Deals Page Content</h1>
    </>
  );
};

export default DealsPage;
