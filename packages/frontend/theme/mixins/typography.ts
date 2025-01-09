// Base heading styling
export function tHeading(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return `
    font-family: var(--font-face-header);
    font-size: var(${`--font-size-h${size}`});
    font-weight: var(${`--font-weight-h${size}, 400`});
    line-height: var(${`--line-height-h${size}`});
    letter-spacing: var(${`--letter-spacing-h${size}`});
  `;
}
