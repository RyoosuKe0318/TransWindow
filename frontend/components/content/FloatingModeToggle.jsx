import { useRouter } from "next/router";
import { Book, Pencil } from "lucide-react";

export default function FloatingModeToggle({ practiceMode, setPracticeMode }) {
  const router = useRouter();

  return (
    <button
      className="fixed bottom-16 right-16 h-16 w-16 flex items-center justify-center
             rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-400 transition z-50"
      onClick={() => setPracticeMode((prev) => !prev)}
      aria-label={
        practiceMode ? "通常表示モードへ切替" : "英訳練習モードへ切替"
      }
    >
      {practiceMode ? (
        <Book className="w-6 h-6" />
      ) : (
        <Pencil className="w-6 h-6" />
      )}
    </button>
  );
}
