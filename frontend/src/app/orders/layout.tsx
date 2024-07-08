import Link from "next/link";
import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="bg-white">
        <div className=" p-2 max-w-screen-2xl mx-auto">
          <h1 className="my-5 text-2xl font-semibold">
            <Link href={"/"}>Control de Ordenes</Link>
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-screen-2xl ">{children}</div>
      </main>
    </main>
  );
}
