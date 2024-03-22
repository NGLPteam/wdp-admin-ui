import { PropsWithChildren } from "react";
import AppContextProvider from "contexts/AppContextProvider";
import getStaticGlobalContextData from "contexts/GlobalStaticContext/getStaticGlobalContextData";
import { GlobalStaticContextProvider } from "contexts/GlobalStaticContext/GlobalStaticContext";
import AppLayout from "@/components/global/AppLayout";
import RelayEnvironmentProvider from "@/lib/relay/RelayClientEnvProvider";
import StyledComponentsRegistry from "@/lib/styled-components/registry";

export default async function PageLayout({ children }: PropsWithChildren) {
  const globalData = await getStaticGlobalContextData();

  return (
    <GlobalStaticContextProvider globalData={globalData}>
      <RelayEnvironmentProvider>
        <AppContextProvider>
          <StyledComponentsRegistry>
            <AppLayout>{children}</AppLayout>
          </StyledComponentsRegistry>
        </AppContextProvider>
      </RelayEnvironmentProvider>
    </GlobalStaticContextProvider>
  );
}
