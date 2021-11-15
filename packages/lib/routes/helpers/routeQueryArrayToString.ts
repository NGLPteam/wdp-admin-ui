import isArray from "lodash/isArray";

export default function routeQueryArrayToString(
  item?: string | string[]
): string {
  if (!item) return "";
  return isArray(item) ? item[0] : item;
}
