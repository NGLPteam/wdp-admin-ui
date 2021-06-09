// Base Typography
// --------------------

export default `
  body {
    font-size: var(--font-size-base);
    font-family: var(--font-face-base);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-base);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // font-family: var(--font-face-header, inherit);
    font-weight: var(--font-weight-regular);
  }

  h1 {
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1, var(--line-height-header));
  }
  h2 {
    font-size: var(--font-size-h2);
    line-height: var(--line-height-h2, var(--line-height-header));
  }
  h3 {
    font-size: var(--font-size-h3);
    line-height: var(--line-height-h3, var(--line-height-header));
  }
  // h4 {
  //   font-size: var(--font-size-h4);
  //   line-height: var(--line-height-h4, var(--line-height-header));
  // }
  // h5 {
  //   font-size: var(--font-size-h5);
  //   line-height: var(--line-height-h5, var(--line-height-header));
  // }
`;
