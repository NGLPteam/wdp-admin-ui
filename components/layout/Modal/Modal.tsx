import * as React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic/buttons";
import { DialogProps } from "reakit/Dialog";
import * as Styled from "./Modal.styles";

const Modal = ({
  dialog,
  label,
  children,
  hideOnClickOutside = true,
}: Props) => {
  const uidLabel = useUID();
  const uidDesc = useUID();
  const { t } = useTranslation();

  const handleClose = () => {
    if (dialog && dialog.hide) dialog.hide();
  };

  return (
    <Styled.DialogBackdrop {...dialog}>
      <Styled.Modal
        aria-labelledby={uidLabel}
        aria-describedby={uidDesc}
        hideOnClickOutside={hideOnClickOutside}
        {...dialog}
      >
        <Styled.Header>
          <div className="t-label-md" id={uidLabel}>
            {label}
          </div>
          <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
            {t("close")}
          </ButtonControl>
        </Styled.Header>
        <Styled.Content>
          {typeof children === "function"
            ? children({ handleClose })
            : children}
        </Styled.Content>
      </Styled.Modal>
    </Styled.DialogBackdrop>
  );
};

type RenderChildProps = {
  handleClose: () => void;
};

type RenderChild = (props: RenderChildProps) => JSX.Element;

interface Props {
  dialog: DialogProps;
  /** Modal label, displayed next to the close button */
  label?: string;
  /** Modal content */
  children?: RenderChild | React.ReactNode;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside?: boolean;
}

export default Modal;
