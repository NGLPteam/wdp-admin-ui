// Root CSS variables
// --------------------
// Trying out HSL values for NGLP - these can easily be reverted back to HEX
import { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { transition, createColors } from "theme/base/variables";

const { duration, timing } = transition.colorMode;

export default css`
  :root {
    /* colors */
    ${createColors()}

    /* system colors */

    /* fonts */
    --font-face-base: "Karla", serif;

    /* font weights */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* font sizes */
    --font-size-base: 1rem;
    --line-height-base: ${pxToRem("20px")};
    --font-size-sm: ${pxToRem("14px")};

    /* label font sizes */
    --font-size-label-lg: ${pxToRem("15px")};
    --line-height-label-lg: ${pxToRem("24px")};
    --font-size-label-md: ${pxToRem("14px")};
    --line-height-label-md: ${pxToRem("20px")};
    --font-size-label-sm: ${pxToRem("13px")};
    --line-height-label-sm: ${pxToRem("20px")};

    /* header font sizes */
    --font-size-h1: ${pxToRem("30px")};
    --line-height-h1: ${pxToRem("36px")};
    --font-size-h2: ${pxToRem("22px")};
    --line-height-h2: ${pxToRem("28px")};
    --font-size-h3: ${pxToRem("18px")};
    --line-height-h3: ${pxToRem("24px")};

    /* font colors */
    --color-base: var(--neutral90);
    --color-dark-bg: var(--brand20);

    /* layout colors */
    --bg-color-base: var(--neutral00);

    /* layout sizes and margins */
    --container-max: 1000px;
    --container-column-margin: ${pxToRem("20px")};

    /* layout grid */
    --grid-column-gap: ${pxToRem("16px")};

    /* transitions */
    --base-duration: ${duration}s;
    --base-timing: ${timing};
    --border-transition: border ${duration}s ${timing};
    --color-transition: color ${duration}s ${timing};

    /* border radius */
    --border-radius-lg: ${pxToRem("40px")};
  }
`;
