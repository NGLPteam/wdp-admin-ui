import { css } from "styled-components";
import { pxToRem } from "./functions";

export function aTextGlow(type: "darkMode" | "lightMode") {
  return type === "lightMode"
    ? css`
        text-shadow: 0 0 ${pxToRem("6px")} hsla(var(--brand100), 0.2);
      `
    : css`
        text-shadow: 0 0 ${pxToRem("8px")} var(--brand30);
      `;
}

export function aGlow(type: "darkMode" | "lightMode") {
  return type === "lightMode"
    ? css`
        box-shadow: 0 0 ${pxToRem("6px")} hsla(var(--brand100), 0.2);
        outline: 0;
        transition: box-shadow var(--base-duration) var(--base-timing);
      `
    : css`
        box-shadow: 0 0 ${pxToRem("8px")} var(--brand30);
        outline: 0;
        transition: box-shadow var(--base-duration) var(--base-timing);
      `;
}

export function aBgDark(bgColor = "brand100") {
  return css`
    --background-color: var(--${bgColor});
    --color: var(--brand20);
    --color-light: var(--brand20); // Passes AA
    --color-lighter: var(--brand30); // AA+, Can pass under some circumstances
    --header-color: var(--neutral00);
    --accent-color: var(--neutral00);
    --accent-light: var(--neutral10);
    background-color: var(--background-color);
    color: var(--color);
  `;
}

export function aBgLight(bgColor = "neutral00") {
  return css`
    --background-color: var(--${bgColor});
    --color: var(--neutral90);
    --color-light: var(--neutral70); // Passes AA
    --color-lighter: var(--neutral60); // AA+, Can pass under some circumstances
    --header-color: var(--brand100);
    --accent-color: var(--brand100);
    --accent-light: var(--brand90);
    background-color: var(--background-color);
    color: var(--color);
  `;
}

export function aBaseInput() {
  return css`
    border: 1px solid var(--color-lighter);
    background-color: var(--background-color);
    color: var(--color);
    border-radius: var(--input-border-radius, 0);
    min-height: var(--input-min-height, ${basePadding(8)});
    padding: var(--input-padding, 0 ${basePadding(2)});
    transition: var(--background-transition), var(--color-transition),
      var(--border-transition), var(--opacity-transition);
    text-align: var(--input-text-align, left);

    &:focus,
    &:hover {
      outline: 0;
      border-color: var(--accent-color);
    }

    &:focus-visible {
      ${aGlow("lightMode")}
      background-color: var(--input-focus-background, inherit);
    }

    &::placeholder {
      color: var(--color-lighter);
    }

    &:disabled,
    [aria-disabled="true"] {
      opacity: 0.35;
    }
  `;
}

// Returns padding at base 4
// size 1 = 4px, size 2 = 8px, etc
export function basePadding(size: number) {
  return pxToRem(`${size * 4}px`);
}
