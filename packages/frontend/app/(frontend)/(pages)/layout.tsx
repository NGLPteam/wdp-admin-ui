import { graphql } from "relay-runtime";
import { PropsWithChildren } from "react";
import getStaticGlobalContextData from "contexts/GlobalStaticContext/getStaticGlobalContextData";
import { GlobalStaticContextProvider } from "contexts/GlobalStaticContext/GlobalStaticContext";
import ThemeProvider from "contexts/ThemeProvider";
import AppBody from "components/global/AppBody";
import fetchQuery from "@/lib/relay/fetchQuery";
import RelayEnvironmentProvider from "@/lib/relay/RelayClientEnvProvider";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { layoutAllPagesQuery as Query } from "@/relay/layoutAllPagesQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { SessionProvider } from "@/lib/auth/session";

export default async function PageLayout({ children }: PropsWithChildren) {
  const globalData = await getStaticGlobalContextData();

  const { data, records } = await fetchQuery<Query>(query, {});

  const theme = data?.globalConfiguration?.theme;

  return (
    <SessionProvider>
      <GlobalStaticContextProvider globalData={globalData}>
        <RelayEnvironmentProvider>
          <UpdateClientEnvironment records={records}>
            <ThemeProvider theme={theme}>
              <StyledComponentsRegistry>
                <AppBody data={data}>{children}</AppBody>
              </StyledComponentsRegistry>
            </ThemeProvider>
          </UpdateClientEnvironment>
        </RelayEnvironmentProvider>
      </GlobalStaticContextProvider>
    </SessionProvider>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query layoutAllPagesQuery {
    ...AppBodyFragment
    globalConfiguration {
      theme {
        color
        font
      }
    }
  }
`;
