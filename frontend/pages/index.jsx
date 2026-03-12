import Layout from "../components/common/Layout";
import referenceData from "../data/reference/references.json";

export default function Home() {
  return (
    <>
      <section className="relative h-100 top-38 text-center py-32 px-4 overflow-hidden bg-gradient-to-r from-red-100 via-white to-red-100 mx-36">
        {/* 背景ロゴ */}
        <img
          src="/transwindow.png"
          alt="ロゴ"
          className="absolute top-1/2 left-1/2 w-96 h-96 opacity-20 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* 前景テキスト */}
        <h1 className="relative bottom-10 text-7xl font-extrabold mb-4 text-gray-800 drop-shadow-sm">
          対訳の窓
        </h1>
        <p className="relative text-xl md:text-3xl max-w-5xl mx-auto text-gray-700">
          原文と対訳を並べて読むことで、学習をより深く、楽しく。
        </p>
      </section>

      <Layout>
        {/* 注意事項 */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mt-2 mb-4 pb-2 inline-block border-b-2 border-gray-400">
            法令等に関する注意事項
          </h2>
          <p className="text-xl leading-relaxed">
            本サイトに掲載している法令・文書等は、公式文書を基にしていますが、
            内容の正確性・最新性について保証するものではありません。
            実務上の判断には、必ず公式の情報をご確認ください。
          </p>
        </section>

        {/* 出典一覧 */}
        <section>
          <h2 className="text-4xl font-bold mb-4 pb-2 inline-block border-b-2 border-gray-400">
            コンテンツ＆出典 一覧
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {referenceData.map((category, index) => (
              <div
                key={category.category}
                className="relative overflow-hidden p-6 rounded-xl"
              >
                {/* 背景円 */}
                <div
                  className={`absolute top-10 left-[30px] w-88 h-88 rounded-full blur-2xl opacity-25 pointer-events-none
              ${index % 2 === 0 ? "bg-orange-300" : "bg-green-300"}
            `}
                />

                {/* コンテンツ */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3 capitalize">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li
                        key={item.id}
                        className="pl-4 border-l-2 border-gray-300"
                      >
                        <a
                          href={item.src}
                          className="text-2xl font-semibold hover:underline hover:text-gray-600 mb-1"
                        >
                          {item.title}
                        </a>
                        <ul className="list-disc ml-5 space-y-1">
                          {item.resources.map((res, idx) => (
                            <li key={idx}>
                              <a
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600 transition-colors duration-200 underline-offset-2 hover:underline"
                              >
                                {res.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ページ概要 */}{" "}
        <section className="mb-12 mt-8">
          {" "}
          <h1 className="text-4xl font-bold mb-4 pb-2 inline-block border-b-2 border-gray-400">
            {" "}
            本ページ「対訳の窓」について{" "}
          </h1>{" "}
          <p className="text-xl leading-relaxed mb-4">
            {" "}
            本サイトは、法律や文学などの原文とその対訳を並べて読むことで、学習や研究を支援することを目的としています。
            判例や法令、文学作品など、さまざまなテキストを原文と比較しながら読むことで、読解力や対訳力を高めることができます。{" "}
          </p>{" "}
          <p className="text-xl leading-relaxed">
            {" "}
            サイト名の「対訳の窓」は、原文と対訳という二つの世界をつなぐ窓のような存在であり、
            ユーザーがその窓を通して新しい知識や発見を得られることを願って名付けました。
            この窓を通じて、言語や文化の違いを越えた学びを体験していただければ幸いです。{" "}
          </p>{" "}
        </section>
      </Layout>
    </>
  );
}
