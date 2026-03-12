import Link from "next/link";
import { useState } from "react";
import HoverMenu from "./HoverMenu";
import lawData from "../../data/law/law.json";
import novelData from "../../data/literature/literature.json";

export default function Header() {
  return (
    <div className="mb-20">
      <header className="flex fixed bg-[#fff] top-0 left-0 w-full h-28 shadow p-4 z-50">
        <div className="mx-[120px] flex items-center">
          <Link href="/">
            <div className="flex items-center gap-8">
              <img
                src="/transwindow.png"
                alt="対訳の窓ロゴ"
                className="h-24 w-auto object-contain"
              />
              <div className="flex flex-col items-center mt-2">
                <h1 className="text-5xl font-bold cursor-pointer ">対訳の窓</h1>
                <h2 className="text-3xl font-bold cursor-pointer ">
                  TransWindow
                </h2>
              </div>
            </div>
          </Link>
          <nav className="flex items-center text-2xl gap-16 ml-30">
            <Link
              href="/"
              className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition after:duration-500"
            >
              ホーム
            </Link>
            <HoverMenu data={lawData} title="法律系" page="law" gColor="bg-[#ffefe1]" />
            <HoverMenu data={novelData} title="文学系" page="literature" gColor="bg-[#e5ffe1]" />
          </nav>
        </div>
      </header>
    </div>
  );
}
