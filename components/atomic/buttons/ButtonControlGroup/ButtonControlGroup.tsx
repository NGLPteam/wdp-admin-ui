import React from "react";
import {
  ButtonControl,
  ButtonControlDrawer,
  ButtonControlConfirm,
  Dropdown,
} from "components/atomic";
import * as Styled from "./ButtonControlGroup.styles";

type ButtonProps =
  | React.ComponentProps<typeof ButtonControl>
  | React.ComponentProps<typeof ButtonControlDrawer>
  | React.ComponentProps<typeof ButtonControlConfirm>;

function ButtonControlGroup({
  buttons,
  breakpoint = 40,
  menuLabel,
  toggleLabel,
  toggleText,
  closeDropdown,
}: Props) {
  function renderButton(props: ButtonProps, i: number) {
    const { children, ...buttonProps } = props;

    return "drawer" in props ? (
      <ButtonControlDrawer
        key={i}
        drawer={props.drawer}
        drawerQuery={props.drawerQuery}
        closeDropdown={closeDropdown}
        {...buttonProps}
      >
        {children}
      </ButtonControlDrawer>
    ) : "modalBody" in props ? (
      <ButtonControlConfirm
        key={i}
        modalBody={props.modalBody}
        modalLabel={props.modalLabel}
        closeDropdown={closeDropdown}
        {...buttonProps}
      >
        {children}
      </ButtonControlConfirm>
    ) : (
      <ButtonControl key={i} closeDropdown={closeDropdown} {...buttonProps}>
        {children}
      </ButtonControl>
    );
  }

  function renderDropdown(buttons: ButtonProps[]) {
    return (
      <Dropdown
        label={menuLabel}
        disclosure={
          <ButtonControl icon="ellipses" aria-label={toggleLabel}>
            {toggleText}
          </ButtonControl>
        }
        menuItems={buttons.map(renderButton)}
      />
    );
  }

  return (
    <>
      <Styled.ButtonWrapper breakpoint={breakpoint}>
        {buttons.map(renderButton)}
      </Styled.ButtonWrapper>
      <Styled.DropdownWrapper breakpoint={breakpoint}>
        {renderDropdown(buttons)}
      </Styled.DropdownWrapper>
    </>
  );
}

interface BaseProps {
  buttons: ButtonProps[];
  breakpoint?: string | number;
  menuLabel: string;
  toggleLabel?: string;
  toggleText?: string;
  closeDropdown?: () => void;
}

interface PropsWithLabel extends BaseProps {
  toggleLabel: string;
  toggleText?: never;
}

interface PropsWithText extends BaseProps {
  toggleLabel?: never;
  toggleText: string;
}

type Props = PropsWithLabel | PropsWithText;

export default ButtonControlGroup;
