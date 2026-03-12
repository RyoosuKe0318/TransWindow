# TransWindow
TransWindow は、憲法・刑法などの法令テキストや文学作品を **一文ずつ日英対訳で閲覧できる Web アプリ**です。
英語学習の補助ツールとして、原文と訳文を並べて比較しながら読むことを目的としています。
このプロジェクトは、法令や文学のテキストを **静的生成（SSG）で配信する Next.js アプリ**として実装されています。


## Demo
Live Demo
https://trans-window-nuwso02y2-ryosukes-projects-b8c63962.vercel.app/


## Features
* 日英対訳テキストの並列表示
* 一文単位での閲覧
* 英訳練習モード（訳文の表示を切り替え可能）
* 静的生成（Static Site Generation）による高速表示
* 法令・文学など複数カテゴリのテキストに対応


## Tech Stack
* **Next.js**
  Reactベースのフレームワーク
* **Static Site Generation (SSG)**
  `getStaticPaths` / `getStaticProps` による静的ページ生成
* **Vercel**
  ホスティングおよびデプロイ


## Project Structure
```
TransWindow
├ frontend
│ ├ pages
│ │ ├ law
│ │ │ └ [id].jsx
│ │ ├ literature
│ │ │ └ [id].jsx
│ │ └ index.jsx
│ ├ components
│ ├ data
│ │ ├ law
│ │ └ literature
│ └ public
└ README.md
```

* `pages/`
  Next.js のルーティング
* `components/`
  UIコンポーネント
* `data/`
  法令・文学のテキストデータ


## Local Development
```bash
cd frontend
npm install
npm run dev
```
開発サーバーが起動します。
```
http://localhost:3000
```


## Design Concept
多くの法律・文学テキストは、翻訳と原文を往復しながら読むことで理解が深まります。
TransWindow は、**対訳を一文単位で並べて表示することで、原文と訳文を比較しやすい読書体験**を目指しています。
特に法令の英訳は、語彙や表現の学習素材としても有用であるため、法律学習と英語学習の両方を補助する用途を想定しています。


## Future Improvements
* キーワード検索機能
* 条文番号ジャンプ
* データソースの拡張
* UI/UX の改善
* 多言語対応


## レスポンシブ対応について
本アプリは主にデスクトップ環境での利用を想定しています。
TransWindow の中心的な体験は、原文と訳文を横並びで比較しながら読むことにあります。しかし、スマートフォンのような横幅の狭い画面では、一文単位の対応関係が把握しにくくなり、UXが大きく低下します。
そのため、現時点では「単にスマホで表示できること」よりも、「対訳を比較しやすいこと」を優先し、デスクトップ向けのUIを中心に設計しています。


## License
This project is for educational purposes.
