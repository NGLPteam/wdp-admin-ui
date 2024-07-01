import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { RelayEnvironmentProvider } from "react-relay";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { initialEnvironment } from "@wdp/lib/app";
import AppBody from "components/global/AppBody";

const FONTS = [
  "Karla-Regular",
  "Karla-Bold",
  "Karla-Italic",
  "Karla-Bold-Italic",
];

export default class AppDocument extends Document<Props> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & Props> {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    const relayServerSSR = new RelayServerSSR();
    const env = initialEnvironment(undefined, undefined, true);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceComponent: (Component) => (props) => {
          return (
            <RelayEnvironmentProvider environment={env}>
              <StyleSheetManager sheet={sheet.instance}>
                <AppBody>
                  <Component {...props} />
                </AppBody>
              </StyleSheetManager>
            </RelayEnvironmentProvider>
          );
        },
      });

    await Document.getInitialProps(ctx);
    await relayServerSSR.getCache();

    const records = env.getStore().getSource().toJSON();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            return sheet.collectStyles(
              <App
                {...props}
                // @ts-expect-error scaffolding
                records={records}
              />,
            );
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        records,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {FONTS.map((font) => (
            <React.Fragment key={font}>
              <link
                rel="preload"
                href={`/fonts/${font}.woff2`}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
            </React.Fragment>
          ))}
        </Head>
        <body>
          <template id="relay-data">
            {Buffer.from(JSON.stringify(this.props.records)).toString("base64")}
          </template>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

interface Props {
  records: RecordMap;
}
