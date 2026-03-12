/**
 * law JSON を走査して英語の頻出単語と例文を抽出するスクリプト
 * 実行: node scripts/build-law-freq.js
 */

import fs from "fs";
import path from "path";

// === 設定 ===
const DATA_DIR = path.join(process.cwd(), "../data/laws"); // laws JSON格納ディレクトリ
const OUTPUT_FILE = path.join(DATA_DIR, "frequent_words.json");

// 除外語リスト（必要に応じて追加）
const stopWords = new Set([
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "be",
  "or",
  "for",
  "on",
  "shall",
  "that",
  "with",
  "as",
  "by",
  "at",
  "this",
  "we",
  "all",
  "are",
  "an",
  "from",
  "not",
  "it",
  "may",
  "than",
  "who",
  "more",
  "under",
  "any",
  "such",
  "which",
]);

// ディレクトリ内の JSON ファイル一覧取得
const files = fs.readdirSync(DATA_DIR);

const allWords = [];
const examplesMap = {};

files.forEach((file) => {
  if (!file.endsWith(".json")) return; // JSON 以外は無視
  const json = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf8"));

  json.forEach((entry, i) => {
    if (!entry.en) return; // 英訳がない場合スキップ
    const words = entry.en
      .replace(/[.,;:()"]/g, "")
      .toLowerCase()
      .split(/\s+/);

    words.forEach((w) => {
      if (!stopWords.has(w) && w.length >= 5) {
        if (!examplesMap[w]) examplesMap[w] = [];
        // すでに同じ英文が登録されていなければ追加
        if (
          examplesMap[w].length < 3 &&
          !examplesMap[w].some((e) => e.en === entry.en)
        ) {
          examplesMap[w].push({
            en: entry.en,
            ja: entry.ja,
            sourceFile: file,
            index: i,
          });
        }
        allWords.push(w);
      }
    });
  });
});

// 出現頻度で集計
const freqMap = {};
allWords.forEach((w) => {
  freqMap[w] = (freqMap[w] || 0) + 1;
});

const result = Object.entries(freqMap)
  .map(([word, freq]) => ({
    word,
    freq,
    examples: examplesMap[word],
  }))
  .sort((a, b) => b.freq - a.freq)
  .slice(0, 30); // 上位30語に絞る

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

console.log(`上位30の頻出単語 JSON を出力しました: ${OUTPUT_FILE}`);
