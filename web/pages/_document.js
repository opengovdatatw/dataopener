/* eslint-disable react/no-danger */

import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { env, ServerSideEnv } from "nextjs-apollo/client";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="zh-TW">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#171B2A"
          />
          <meta name="theme-color" content="#171B2A" />
          <link rel="stylesheet" type="text/css" href="/static/pace/pace.css" />
          <link rel="stylesheet" href="/static/css/reset.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script type="text/javascript" src="/static/pace/pace.min.js" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_TRACK_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.GA_TRACK_ID}');
              `,
            }}
          />
          <ServerSideEnv allows={["HTTP_URI"]} />
          <NextScript />
        </body>
      </html>
    );
  }
}
