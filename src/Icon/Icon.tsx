/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as icons from "./svg";
import { PropsWithChildren } from "react";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기위함.

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;

  className?: string;
};

const Icon: React.FC<PropsWithChildren<IconProps>> = ({
  icon,
  color,
  size,
  className,
}) => {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={{ fill: color || "currentColor", width: size, height: "auto" }}
      className={className}
    />
  );
};

export default Icon;
