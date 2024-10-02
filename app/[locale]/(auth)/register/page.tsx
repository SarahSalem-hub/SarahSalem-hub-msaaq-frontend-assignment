import { createUser } from "@/lib/auth";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <form action={createUser} className="flex flex-col">
      <label>
        {t("register.email")}
        <input
          type="email"
          name="email"
          placeholder={t("register.placeholders.email")}
          autoComplete="off"
          required
        />
      </label>
      <label>
        {t("register.username")}
        <input
          type="text"
          name="username"
          placeholder={t("register.placeholders.username")}
          autoComplete="off"
          required
        />
      </label>
      <label>
        {t("register.password")}
        <input
          type="password"
          name="password"
          placeholder={t("register.placeholders.password")}
          autoComplete="off"
          required
        />
      </label>
      <button type="submit">{t("auth.register")}</button>
    </form>
  );
}
