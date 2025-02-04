"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 p-6">
      <h1 className="text-5xl font-extrabold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-300">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-6 px-6 py-3 text-lg font-bold text-black bg-yellow-500 hover:bg-yellow-600 rounded-lg transition duration-300">
        Return Home
      </Link>
    </div>
  );
}
