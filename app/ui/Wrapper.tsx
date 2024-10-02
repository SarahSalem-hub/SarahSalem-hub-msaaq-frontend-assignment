import React from "react";

export default function Wrapper({ children }) {
  return (
    <div className="w-full  flex justify-center ">
      <div className="flex flex-col items-center w-[1216px]">{children}</div>
    </div>
  );
}
//dark:bg-[#181A2A]