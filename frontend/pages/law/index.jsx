import fs from "fs";
import path from "path";
import Layout from "@/components/common/Layout";
import { useState, useEffect } from "react";

export default function LawHome({ words }) {
  const [randomWords, setRandomWords] = useState(words.slice(0, 3));
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    setRandomWords(shuffled.slice(0, 3));
  }, [words]);

  const closeModal = () => setSelectedWord(null);

  return (
    <Layout gColor="#fff6f0ff">
      <h1 className="text-4xl font-bold mb-8">法令頻出単語</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {randomWords.map((word) => (
          <div
            key={word.word}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedWord(word)}
          >
            <h2 className="text-2xl font-semibold mb-2">{word.word}</h2>
            <p className="text-gray-600">クリックで詳細を見る</p>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-5xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedWord.word}</h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto">
              {selectedWord.examples.map((ex, i) => (
                <a
                  key={i}
                  href={`/law/${ex.sourceFile.replace(".json", "")}#section-${
                    ex.index
                  }`}
                  className="block bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                  onClick={closeModal}
                >
                  <p className="text-gray-800 font-medium">EN:</p>
                  <p className="text-gray-700 mb-1">{ex.en}</p>
                  <p className="text-gray-800 font-medium">JA:</p>
                  <p className="text-gray-700">{ex.ja}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/law/frequent_words.json");
  const words = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return {
    props: { words },
  };
}
