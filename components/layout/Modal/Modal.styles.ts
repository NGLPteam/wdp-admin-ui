import styled from "styled-components";
import { noInsetSupport } from "theme/mixins/base";
import {
  Dialog as BaseDialog,
  DialogBackdrop as BaseDialogBackdrop,
} from "reakit/Dialog";
import { aBgLight, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const DialogBackdrop = styled(BaseDialogBackdrop)`
  position: fixed;
  background: var(--dialog-backdrop-background);
  transition: opacity 0.1s var(--base-timing);
  opacity: 0;
  inset-block: 0;
  inset-inline: 0;
  z-index: var(--z-index-drawer-backdrop);

  ${noInsetSupport(`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `)}

  &[data-enter] {
    opacity: 1;
  }
`;

export const Modal = styled(BaseDialog)`
  --modal-padding-inline: ${basePadding(10)};
  position: fixed;
  top: 30px;
  left: 40vw;
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(497)};
  overflow: auto;
  border: 1px solid var(--neutral10);
  border-radius: 6px;
  z-index: var(--z-index-drawer);
  ${aBgLight()}
`;

export const Header = styled.header`
  padding-block-start: ${basePadding(10)};
  padding-inline-start: var(--modal-padding-inline);
  padding-inline-end: var(--modal-padding-inline);
  background: var(--background-color);
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--accent-color);
  padding-block-end: ${basePadding(10)};
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-block-end: ${basePadding(12)};
  padding-inline-start: var(--modal-padding-inline);
  padding-inline-end: var(--modal-padding-inline);
`;
