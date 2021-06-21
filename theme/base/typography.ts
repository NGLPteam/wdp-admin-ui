// Base Typography
// --------------------
import { css } from "styled-components";
import { tHeading } from "theme/mixins/typography";

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
    font-weight: var(--font-weight-h1);
    color: var(--header-color);
  }

  h1 {
    ${tHeading(1)}
  }

  h2 {
    ${tHeading(2)}
  }

  h3 {
    ${tHeading(3)}
  }

  h4 {
    ${tHeading(4)}
  }

  h5 {
    ${tHeading(5)}
  }

  h6 {
    ${tHeading(6)}
  }
`;
