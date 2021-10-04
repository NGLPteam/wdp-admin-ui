import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";

import { respond } from "theme/mixins/base";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: var(--fieldset-field-spacing, ${pxToRem(24)});
  padding-block-end: var(--fieldset-field-spacing, ${pxToRem(24)});
`;

export const Legend = styled.legend`
  padding-block-end: var(--fieldset-field-spacing, ${pxToRem(24)});
`;

export const Fields = styled.div`
  --table-border: 1px solid var(--border-color);

  display: flex;
  flex-direction: row;
  gap: var(--fieldset-field-spacing, ${pxToRem(24)});
  align-items: start;

  ${respond(
    css`
      flex-direction: column;
      border-bottom: var(--table-border);
    `,
    50
  )}
`;

export const Field = styled.div`
  flex: 1 1 auto;
  ${respond(
    css`
      width: 100%;
    `,
    50
  )}
`;

export const Actions = styled.div`
  --fieldset-actions-column-spacing: ${pxToRem(24)};
  flex: 0;
  padding-block-start: ${pxToRem(25)};

  ${respond(
    css`
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-block-end: var(--fieldset-actions-column-spacing);
      padding-block-start: 0;
    `,
    50
  )}
`;
