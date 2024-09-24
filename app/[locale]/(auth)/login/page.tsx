import {login} from "@/lib/auth";
import {useTranslations} from 'next-intl';

export default function Page() {
    const t = useTranslations('auth');

    return <form action={login}>
        <label>
            Email
            <input type="email"/>
        </label>
        <label>
            Password
            <input type="password"/>
        </label>
        <button type="submit">{t("login")}</button>
    </form>
}