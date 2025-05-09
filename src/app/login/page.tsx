"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 text-center">
      <h1 className="text-3xl font-bold">Refinery.AI Login</h1>

      {!session ? (
        <>
          <p className="text-lg">Sign in to access your dashboard.</p>
          <button
            onClick={() => signIn("github")}
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-lg">Welcome, {session.user?.name}!</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}