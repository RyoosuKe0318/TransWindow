import Link from "next/link";

export default function LawNotion() {
  return (
    <div className="border-2 border-red-500 bg-red-50 p-4 rounded-md mb-6">
      <h2 className="text-xl font-bold text-red-600 mb-2">＊注意 Notion＊</h2>
      <p className="text-red-800">
        本ページに掲載している条文は、学習用に整理したものであり、現行法の正確性を保証するものではありません。最新の法規定は
        <a
          href="https://law.e-gov.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          e-Gov↗
        </a>
        など公式サイトでご確認ください。本ページはあくまで日本語・英語の対照表示や語学学習を目的としています。なお、出典など著作権に関する事項については
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          こちら
        </Link>
        をご覧下さい。
      </p>
      <br />
      <p className="text-red-800">
        The provisions listed on this page have been compiled for study purposes
        and do not guarantee the accuracy of current law. Please check the
        latest legal provisions on official websites such as{" "}
        <a
          href="https://law.e-gov.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          e-Gov↗
        </a>
        . This page is intended solely for the purpose of comparing Japanese and
        English and for language learning purposes. For information regarding sources and copyrights, please see{" "} <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </Link>.
      </p>
    </div>
  );
}
