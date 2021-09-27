import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUID } from "react-uid";
import BaseInputError from "../BaseInputError";
import * as Styled from "./TagsInput.styles";

const TagsInputAdd = ({ placeholder, onEnter }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();
  const uID = useUID();
  const [error, setError] = useState();

  function isTagValid(tag: string) {
    return !tag.includes(",");
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleAdd();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
      e.preventDefault();
    }
  };

  const handleAdd = () => {
    if (onEnter && inputRef?.current?.value) {
      const value = inputRef.current.value;
      if (isTagValid(value)) {
        onEnter(value);
        inputRef.current.value = "";
        setError(undefined);
      } else {
        setError(t("forms.tags.noCommas"));
      }
    }
  };

  return (
    <>
      <label htmlFor={uID} className="a-hidden">
        {t("forms.tags.enter")}
      </label>
      <Styled.Input
        id={uID}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        pattern="[^,]+"
        title={t("forms.tags.noCommas")}
      />
      <button
        type="button"
        onClick={handleClick}
        className="a-hidden"
        aria-controls={uID}
      >
        {t("forms.tags.add")}
      </button>
      {error && <BaseInputError message={error} />}
    </>
  );
};

interface Props {
  placeholder?: string;
  onEnter: (string: string) => void;
}

export default TagsInputAdd;