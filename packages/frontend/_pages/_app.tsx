import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import {
  parseCookies,
  useRemoveServerInjectedCSS,
  useDeserializeRecords,
} from "@wdp/lib/app";
import { KeycloakRelayProvider, keycloakConfig } from "@wdp/lib/keycloak";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { AppHtmlHead } from "components/global";
import { updateI18n } from "i18n";
import { AppContextProvider } from "contexts";
import { LoadingPage } from "components/atomic";
import { GlobalStaticContextProvider } from "contexts/GlobalStaticContext";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import type { Page } from "@wdp/lib/types/page";
import type { KeycloakInitOptions } from "keycloak-js";
import type { AppProps, AppContext } from "next/app";

type KeycloakProviderProps = React.ComponentProps<typeof SSRKeycloakProvider>;

function App({
  Component,
  pageProps = {},
  cookies = {},
  records: r,
}: AppProps & InitialProps) {
  useRemoveServerInjectedCSS();

  updateI18n("en");

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
    persistor,
    LoadingComponent: <LoadingPage />,
  };

  const defaultLayout = ({
    PageComponent,
    pageComponentProps,
  }: {
    PageComponent: typeof Component;
    pageComponentProps: typeof pageProps;
  }) => <PageComponent {...pageComponentProps} />;

  const getLayout = Component.getLayout || defaultLayout;
  const { googleScholarData, ...globalData } = pageProps;

  return (
    <>
      <GlobalStaticContextProvider globalData={globalData}>
        <AppHtmlHead />
        {googleScholarData && (
          <GoogleScholarMetaTags entity={googleScholarData} />
        )}
        <SSRKeycloakProvider {...ssrProps}>
          <KeycloakRelayProvider records={records}>
            <AppContextProvider>
              {getLayout({
                PageComponent: Component,
                pageComponentProps: pageProps,
              })}
            </AppContextProvider>
          </KeycloakRelayProvider>
        </SSRKeycloakProvider>
      </GlobalStaticContextProvider>
    </>
  );
}
export default App;

App.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req) || {},
  };
};

interface InitialProps {
  cookies?: Record<string, string>;
  records?: RecordMap;
  Component: Page;
}