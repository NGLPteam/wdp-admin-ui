import { PropsWithChildren } from "react";
import classNames from "classnames";
import { HeroBackground } from "@/types/graphql-schema";
import { getBgClass } from "@/components/templates/helpers/bgColor";

interface Props extends PropsWithChildren {
  as?: "section" | "article" | "header" | "div" | "footer";
  width?: "wide" | "max";
  blockPadding?: "lg" | "md" | "sm" | "xSm";
  bgColor?: HeroBackground | null;
  className?: string;
  id?: string;
  innerClassName?: string;
}

export default function Container({
  as = "section",
  width = "wide",
  bgColor = "NONE",
  className,
  id,
  children,
}: Props) {
  const Tag = as;

  const bgClass = getBgClass(bgColor);

  return (
    <Tag id={id} className={bgClass}>
      <div
        className={classNames({
          [`l-container-${width}`]: true,
          [`${className}`]: !!className,
        })}
      >
        {children}
      </div>
    </Tag>
  );
}