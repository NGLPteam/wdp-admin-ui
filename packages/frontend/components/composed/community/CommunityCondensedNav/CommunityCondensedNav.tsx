import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { useToggle, useWindowSize } from "@wdp/lib/hooks";
import { useFocusTrap } from "@castiron/hooks/";
import CommunityNavList from "../CommunityNavList";
import AccountDropdown from "../../viewer/AccountDropdown";
import * as Styled from "./CommunityCondensedNav.styles";
import { breakpoints } from "theme/base/variables";
import InstallationName from "components/composed/instance/InstallationName";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import MobileMenu from "components/layout/MobileMenu";
import Search from "components/forms/Search";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import { SearchButton } from "components/atomic";
import { CommunityCondensedNavAppFragment$key } from "@/relay/CommunityCondensedNavAppFragment.graphql";
import { CommunityCondensedNavFragment$key } from "@/relay/CommunityCondensedNavFragment.graphql";

function CommunityCondensedNav({
  data,
  communityData,
  isCommunityRoot,
}: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);

  const { t } = useTranslation();
  const mobileNavId = "communityMobileNav";
  const mobileNavRef = useRef(null);
  const [isActive, toggleActive, setActive] = useToggle();
  const { width } = useWindowSize();
  const prevWidth = useRef<number | undefined>();

  useEffect(() => {
    if (isActive) {
      if (prevWidth.current !== width) {
        if (width && width > parseInt(breakpoints[70])) {
          setActive(false);
        }
      }
    }
    prevWidth.current = width;
  }, [width, isActive, setActive]);

  useFocusTrap(mobileNavRef, isActive, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  return (
    <Styled.Header className="a-bg-custom20">
      <Styled.HeaderInner className="l-container-wide">
        {appData && (
          <>
            <Styled.LeftSide>
              <Styled.InstallationName as={InstallationName} />
              <CommunityPicker data={appData} active={community} />
            </Styled.LeftSide>
          </>
        )}
        <Styled.RightSide>
          {community && !isCommunityRoot && (
            <CommunityNavList data={community} condensed />
          )}
          {!isCommunityRoot && <SearchButton size="sm" data={community} />}
          <AccountDropdown condensed={!isCommunityRoot} />
        </Styled.RightSide>
        <Styled.MobileRight>
          <MobileMenuToggle
            onToggle={toggleActive}
            label={t("nav.menu")}
            icon="hamburger24"
            aria-controls={mobileNavId}
            aria-expanded={isActive}
          />
        </Styled.MobileRight>
      </Styled.HeaderInner>
      <MobileMenu
        ref={mobileNavRef}
        id={mobileNavId}
        active={isActive}
        onClose={toggleActive}
        communityPicker={
          community ? (
            <CommunityPicker data={appData} active={community} />
          ) : (
            <CommunityPicker data={appData} />
          )
        }
      >
        <Styled.MobileList>
          {community && <CommunityNavList data={community} mobile />}
          <Search mobile />
          <AccountDropdown mobile />
        </Styled.MobileList>
      </MobileMenu>
    </Styled.Header>
  );
}

interface Props {
  data?: CommunityCondensedNavAppFragment$key | null;
  communityData?: CommunityCondensedNavFragment$key | null;
  isCommunityRoot?: boolean;
}

export default CommunityCondensedNav;

const appFragment = graphql`
  fragment CommunityCondensedNavAppFragment on Query {
    ...CommunityPickerFragment
  }
`;

const fragment = graphql`
  fragment CommunityCondensedNavFragment on Community {
    ...CommunityNavListFragment
    ...SearchButtonFragment
    ...CommunityPickerActiveFragment
  }
`;
