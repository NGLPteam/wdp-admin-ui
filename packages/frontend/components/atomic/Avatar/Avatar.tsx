import React from "react";
import Image from "next/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import * as Styled from "./Avatar.styles";

const Avatar = ({ url, alt = "", size = "sm" }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;
  const style = {
    "--avatar-size": `${pxToRem(imageSize)}`,
  } as React.CSSProperties;

  return url ? (
    <Styled.Wrapper style={style}>
      <Image src={url} alt={alt} width={imageSize} height={imageSize} />
    </Styled.Wrapper>
  ) : null;
};

interface Props {
  size?: "sm" | "lg";
  alt?: string;
  url?: string;
}

export default Avatar;