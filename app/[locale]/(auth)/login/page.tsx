import Wrapper from "@/app/ui/Wrapper";
import { signIn } from "@/authConfig/auth";
import { AuthError } from "next-auth";
import { useLocale, useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { getLangDir } from "rtl-detect";

export default function Page() {
  const t = useTranslations();

  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <Wrapper>
     <div className="text-[30px] ">{t("login.content")}</div>
     <div className="w-[300px] h-[200px] flex justify-start items-center border-[2px]  dark:border-[#242535] rounded-[25px] px-[10px]">
      <form
        action={async (formData) => {
          "use server";
          try {
            formData.append("redirectTo", "/");
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/error`);
            }
            throw error;
          }
        }}
        className="w-full flex flex-col gap-[10px] "
      >
        <label
          className={`flex flex-col  ${
            direction === "ltr" ? "text-left" : "text-right"
          }`}
        >
          {t("login.email")}

          <input
            name="email"
            type="text"
            className="bg-[#F4F4F5] dark:bg-[#242535] rounded-[15px]"
          />
        </label>
        <label className="flex flex-col">
          {t("login.password")}

          <input
            name="password"
            type="password"
            className="bg-[#F4F4F5] dark:bg-[#242535] rounded-[15px]"
          />
        </label>
        <button type="submit">{t("auth.login")}</button>
      </form>
    </div>
    </Wrapper>
  );
}
