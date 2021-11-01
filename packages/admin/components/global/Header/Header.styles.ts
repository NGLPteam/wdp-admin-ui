import styled, { css } from "styled-components";
import { aTextGlow, aGlow } from "theme/mixins/appearance";
import { tLabel } from "theme/mixins/typography";
import { globalNavRespond, noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const ProviderBarBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const Nav = styled.nav`
  padding: 0 var(--container-column-margin);
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--grid-column-gap);
  margin: 0 auto;
  max-width: var(--container-max);
  padding: ${pxToRem(20)} 0;

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: var(--grid-column-gap);
    }
  `)}

  /* Push all items after the first child to the right */
  > *:first-child {
    margin-inline-end: auto;
  }
`;

export const SearchBlock = styled.div`
  ${respond(`display: none`, 60)}
`;

export const AccountBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const DesktopNavBlock = styled.div`
  ${globalNavRespond(`display: none`)}
`;

export const MobileNavBlock = styled.div`
  ${globalNavRespond(`display: none`, "min")}
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: ${pxToRem(28)};
  }
`;

export const Link = styled.a<LinkProps>`
  --nav-link-border: 2px solid transparent;
  display: inline-block;
  color: var(--accent-light);

  &:hover {
    --nav-link-border: 2px solid var(--accent-lighter);
    color: var(--accent-lighter);
  }

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active,
  &[aria-expanded="true"] {
    --nav-link-border: 2px solid var(--accent-lighter);
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  ${({ active }) =>
    active &&
    css`
      --nav-link-border: 2px solid var(--accent-lighter);
      color: var(--accent-color);
      border-color: var(--accent-color);
    `}
`;

export const AvatarLink = styled(Link)`
  margin-block-start: ${pxToRem(5)};
  border-radius: 50%;

  &:focus-visible {
    outline: 0;
    ${aGlow("darkMode")}
  }

  &[aria-expanded="true"] {
    ${aGlow("darkMode")}
  }
`;

export const LinkText = styled.span`
  transition: var(--border-transition), var(--color-transition);
  border-bottom: var(--nav-link-border);
  padding-block-end: 1px;
  ${tLabel("md")}

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }
`;

interface LinkProps {
  active?: boolean;
}