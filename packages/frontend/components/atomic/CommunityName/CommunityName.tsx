import React from "react";
import * as Styled from "./CommunityName.styles";

function CommunityTempLogo() {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 .003c1.495 0 2.803.187 4.111.374v3.924a14.549 14.549 0 00-4.11-.562C11.028 3.74 3.551 11.03 3.551 20S11.03 36.448 20 36.448c8.972 0 16.26-7.477 16.26-16.448v-1.87h3.553C40 18.692 40 19.438 40 20c0 11.029-8.971 20-20 20S0 31.029 0 20 8.971 0 20 0v.003z"
        fill="#76767A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.42.749c7.476 2.057 13.083 8.41 14.393 16.073h-3.74c-1.12-5.606-5.234-10.28-10.653-12.15V.75z"
        fill="#BCBCC3"
      />
    </svg>
  );
}

export default function CommunityName() {
  return (
    <span className="l-flex l-flex--gap l-flex--align-center">
      <CommunityTempLogo />
      <Styled.Header as="h4">Community Name</Styled.Header>
    </span>
  );
}
