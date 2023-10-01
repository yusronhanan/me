import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Yusron Hanan - Software Engineer -focused Backend"
        />
        <meta
          name="image"
          content="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47e.svg"
        />
        <meta itemProp="name" content="YusronHanan" />
        <meta
          itemProp="description"
          content="Yusron Hanan - Software Engineer -focused Backend"
        />

        <meta name="og:title" content="Yusron Hanan - Software Engineer" />
        <meta
          name="og:description"
          content="Yusron Hanan - Software Engineer -focused Backend"
        />
        <meta
          name="og:image"
          content="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47e.svg"
        />
        <meta name="og:url" content="https://yusronhanan.dev/" />
        <meta name="og:site_name" content="YusronHanan" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
