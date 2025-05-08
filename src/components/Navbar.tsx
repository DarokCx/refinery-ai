"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-black shadow-md">
      <div className="text-xl font-bold text-black dark:text-white">
        <Link href="/">Refinery.AI</Link>
      </div>
      <div className="flex gap-4 text-black dark:text-white">
        <Link href="/app" className="hover:underline">
          App
        </Link>
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="/account" className="hover:underline">
          Account
        </Link>
        <Link
          href="/login"
          className="px-3 py-1 rounded border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
