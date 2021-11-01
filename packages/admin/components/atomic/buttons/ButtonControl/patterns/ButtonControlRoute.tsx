import React, { forwardRef } from "react";
import { NamedLink, ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

/**
 * A button control that opens a drawer
 */
const ButtonControlRoute = forwardRef(
  ({ icon, children, ...linkProps }: Props, ref) => {
    return (
      <NamedLink passHref {...linkProps}>
        <ButtonControl as="a" icon={icon} ref={ref}>
          {children}
        </ButtonControl>
      </NamedLink>
    );
  }
);

type Props = BaseProps & Omit<NamedLinkProps, "children" | "passHref">;

export default ButtonControlRoute;
