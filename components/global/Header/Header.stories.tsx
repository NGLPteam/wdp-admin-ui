import Header from "./";
import { Story } from "@storybook/react";
import {
  ViewerContext,
  RouterContextProvider,
  GlobalContextProvider,
} from "contexts";
type Props = React.ComponentProps<typeof Header>;

export default {
  title: "Components/Global/Header",
  component: Header,
  decorators: [
    (Story) => (
      <GlobalContextProvider>
        <RouterContextProvider>
          <Story />
        </RouterContextProvider>
      </GlobalContextProvider>
    ),
  ],
};

export const Default: Story<Props> = () => (
  <ViewerContext.Provider value={{ allowedActions: [] }}>
    <Header />
  </ViewerContext.Provider>
);

export const WithPartialPermissions: Story<Props> = () => (
  <ViewerContext.Provider
    value={{
      allowedActions: ["communities.read"],
    }}
  >
    <Header />
  </ViewerContext.Provider>
);

export const WithAllPermissions: Story<Props> = () => (
  <ViewerContext.Provider
    value={{
      allowedActions: ["communities.read", "users.read", "contributors.read"],
    }}
  >
    <Header />
  </ViewerContext.Provider>
);
