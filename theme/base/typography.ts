// Base Typography
// --------------------
import { css } from "styled-components";

export default css`
  body {
    font-size: var(--font-size-base);
    font-family: var(--font-face-base);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-base);
  }

  strong {
    font-weight: var(--font-weight-medium);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // font-family: var(--font-face-header, inherit);
    font-weight: var(--font-weight-medium);
    color: var(--header-color);
  }

  h1 {
    font-size: var(--font-size-h1);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-h1);
  }

  h2 {
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-h2);
  }

  h3 {
    font-size: var(--font-size-h3);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-h3);
  }

  h4 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-h4);
  }

  h5 {
    font-size: var(--font-size-h5);
    line-height: var(--line-height-h5);
  }

  h6 {
    font-size: var(--font-size-h6);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-h6);
  }
`;
