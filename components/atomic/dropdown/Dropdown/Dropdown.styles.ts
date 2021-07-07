import styled from "styled-components";
import { basePadding, aBgDark } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { getZIndex } from "theme/mixins/base";

export const Wrapper = styled.div`
  z-index: ${getZIndex("dropdown")};

  &:focus {
    outline: 0;
  }
`;

export const List = styled.ul<ListProps>`
  position: absolute;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  max-inline-size: 300px;
  min-inline-size: 164px;
  border-radius: ${pxToRem("4px")};
  padding: ${basePadding(4)} 0;
  color: var(--accent-light);
  transition: opacity 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
  margin-top: ${basePadding(1)};
  opacity: 1;

  &[aria-hidden="true"] {
    opacity: 0;
  }
`;

interface ListProps {
  bgColor?: string;
}

export const Item = styled.li`
  transition: var(--color-transition), var(--background-transition);
  padding: ${basePadding(2)} ${basePadding(6)};
  text-align: left;
  color: var(--color);

  &:hover,
  &:focus-within:not(:hover) {
    ${aBgDark()}

    .a-bg-brand90 & {
      background: none;
    }
  }
`;
