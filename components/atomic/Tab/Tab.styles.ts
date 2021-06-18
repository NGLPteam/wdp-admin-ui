import styled, { css } from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { basePadding, aTextGlow } from "theme/mixins/appearance";

const activeState = css`
  color: var(--accent-color);
  border-color: var(--accent-color);
`;

const Tab = styled.a<Props>`
  // Setting default values lets tabs work with any background
  --tab-color: inherit;
  --tab-hover-color: var(--color-light);

  display: inline-block;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding-bottom: ${basePadding(2)};
  color: var(--tab-color);
  transition: var(--border-transition), var(--color-transition);
  ${tLabel("md")}

  .a-bg-neutral00 & {
    // Specific values for white backgrounds
    --tab-color: var(--neutral80);
    --tab-hover-color: var(--neutral60);
  }

  &:hover {
    color: var(--tab-hover-color);
  }

  &:focus-visible {
    outline: 0;
    color: var(--accent-light);
    ${aTextGlow("lightMode")}
  }

  &:active {
    ${activeState}
  }

  ${({ active }) => (active ? activeState : "")}
`;

interface Props {
  active?: boolean;
}

export default Tab;
