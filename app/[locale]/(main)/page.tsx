// import { cookies } from "next/headers";
import HeroSection from "@/app/ui/Home/HeroSection";
import Posts from "@/app/ui/Home/Posts/Posts";
// import HomePage from "./(main)/home/page";
// import { redirect } from "next/dist/server/api-utils";

// const getToken = () => {
//   const token = cookies().get("token")?.value;

//   return token;
// };

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
  // const token = getToken();

  // const cookieStore = cookies();
  // const userInfo = cookieStore.get("token")?.value;

  // let parsedUserInfo;
  // try {
  //   parsedUserInfo = userInfo ? JSON.parse(userInfo) : null; // Parse the JSON string
  // } catch (error) {
  //   console.error("Error parsing user info:", error);
  // }
  // if (token) {
  //   redirect("/home")
  // }

  return (
    <div className="w-full  flex justify-center dark:bg-[#181A2A] bg-[#FFFFFF]">
      <div className=" w-[1216px]">
        <HeroSection />
        <Posts
          // postsPages={postsPages}
          query={query}
          page={currentPage}
          // fetchedPosts={posts}
        />
      </div>
    </div>
  );
}
