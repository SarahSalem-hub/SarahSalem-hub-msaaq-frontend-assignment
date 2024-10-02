import Nabvar from "@/app/ui/Layout/Nabvar";
import { auth } from "@/authConfig/auth";
import React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  return (
    <div>
      {session ? <div>session</div> : <div>no session</div>}
      <Nabvar session={session}/>
      {children}
    </div>
  );
}