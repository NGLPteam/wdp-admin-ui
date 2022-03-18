import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);
  padding-inline-start: var(--container-v-padding);
  padding-inline-end: var(--container-v-padding);
  border: 1px dashed var(--border-color);
  border-radius: var(--border-radius-md);
  color: var(--color-lighter);
  text-align: center;
`;
