"use server";

import { auth, signIn } from "@/authConfig/auth";
import { prisma } from "@/prisma";


export async function createUser(formData: FormData){
  console.log("inside createuser")
  const user = await prisma.user.create({
    data: {
      email:  formData.get('email') as string,
      name:  formData.get('username') as string,
      password:  formData.get('password')as string,
    },
  })
  if (user){
    console.log("user",user)
    formData.append("redirectTo", "/");
    await signIn("credentials", formData);
  }
}

export async function update(formData: FormData) {
  const session = await auth()
  const email = session.user.email
 
  const updateUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string
    },
  })
  if (updateUser){
    formData.append("redirectTo", "/profile");
    await signIn("credentials", formData);
  }
}