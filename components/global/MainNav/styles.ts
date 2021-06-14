import styled from "styled-components";

export const Nav = styled.nav`
  background: var(--brand100);
  padding: 0 var(--container-column-margin);
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--container-max);
  padding: 20px 0;
  color: var(--color-dark-bg);
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: 28px;
  }
`;
