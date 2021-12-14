import styled from "styled-components";

export const List = styled.ul`
  display: flex;

  > * + * {
    &::before {
      content: "•";
      padding-inline-start: var(--padding-xs);
      padding-inline-end: var(--padding-xs);
    }
  }
`;
