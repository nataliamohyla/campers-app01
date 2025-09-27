import React from "react";

type IconProps = {
  name: string;
  width?: number;
  height?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, className }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/icons/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;