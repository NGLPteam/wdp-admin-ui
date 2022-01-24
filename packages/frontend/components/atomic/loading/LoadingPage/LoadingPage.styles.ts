import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  padding-block-start: var(--container-v-padding);
  padding-block-end: var(--container-v-padding);
  padding-inline-start: var(--padding-rg);
  padding-inline-end: var(--padding-rg);
  overflow: hidden;
`;
