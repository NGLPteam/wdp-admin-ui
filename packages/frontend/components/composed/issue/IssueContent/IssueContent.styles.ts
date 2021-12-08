import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { lGrid, respond } from "theme/mixins";

export const SectionWrapper = styled.div`
  padding-block-start: ${pxToRem(80)};
  padding-block-end: var(--container-padding-xlg);
`;

export const SectionInner = styled.div`
  ${lGrid()}
  grid-template-areas: "left left left left left left left left . right right right";

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "right"
      "left";
  `,
    70
  )}
`;

export const LeftSide = styled.div`
  grid-area: left;
`;

export const RightSide = styled.div`
  grid-area: right;
`;
