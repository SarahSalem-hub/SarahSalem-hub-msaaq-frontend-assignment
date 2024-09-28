"use client";
import { generatePagination } from "@/lib/fetchPosts";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  postsPages: number;
};

export default function Pagination({ postsPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(postsPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav className="flex flex-row gap-[7px] p-[10px] mt-[20px] mb-[40px] rounded-[6px] border-[1px] border-[#696A75]/[0.30]">
      {allPages &&
        allPages?.map((number) => (
          <Link scroll={false} href={createPageURL(number)} key={number}>
            <button
              className={`text-[18px] ${
                currentPage === number
                  ? "text-[#07113e]"
                  : "text-[#4B6BFB]/[.70]"
              }`}
            >
              {number}
            </button>
          </Link>
        ))}
    </nav>
  );
}