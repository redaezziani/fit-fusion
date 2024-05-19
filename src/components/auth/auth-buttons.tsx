"use client";
import { signIn, signOut } from "next-auth/react";
import { Children } from "react";

interface signInProps {
  provider: string;
  children: Children;
}

export const SignInButton = ({ provider = "google", children }) => {
  return (
    <button
      type="button"
      onClick={() => signIn(provider)}
      className="px-4 py-2 border w-full justify-center items-center  flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
      {children}
    </button>
  )
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};