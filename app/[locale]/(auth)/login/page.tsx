import { login } from "@/lib/auth";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

export default function Page() {
  const t = useTranslations("auth");
  const tLogin = useTranslations("login");

  const locale = useLocale();
  const direction = getLangDir(locale);

  console.log("dire", direction);

  return (
    <div className="w-[300px] h-[200px] flex justify-start items-center border-[2px] rounded-[25px] px-[10px]">
      <form action={login} className="w-full flex flex-col gap-[10px] ">
        <label
          className={`flex flex-col  ${
            direction === "ltr" ? "text-left" : "text-right"
          }`}
        >
          {tLogin("email")}
          <input type="email" className="bg-[#F4F4F5] rounded-[15px]" />
        </label>
        <label className="flex flex-col">
          {tLogin("password")}
          <input type="password" className="bg-[#F4F4F5] rounded-[15px]" />
        </label>
        <button type="submit">{t("login")}</button>
      </form>
    </div>
  );
}
