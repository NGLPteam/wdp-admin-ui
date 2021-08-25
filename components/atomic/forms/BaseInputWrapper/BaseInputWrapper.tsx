import React from "react";
import type { FieldValues } from "react-hook-form";
import { useUID } from "react-uid";
import isFunction from "lodash/isFunction";
import * as Styled from "./BaseInputWrapper.styles";
import type InputProps from "../inputType";

import Errors from "components/atomic/forms/Errors";

const BaseInputWrapper = <T extends FieldValues = FieldValues>({
  children,
  description,
  hideLabel,
  label,
  labelProps,
  name,
}: Props<T>) => {
  const uid = useUID();

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={uid} hideLabel={hideLabel} {...labelProps}>
        {label}
      </Styled.Label>
      {isFunction(children)
        ? children({ uid })
        : React.cloneElement(children, { id: uid })}
      {description && <Styled.Description>{description}</Styled.Description>}
      <Errors name={name} />
    </Styled.Wrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Pick<InputProps<T>, "name" | "description" | "label" | "hideLabel"> {
  children: JSX.Element | (({ uid }: { uid: string }) => React.ReactNode);

  labelProps?: typeof HTMLLabelElement;
}

export default BaseInputWrapper;
