import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

interface WrapperProps extends React.HTMLProps<HTMLButtonElement> {
  $checked?: boolean;
}

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  $checked?: boolean;
}

const hoverStyles = `
  --background-color: var(--brand10);
  transition: var(--background-transition);
`;

const selectedStyles = `
  --background-color: var(--brand100);
  transition: var(--background-transition);
  --color: var(--neutral00);
  --color-light: var(--neutral00);
`;

export const Wrapper = styled.div<Pick<WrapperProps, "$checked">>`
  --color: var(--brand100);
  --button-background: transparent;

  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: default;
  background-color: var(--background-color);
  color: var(--color);

  &:hover,
  &:focus,
  &:focus-within {
    ${({ $checked }) => !$checked && hoverStyles}
  }

  &:focus,
  &:focus-within {
    ${({ $checked }) => $checked && `--background-color: var(--brand70);`}
  }

  ${({ $checked }) => $checked && selectedStyles}

  &:first-child {
    margin-block-start: ${pxToRem(12)};
  }
  &:last-child {
    margin-block-end: ${pxToRem(12)};
  }
`;
export const Item = styled.label<Pick<LabelProps, "$checked">>`
  display: flex;
  align-items: flex-start;
  padding-block: ${pxToRem(16)};
  padding-inline-start: ${pxToRem(56)};
  width: 80%;
  cursor: pointer;
`;

export const Label = styled.span`
  font-weight: var(--font-weight-medium);
  text-align: left;
  padding-inline-end: ${pxToRem(15)};
  margin-block-start: -4px;

  input:disabled + & {
    cursor: default;
  }
`;

export const Metadata = styled.span`
  display: block;
  color: var(--color-light);
  margin-block-start: ${pxToRem(4)};
`;

export const ExpandButton = styled.button<Pick<WrapperProps, "$checked">>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  align-self: stretch;
  padding-block: ${pxToRem(16)};
  padding-inline-end: ${pxToRem(16)};
  color: var(--color);

  &:hover,
  &:focus,
  &:focus-within {
    ${({ $checked }) =>
      !$checked
        ? `  --button-background: var(--brand90);
             --color: var(--neutral00);
          `
        : ` --button-background: var(--brand20);
            --color: var(--brand100);`}
  }
`;

export const IconWrapper = styled.div`
  min-height: ${pxToRem(32)};
  display: inline-flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${pxToRem(4)};
  background-color: var(--button-background);
  padding: ${pxToRem(10)} ${pxToRem(12)};
  transition: var(--background-transition);
  visibility: var(--button-control-visibility, visible);
`;
