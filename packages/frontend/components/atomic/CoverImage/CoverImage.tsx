import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Image from "next/image";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import * as Styled from "./CoverImage.styles";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";

/* We can't use objectFit contain because of the drop shadow */
export default function CoverImage({ data, maxWidth, maxHeight }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;
  const style = {
    "--CoverImage-max-width": pxToRem(maxWidth),
    "--CoverImage-max-height": pxToRem(maxHeight),
  } as React.CSSProperties;

  return image && image.url ? (
    <Styled.Figure style={style}>
      <Image
        layout="intrinsic"
        src={image.url}
        alt={image.alt || ""}
        width={image.width || 0}
        height={image.height || 0}
      />
    </Styled.Figure>
  ) : null;
}

interface Props {
  data?: CoverImageFragment$key | null;
  maxWidth: number;
  maxHeight: number;
}

const fragment = graphql`
  fragment CoverImageFragment on ImageAttachment {
    image: large {
      webp {
        url
        alt
        width
        height
      }
    }
  }
`;
