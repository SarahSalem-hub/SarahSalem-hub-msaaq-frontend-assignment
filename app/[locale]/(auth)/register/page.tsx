import {register} from "@/lib/auth";
import {useTranslations} from "next-intl";

export default function Page() {
    const t = useTranslations('auth');
    return <form action={register}>
        <label>
            Email
            <input type="email"/>
        </label>
        <label>
            Username
            <input type="text"/>
        </label>
        <label>
            Password
            <input type="password"/>
        </label>
        <button type="submit">{t("register")}</button>
    </form>
}