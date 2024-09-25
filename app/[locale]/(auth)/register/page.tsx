import {register} from "@/lib/auth";
import {useTranslations} from "next-intl";
import { cookies } from "next/headers";



export default function Page() {
    const t = useTranslations('auth');
    
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    
    return <form action={async (formData: FormData) => {
        "use server";
        await register(formData);
        
      }} className="flex flex-col">
        <label>
            Email
            <input 
            type="email"
            name='email'
            placeholder='Type here your email'
            autoComplete='off'
            required/>
        </label>
        <label>
            Username
            <input type="text"
             name='username'
             placeholder='Type here your username'
             autoComplete='off'
             required/>
        </label>
        <label>
            Password
            <input type="password"
              name='password'
              placeholder='Type here your password'
              autoComplete='off'
              required/>
        </label>
        <button type="submit">{t("register")}</button>
        <div>
            {token}
        </div>
    </form>
}