import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HoverMenu({ data, title, page, gColor }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Link href={`/${page}`}> */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-1 w-24 h-24 justify-center cursor-pointer">
            <span className="text-2xl">{title}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
          {open && (
            <div className={`absolute mt-20 ml-40 w-64 shadow-lg border-3 border-gray-300 rounded-lg p-4 flex flex-col space-y-4 text-xl z-50 ${gColor}`}>
              {data.map((record, idx) => (
                <Link key={idx} href={record.src} className="hover:underline">
                  {record.titleJa}
                </Link>
              ))}
            </div>
          )}
        </div>
      {/* </Link> */}
    </>
  );
}
