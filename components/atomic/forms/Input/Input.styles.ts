import styled from "styled-components";
import {
  aBaseInput,
  aBaseInputLabel,
  basePadding,
} from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${aBaseInputLabel};
`;

export const Input = styled.input`
  --input-min-height: ${pxToRem("42px")};
  --input-padding: 0 ${basePadding(4)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;
