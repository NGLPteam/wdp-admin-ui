import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import { NamedLink, TabLink } from "components/atomic";
import * as Styled from "./MobileSubNav.styles";
import { IconFactory } from "components/factories";
import MobileMenu, { MobileMenuList } from "components/layout/MobileMenu";
import { useUID } from "react-uid";
import { useToggle } from "hooks";
import { useFocusTrap } from "@castiron/hooks/";
import capitalize from "lodash/capitalize";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

const MobileSubNav = ({ tabRoutes, sidebarLinks }: Props) => {
  const { t } = useTranslation();
  const menuId = useUID();
  const [isOpen, toggleActive, setActive] = useToggle();
  const mobileNavRef = useRef(null);

  useFocusTrap(mobileNavRef, isOpen, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  // Check if the route should be active
  const activeRoute = RouteHelper.activeRoute();
  function isActiveRoute(routeName: string): boolean | undefined {
    return activeRoute?.name.includes(routeName);
  }

  return tabRoutes || sidebarLinks ? (
    <Styled.MobileNav>
      <Styled.NavButton aria-controls={menuId} onClick={toggleActive}>
        <span>
          {capitalize(t(activeRoute?.label || "header.toggle_nav_menu"))}
        </span>
        <IconFactory icon="menu" rotate={180} />
      </Styled.NavButton>
      <MobileMenu
        id={menuId}
        active={isOpen}
        onClose={() => setActive(false)}
        ref={mobileNavRef}
      >
        <MobileMenuList>
          {tabRoutes?.map(({ label = "", ...namedLinkProps }, i) => (
            <li key={i}>
              <TabLink
                active={isActiveRoute(namedLinkProps.route)}
                size="lg"
                bottomBorder
                {...namedLinkProps}
              >
                {capitalize(t(label))}
              </TabLink>
            </li>
          ))}
          {sidebarLinks?.map(({ route, label = "", query }, i) => (
            <li key={i}>
              <NamedLink route={route} query={query} passHref>
                <a
                  className="a-link"
                  aria-current={activeRoute?.name === route}
                >
                  {capitalize(t(label))}
                </a>
              </NamedLink>
            </li>
          ))}
        </MobileMenuList>
      </MobileMenu>
    </Styled.MobileNav>
  ) : null;
};

interface Link extends NamedLinkProps {
  label?: string;
}
interface Props {
  tabRoutes?: Link[];
  sidebarLinks?: Link[];
}

export default MobileSubNav;
