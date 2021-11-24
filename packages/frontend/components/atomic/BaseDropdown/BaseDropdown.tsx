import React from "react";
import { usePopoverState, PopoverDisclosure } from "reakit/Popover";
import * as Styled from "./BaseDropdown.styles";

type ButtonProps = Partial<React.ComponentProps<typeof PopoverDisclosure>>;

/**
 * This component includes the base functionality for a dropdown.
 * It is unstyled and can be extended to create more restrictive dropdowns.
 * Using the reakit Popover gives us base a11y props and auto dropdown placement.
 */
const BaseDropdown = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      disclosure,
      children,
      label,
      gutter = 8,
      hideOnEsc = true,
      hideOnClickOutside = true,
      isModal = false,
      ...props
    },
    ref
  ) => {
    const popoverState = usePopoverState({ gutter, modal: isModal });

    return (
      <>
        <PopoverDisclosure ref={ref} {...popoverState} {...props}>
          {(disclosureProps) => React.cloneElement(disclosure, disclosureProps)}
        </PopoverDisclosure>
        <Styled.Popover
          hideOnEsc={hideOnEsc}
          hideOnClickOutside={hideOnClickOutside}
          {...popoverState}
          role={undefined}
          aria-label={label}
        >
          {children}
        </Styled.Popover>
      </>
    );
  }
);

interface ExtendedProps {
  /* a11y label for the dropdown */
  label: string;
  /* dropdown children */
  children: React.ReactNode;
  /* disclosure element (usually a button) */
  disclosure: JSX.Element;
  /* pixel distance between the button and the dropdown */
  gutter?: number;
  /* Hide the dropdown on esc? Default is true. */
  hideOnEsc?: boolean;
  /* Hide the dropdown on click outside? Default is true. */
  hideOnClickOutside?: boolean;
  /* Is the dropdown a modal? Default is false. */
  isModal?: boolean;
}

type Props = ButtonProps & ExtendedProps;

export default BaseDropdown;
