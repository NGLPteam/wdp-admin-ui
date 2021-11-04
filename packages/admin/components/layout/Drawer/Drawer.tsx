import React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import * as Styled from "./Drawer.styles";
import { ButtonControl } from "components/atomic/buttons/";
import { useQueryStateContext } from "hooks";
import LoadingCircle from "components/atomic/loading/LoadingCircle";

import type { BaseRoute } from "routes/NextNamedRoutes";

/**
 * A drawer for complex actions, forms.
 * Add unmountOnExit to destroy the drawer on exit.
 */
const Drawer = ({
  dialog,
  label,
  header,
  buttons,
  children,
  onClose,
  hideOnClickOutside = true,
}: Props) => {
  const uidLabel = useUID();
  const uidDesc = useUID();
  const { t } = useTranslation();
  const { loading } = useQueryStateContext();

  const handleClose = () => {
    if (dialog && dialog.hide) dialog.hide();
    if (onClose) onClose();
  };

  return (
    <Styled.DialogBackdrop {...dialog}>
      <Styled.Dialog
        aria-labelledby={uidLabel}
        aria-describedby={uidDesc}
        hideOnClickOutside={hideOnClickOutside}
        {...dialog}
      >
        <Styled.Header>
          <Styled.HeaderBar>
            <div className="t-label-md" id={uidLabel}>
              {label}
            </div>
            <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
              {t("close")}
            </ButtonControl>
          </Styled.HeaderBar>
          <Styled.H1 id={uidDesc}>{header}</Styled.H1>
        </Styled.Header>
        {loading ? (
          <Styled.Content>
            <LoadingCircle />
          </Styled.Content>
        ) : (
          <>
            <Styled.HeaderButtons>{buttons}</Styled.HeaderButtons>
            <Styled.Content>{dialog.visible && children}</Styled.Content>
          </>
        )}
      </Styled.Dialog>
    </Styled.DialogBackdrop>
  );
};

interface Props {
  dialog: DialogProps;
  /** Drawer label, displayed next to the close button */
  label: string;
  /** Drawer header */
  header: string;
  /** A row of buttons below the header */
  buttons?: React.ReactNode;
  /** Drawer content */
  children?: JSX.Element | string | null;
  /** Adds a Save button to the drawer footer. Function runs on save */
  onSave?: () => void;
  /** Function runs on close or cancel */
  onClose?: () => void;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside: boolean;
  /** Actions defined here will create a row of buttons below the header */
  actions?: {
    routes?: BaseRoute[];
    handleDelete?: () => void;
  };
}

export default Drawer;
