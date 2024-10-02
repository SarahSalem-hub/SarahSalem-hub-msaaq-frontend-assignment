import Wrapper from "@/app/ui/Wrapper";
import { auth } from "@/authConfig/auth";
import { update } from "@/lib/auth";
import Link from "next/link";

export default async function Page() {
 
  const session = await auth()
  //only logged in users can access this page
  return session ? (
    <Wrapper>
      <div className="border-[1px] border-blue-500 rounded-[25px] p-[20px]">
        <div>user name {session.user.name}</div>
        <div>user email {session.user.email}</div>
    
        <form
          action={async (formData: FormData) => {
            "use server";
            await update(formData);
          }}
          className="flex flex-col"
        >
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700">Email</span>
            <input
              name="email"
              type="email"
              // defaultValue={userData.email}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700">Username</span>
            <input
              name="username"
              type="text"
              // defaultValue={userData.username}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700">Username</span>
            <input
              name="password"
              type="password"
              // defaultValue={userData.password}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </Wrapper>
  ) : (
   <div className="flex flex-col ">
     <div >please log in</div>
     <button>
      <Link href={"login"}>
      Login
      </Link>
     </button>
     <div >or Sign Up</div>
     <button>
      <Link href={"register"}>
      sign up
      </Link>
     </button>
   </div>
  );
}
