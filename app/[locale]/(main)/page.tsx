// import { cookies } from "next/headers";
import HeroSection from "@/app/ui/Home/HeroSection";
import Posts from "@/app/ui/Home/Posts/Posts";
import Wrapper from "@/app/ui/Wrapper";
import { auth } from "@/authConfig/auth";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth(); //TODO: remove later
  console.log("session", session);

  return (
    <Wrapper>
      <div>{JSON.stringify(session, null, 2)}</div>

      <HeroSection />
      <Posts query={query} page={currentPage} />
    </Wrapper>
  );
}
