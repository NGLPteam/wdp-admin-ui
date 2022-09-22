import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import type { MaybeButtonRef } from "@castiron/common-types";
import * as Styled from "./DateRangeDisclosure.styles";

type Props = {
  active: string;
};

const DateRangeDisclosure = (
  { active, ...props }: Props,
  ref: MaybeButtonRef
) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper ref={ref} {...props}>
      <div>
        <Styled.Label>{t("analytics.date_ranges.dropdown_label")}</Styled.Label>
        <Styled.Selected>{t(active)}</Styled.Selected>
      </div>
      <IconFactory icon="chevronDown" role="presentation" />
    </Styled.Wrapper>
  );
};

export default forwardRef(DateRangeDisclosure);
