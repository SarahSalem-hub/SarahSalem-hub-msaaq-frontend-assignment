"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Objective: Handle authentication and authorization
export async function login() {
}

export async function logout() {
}

export async function register(formData: FormData) {
    const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

 

  if (!username || !email || !password) {
    return {
      message: 'Please fill all fields',
      success: false,
    };
  }

  cookies().set('token', JSON.stringify({ username, email, password }));
  redirect('/home');
}
