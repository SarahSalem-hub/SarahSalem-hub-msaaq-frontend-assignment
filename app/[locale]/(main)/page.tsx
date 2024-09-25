// import { cookies } from "next/headers";
import HeroSection from "@/app/ui/Home/HeroSection";
import styles from "../page.module.css";
import Link from "next/link";
// import HomePage from "./(main)/home/page";
// import { redirect } from "next/dist/server/api-utils";

// const getToken = () => {
//   const token = cookies().get("token")?.value;

//   return token;
// };

export default function Home() {
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
    <div className="w-full h-screen flex justify-center dark:bg-[#181A2A] bg-[#FFFFFF]">
      <div className=" w-[1216px] h-screen">
        <HeroSection/>
      </div>
    </div>
  );
}
