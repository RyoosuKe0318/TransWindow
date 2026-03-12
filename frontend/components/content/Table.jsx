import { useState } from "react";
import LawNotion from "./LawNotion";
import FloatingModeToggle from "./FloatingModeToggle";

export default function Table({ tableData, isLaw = false }) {
  const [practiceMode, setPracticeMode] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [open, setOpen] = useState(false);

  if (!tableData) {
    return (
      <p className="text-center mt-10 text-gray-600">データが存在しません</p>
    );
  }

  const { titleJa, titleEn, data, resources } = tableData;

  const handleInputChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const toggleAnswer = (index) => {
    setShowAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <div className="relative mb-6">
      <h1 className="text-3xl font-bold text-center">
        {titleJa} <br /> {titleEn}
      </h1>

      {resources?.length > 0 && (
        <div className="absolute top-0 right-0 mt-2 mr-4 text-xl text-right">
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-600 hover:text-blue-400"
          >
            出典
          </button>

          {open && (
            <div className="mt-1 w-auto bg-gray-50 border rounded-lg shadow-lg p-4 text-left z-10">
              <ul className="list-disc list-inside space-y-1">
                {resources.map((res, idx) => (
                  <li key={idx}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {res.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>

      {isLaw && <LawNotion />}

      {/* モード切替ボタン */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setPracticeMode(!practiceMode)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-400 transition"
        >
          {practiceMode ? "通常表示に戻る" : "英訳練習モード"}
        </button>
      </div>

      <table className="min-w-full text-sm table-auto border-collapse border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className="border text-xl border-gray-300 px-4 py-2 text-left w-1/2">
              日本語
            </th>
            <th className="border text-xl border-gray-300 px-4 py-2 text-left w-1/2">
              {practiceMode ? "解答入力欄" : "英語原文"}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, idx) => (
            <tr key={record.id || idx} id={record.id}>
              <td className="text-xl border border-gray-300 px-4 py-2">
                {record.ja}
              </td>
              <td className="text-xl border border-gray-300 px-4 py-2 align-top">
                {practiceMode ? (
                  <div className="space-y-2">
                    <textarea
                      className="w-full p-2 border rounded-lg text-sm"
                      rows={2}
                      value={answers[idx] || ""}
                      onChange={(e) => handleInputChange(idx, e.target.value)}
                    />
                    <button
                      onClick={() => toggleAnswer(idx)}
                      className="text-blue-600 text-sm hover:text-blue-800 hover:border-b transition"
                    >
                      {showAnswers[idx] ? "原文を隠す" : "原文を表示"}
                    </button>
                    {showAnswers[idx] && (
                      <div className="text-xl p-2 rounded-lg bg-gray-50 border text-gray-700 text-sm">
                        {record.en}
                      </div>
                    )}
                  </div>
                ) : (
                  record.en
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <FloatingModeToggle
        practiceMode={practiceMode}
        setPracticeMode={setPracticeMode}
      />
    </>
  );
}
