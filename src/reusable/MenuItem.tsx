import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  address,
  Icon,
  onClick,
}) => {
  return (
    <Link
      to={address}
      onClick={onClick}
      className="flex items-center gap-2 p-2 pb-4 hover:p-2 rounded text-white"
      style={{'--hover-bg': '#4a2a0d'} as React.CSSProperties}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a2a0d'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <Icon className="w-5 h-5 sm:hidden" />
      <span>{title}</span>
    </Link>
  );
};

export default MenuItem;
