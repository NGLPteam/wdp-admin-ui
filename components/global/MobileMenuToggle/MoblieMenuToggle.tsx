import React from "react";
import { IconFactory } from "components/factories";
import * as Styled from "./MobileMenuToggle.styles";

type IconProps = React.ComponentProps<typeof IconFactory>;

const MobileMenuToggle = ({ onToggle, label, icon }: Props) => {
  return (
    <Styled.Toggle onClick={onToggle}>
      <span className="t-label-lg">{label}</span>
      <IconFactory icon={icon} size="lg" />
    </Styled.Toggle>
  );
};

interface Props {
  onToggle: () => void;
  label: string;
  icon: IconProps["icon"];
}

export default MobileMenuToggle;
