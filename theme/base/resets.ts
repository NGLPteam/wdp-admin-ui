// Resets
// --------------------
import { css } from "styled-components";

export default css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  html,
  body,
  margin,
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
    // Set the base font size here, which will correspond to 1em inside <body>
    font-size: 100%;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: geometricPrecision;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Make images easier to work with */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    letter-spacing: inherit;
    text-rendering: inherit;
  }

  /* Remove all animations for people that prefer not to see them */
  /* stylelint-disable scss/media-feature-value-dollar-variable, declaration-no-important */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  /* Set svg fill to current color */
  svg {
    fill: currentColor;
  }

  /* Reset common details gotchas */
  details summary {
    cursor: pointer;
    > * {
      display: inline;
    }
  }

  /* Remove button styling */
  button {
    padding: 0;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;
  }

  /* Remove link styling */
  a {
    color: inherit;
    text-decoration: none;
  }
`;
