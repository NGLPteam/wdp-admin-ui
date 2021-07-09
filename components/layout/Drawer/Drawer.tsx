import React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";
import { ButtonControl, Button } from "components/atomic/buttons/";
import * as Styled from "./Drawer.styles";

/**
 * A drawer for complex actions, forms.
 * Add unmountOnExit to destroy the drawer on exit.
 */
const Drawer = ({
  dialog,
  label,
  header,
  children,
  onSave,
  onClose,
}: Props) => {
  // const dialog = useDialogState({ animated: true });
  const uidLabel = useUID();
  const uidDesc = useUID();
  const { t } = useTranslation("common");

  const handleSave = () => {
    dialog.hide();
    if (onSave) onSave();
  };

  const handleClose = () => {
    dialog.hide();
    if (onClose) onClose();
  };

  return (
    <Styled.DialogBackdrop {...dialog}>
      <Styled.Dialog
        aria-labelledby={uidLabel}
        aria-describedby={uidDesc}
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
        <Styled.Content>{dialog.visible && children}</Styled.Content>
        <Styled.Footer className="l-flex l-flex--gap">
          {onSave && <Button onClick={handleSave}>{t("save")}</Button>}
          <Button secondary onClick={handleClose}>
            {t("cancel")}
          </Button>
        </Styled.Footer>
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
  /** Drawer content */
  children: JSX.Element;
  /** Adds a Save button to the drawer footer. Function runs on save */
  onSave?: () => void;
  /** Function runs on close or cancel */
  onClose?: () => void;
}

export default Drawer;
