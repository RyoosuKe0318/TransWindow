export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full bg-gray-700 text-white py-6 px-64 mt-10">
      {/* 左：ロゴとサイト名 */}
      <div className="flex items-center gap-3">
        <img
          src="/transwindow_black (2).png"
          alt="対訳の窓ロゴ"
          className="h-16 w-auto invert"
        />
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-2xl font-bold">対訳の窓</h1>
          <h2 className="text-lg opacity-80">TransWindow</h2>
        </div>
      </div>


      {/* 右：ナビゲーション */}
      <div className="flex flex-col items-end text-sm">
        <p className="text-xs text-gray-200 opacity-70">
          © {new Date().getFullYear()} 対訳の窓 / TransWindow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
