import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          { rel: "manifest", href: "/site.webmanifest" },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#2b9cd7",
          },
        ]}
        additionalMetaTags={[
          { name: "msapplication-TileColor", content: "#2b9cd7" },
          { name: "theme-color", content: "#ffffff" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
