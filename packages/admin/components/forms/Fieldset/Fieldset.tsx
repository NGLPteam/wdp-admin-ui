import React from "react";
import * as Styled from "./Fieldset.styles";

const Fieldset = ({ label, children, description, style }: Props) => {
  return (
    <Styled.Fieldset style={style}>
      <Styled.Legend className="t-label-lg a-color-accent">
        {label}
      </Styled.Legend>
      {description && <Styled.Description>{description}</Styled.Description>}
      {children}
    </Styled.Fieldset>
  );
};

type CSSwithVars = React.CSSProperties & Record<`--${string}`, number | string>;

interface Props {
  label: string;
  children: React.ReactNode;
  description?: string;
  style?: CSSwithVars;
}

export default Fieldset;

Fieldset.Fields = Styled.Fields;
Fieldset.Field = Styled.Field;
Fieldset.Actions = Styled.Actions;
