import styled from "styled-components";
import { borderRadius, boxShadow } from "theme/base/variables";
import { tCopySmall } from "theme/mixins/typography";

export const DropdownWrapper = styled.div`
  background-color: var(--dropdown-background);
  border-radius: ${borderRadius.sm};
  border: 1px solid var(--color-base-neutral30);
  box-shadow: ${boxShadow.popUp};
`;

export const List = styled.ul`
  padding-inline-start: var(--padding-lg);
  padding-inline-end: var(--padding-lg);
  padding-block-start: var(--padding-md);
  padding-block-end: var(--padding-lg);
`;

export const Item = styled.li`
  white-space: nowrap;
  ${tCopySmall}

  > * {
    /* Set children to block for a larger click area */
    display: block;
  }

  & + & {
    margin-block-start: var(--padding-rg);
  }
`;
