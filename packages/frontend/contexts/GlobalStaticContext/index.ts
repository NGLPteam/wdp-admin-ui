export { GlobalStaticContextProvider } from "./GlobalStaticContext";
export { default as useGlobalStaticContext } from "./useGlobalStaticContext";
export { default as getStaticGlobalContextData } from "./getStaticGlobalContextData";
export { default as getStaticCommunityData } from "./getStaticCommunityData";
export { default as getStaticEntityData } from "./getStaticEntityData";
export const STATIC_PROPS_REVALIDATE = parseInt(
  process.env.NEXT_PUBLIC_STATIC_PROPS_REVALIDATE || "300",
  10,
);
