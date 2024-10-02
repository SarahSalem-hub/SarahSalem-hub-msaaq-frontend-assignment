import Link from "next/link";
import React from "react";


export default function page() {
  return (
    <>
      <div>error page: something went wrong</div>
      <div>
        return back to
        <Link href={"/login"}>login</Link>
      </div>
    </>
  );
}
