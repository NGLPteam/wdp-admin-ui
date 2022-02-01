import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import appData from "../../../fixtures/app.data";
import * as Styled from "./AppFooter.styles";
import InstallationName from "components/composed/instance/InstallationName";
import { Search } from "components/forms";
import { RouteHelper } from "routes";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import CommunityName from "components/composed/community/CommunityName";
import { AppFooterCommunityFragment$key } from "@/relay/AppFooterCommunityFragment.graphql";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";

// Note: About text and community name will come from backend data
function AppFooter({ data, communityData }: Props) {
  const app = useMaybeFragment(fragment, data);

  const community = useMaybeFragment(communityFragment, communityData);

  const { t } = useTranslation();

  const today = new Date();

  const { footerData } = appData;

  function renderRoute(route: string, label?: string) {
    const routeObj = RouteHelper.findRouteByName(route);
    const routeLabel = label || routeObj?.label;

    return routeObj && routeLabel ? (
      <Styled.NavListItem key={route} className="t-copy-sm t-copy-light">
        <Link href={routeObj.path} passHref>
          <a>{startCase(t(routeLabel))}</a>
        </Link>
      </Styled.NavListItem>
    ) : null;
  }

  return (
    <Styled.FooterWrapper className={`a-bg-custom20`}>
      <Styled.FooterInner className="l-container-wide">
        <Styled.CommunityNameWrapper>
          {community ? (
            <CommunityName data={community} />
          ) : (
            <h4>WDP Installation Name</h4>
          )}
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <Search />
        </Styled.SearchWrapper>
        <Styled.SearchMobile>
          <Search mobile />
        </Styled.SearchMobile>
        <Styled.AboutWrapper>
          <Styled.InstallationMobile>
            <InstallationName />
          </Styled.InstallationMobile>
          <p className="t-copy-sm t-copy-lighter">
            A brief overview of this WDP instance. Arcu nisl ullamcorper
            vulputate sed urna dolor. Tristique morbi integer in morbi morbi
            scelerisque tortor. Eget orci erat vitae elit vel luctus. Sit
            egestas adipiscing placerat accumsan pharetra volutpat viverra sit
            proin.
          </p>
          <Styled.InstallationDesktop>
            <Styled.InstallationDesktopName as={InstallationName} />
            <CommunityPicker data={app} active={community} />
          </Styled.InstallationDesktop>
        </Styled.AboutWrapper>
        <Styled.NavWrapper>
          {footerData.nav.map(({ label, children }) => (
            <div key={label}>
              <h5 className="t-label-lg">{t(label)}</h5>
              <ul className="t-unstyled-list">
                {children.map(({ route, label }) => renderRoute(route, label))}
              </ul>
            </div>
          ))}
        </Styled.NavWrapper>
        <Styled.CopyrightText className="t-copy-sm t-copy-light">
          {t("app.copyright", { year: today.getFullYear() })}
        </Styled.CopyrightText>
      </Styled.FooterInner>
    </Styled.FooterWrapper>
  );
}

interface Props {
  data?: AppFooterFragment$key | null;
  communityData?: AppFooterCommunityFragment$key | null;
}

export default AppFooter;

const fragment = graphql`
  fragment AppFooterFragment on Query {
    ...CommunityPickerFragment
  }
`;

const communityFragment = graphql`
  fragment AppFooterCommunityFragment on Community {
    ...CommunityPickerActiveFragment
    ...CommunityNameFragment
  }
`;
