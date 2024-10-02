import Wrapper from "@/app/ui/Wrapper";
import { auth } from "@/authConfig/auth";
import { update } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Page() {
  const session = await auth();
  //only logged in users can access this page
  const t = await getTranslations();
  return session ? (
    <Wrapper>
      <div className="flex flex-col gap-[50px]">
      <div>
        <div className="text-[40px]" >{`${t("profile.content.greeting")}, ${session.user.name}!`}</div>
      </div>
      <div className="border-[4px] border-[#242535] dark:bg-transparent bg-[#cfcfcf] rounded-[25px] p-[20px]">
        <form
          action={async (formData: FormData) => {
            "use server";
            await update(formData);
          }}
          className="flex flex-col"
        >
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700 dark:text-[#A1A1AA] ">
              {t("profile.form.email")}
            </span>
            <input
              name="email"
              type="email"
              defaultValue={session.user.email}
              className="p-2 dark:bg-[#242535] bg-[#f2f2f3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700 dark:text-[#A1A1AA]">
              {t("profile.form.username")}
            </span>
            <input
              name="username"
              type="text"
              defaultValue={session.user.name}
              className="p-2 dark:bg-[#242535] bg-[#f2f2f3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="mb-1 text-gray-700 dark:text-[#A1A1AA]" >
              {t("profile.form.password")}
            </span>
            <input
              name="password"
              type="password"
              className="p-2 dark:bg-[#242535] bg-[#f2f2f3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button type="submit">{t("profile.form.button")}</button>
        </form>
      </div>
      </div>
    </Wrapper>
  ) : (
    <div className="flex flex-col ">
      <div>please log in</div>
      <button>
        <Link href={"login"}>Login</Link>
      </button>
      <div>or Sign Up</div>
      <button>
        <Link href={"register"}>sign up</Link>
      </button>
    </div>
  );
}
