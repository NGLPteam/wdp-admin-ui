import React, { useMemo } from "react";
import Head from "next/head";
import {
  SSRKeycloakProvider,
  SSRCookies,
  useKeycloak,
} from "@react-keycloak/ssr";
import { RelayEnvironmentProvider } from "relay-hooks";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import type { AppProps, AppContext } from "next/app";
import type { KeycloakInitOptions, KeycloakInstance } from "keycloak-js";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AppContextProvider } from "contexts";
import type { Page } from "types/page";

import GlobalStyles from "theme";
import { AppBody, DrawerController } from "components/global";
import useLatest from "hooks/useLatest";
import { useSetLocale } from "hooks/useSetLocale";

import environment from "relay/environment";
import keycloakConfig from "utils/keycloak";
import parseCookies from "utils/parseCookies";

import { RouteHelper } from "routes";

import { Toast } from "components/atomic";

const NGLPApp = ({
  Component,
  pageProps,
  cookies = {},
  records: r,
}: AppProps & InitialProps) => {
  useSetLocale("en");

  useRemoveServerInjectedCSS();
  const records = useDeserializeRecords(r);

  const persistor = SSRCookies(cookies);

  const initOptions: KeycloakInitOptions = {
    onLoad: "check-sso",
  };

  if (typeof window !== "undefined" && window?.location?.origin) {
    initOptions.silentCheckSsoRedirectUri = `${window.location.origin}/silent-sso.html`;
  }

  const ssrProps: KeycloakProviderProps = {
    initOptions,
    keycloakConfig,
    LoadingComponent: <>Loading</>,
    persistor,
  };

  // Handle redirect routes.
  const router = useRouter();
  if (process.browser) {
    const activeRoute = RouteHelper.activeRoute();
    if (activeRoute?.redirect) {
      router.replace({
        pathname: activeRoute?.redirect,
        query: { ...router.query },
      });
    }
  }

  const defaultLayout = ({
    PageComponent,
    pageComponentProps,
  }: {
    PageComponent: typeof Component;
    pageComponentProps: typeof pageProps;
  }) => <PageComponent {...pageComponentProps} />;

  const getLayout = Component.getLayout || defaultLayout;

  return (
    <React.Fragment>
      <Head>
        <title>WDP Admin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyles />
      <SSRKeycloakProvider {...ssrProps}>
        <KeycloakRelayProvider records={records}>
          <AppContextProvider>
            <AppBody>
              <Toast />
              {getLayout({
                PageComponent: Component,
                pageComponentProps: pageProps,
              })}
              <DrawerController />
            </AppBody>
          </AppContextProvider>
        </KeycloakRelayProvider>
      </SSRKeycloakProvider>
    </React.Fragment>
  );
};

NGLPApp.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req) || {},
    pageProps: {},
  };
};

type KeycloakProviderProps = React.ComponentProps<typeof SSRKeycloakProvider>;

interface InitialProps {
  cookies?: Record<string, string>;
  records?: RecordMap;
  Component: Page;
}

interface KeycloakRelayProps {
  children: React.ReactNode;
  records?: RecordMap;
}

function KeycloakRelayProvider({ children, records }: KeycloakRelayProps) {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const keycloakRef = useLatest(keycloak);

  const env = useMemo(() => {
    return environment(keycloakRef, records);
  }, [keycloakRef, records]);

  return (
    <RelayEnvironmentProvider environment={env}>
      {children}
    </RelayEnvironmentProvider>
  );
}

function useRemoveServerInjectedCSS() {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
}

function useDeserializeRecords(r: RecordMap | null | undefined): RecordMap {
  return useMemo<RecordMap>(() => {
    if (r) return r;

    if (typeof document !== "undefined") {
      const recordsData = document.getElementById("relay-data")?.innerHTML;

      if (recordsData) {
        const records: RecordMap = JSON.parse(
          Buffer.from(recordsData, "base64").toString()
        );

        return records;
      }
    }

    return {} as RecordMap;
  }, [r]);
}

export default appWithTranslation(NGLPApp);
