/** @jsxImportSource @emotion/react */
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

/**
 * Icon 에서 사용될 SVG는 width,height를 가져서는 안된다.
 * @param param0
 * @returns
 */
const Icon: React.FC<PropsWithChildren<IconProps>> = ({
  icon,
  color,
  size = "24px",
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
