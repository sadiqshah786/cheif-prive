import Image from "next/image";
import React from "react";

interface ButtonProps {
  icon?: string;
  title?: string;
  isType?: "submit" | undefined;
}

const Button: React.FC<ButtonProps> = ({ isType, icon, title }) => {
  return (
    <div>
      <button
        type={isType && "submit"}
        className="bg-primary px-3 py-3 rounded-[10px]"
      >
        {icon && (
          <span>
            <Image src={icon} alt="icon" width={22} height={22} />
          </span>
        )}
        {title && <span>{title}</span>}
      </button>
    </div>
  );
};

export default Button;
