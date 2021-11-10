import { css } from "styled-components";
export { tTruncate, tLineClamp } from "@wdp/lib/theme/mixins";

// Base heading styling
export function tHeading(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return css`
    font-size: var(${`--font-size-h${size}`});
    line-height: var(${`--line-height-h${size}`});
    letter-spacing: var(${`--letter-spacing-h${size}`});
  `;
}

export const tCopySmall = css`
  font-size: var(--font-size-base-sm);
  line-height: var(--line-height-base-sm);
  letter-spacing: var(--letter-spacing-base-sm);
`;

export function tLabel(style: "sm" | "lg" | "mix") {
  return css`
    text-transform: ${style === "mix" ? "none" : "uppercase"};
    font-size: var(--font-size-label-${style});
    letter-spacing: var(--letter-spacing-label-${style});
    line-height: var(--line-height-label-${style});
  `;
}
