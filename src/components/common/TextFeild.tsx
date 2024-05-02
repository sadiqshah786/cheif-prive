import React, { ChangeEvent } from "react";

interface TextFieldProps {
  type: "password" | "text" | "email" | "date";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className: string;
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  onChange,
  name,
  onBlur,
  value,
}) => {
  return (
    <div>
      <input
        className="text-md px-2 py-2 rounded-[10px] outline-0 "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Enter text"
      />
    </div>
  );
};

export default TextField;
