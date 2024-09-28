import React from "react";

type Props = {
  text: string;
  textColor: string;
  bgColor: string;
};

export default function Category({ text, textColor, bgColor }: Props) {
  return (
    <h5
      className={`max-w-fit h-auto p-[4px] mb-[16px] rounded-[6px] ${bgColor} ${textColor}`}
    >
      {text}
    </h5>
  );
}
