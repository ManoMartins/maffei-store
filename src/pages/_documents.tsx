import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt_BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="language" content="pt-BR" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/public/favicon.ico" />
        </Head>

        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
