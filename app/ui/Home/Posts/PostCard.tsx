import React from "react";
import Category from "../Category";

type Props = {
  title: string;
  body: string;
  id: number;
};

export default function PostCard({ title, body, id }: Props) {
  return (
    <div className="h-auto rounded-[12px] border-[#E8E8EA] p-[16px] dark:border-[#242535] border-[2px] ">
      <Category
        text={"Technology"}
        textColor={"text-[#4B6BFB]"}
        bgColor={"bg-[#4B6BFB]/[.05]"}
      />
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
}
