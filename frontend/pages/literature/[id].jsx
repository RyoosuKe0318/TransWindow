import fs from "fs";
import path from "path";
import Layout from "../../components/common/Layout";
import Table from "../../components/content/Table";

export default function LawPage({ tableData }) {
  return (
    <Layout gColor="#f5fff0ff">
      <Table tableData={tableData} />
    </Layout>
  );
}

// 静的生成するパス
export async function getStaticPaths() {
  const refPath = path.join(process.cwd(), "data/reference/references.json");
  const reference = JSON.parse(fs.readFileSync(refPath, "utf-8"));

  const paths = reference.flatMap((section) =>
    section.items.map((item) => ({
      params: { id: item.id },
    }))
  );

  return { paths, fallback: false };
}

// props として tableData を渡す
export async function getStaticProps({ params }) {
  const refPath = path.join(process.cwd(), "data/reference/references.json");
  const reference = JSON.parse(fs.readFileSync(refPath, "utf-8"));

  let targetItem = null;
  let directory = "law";

  for (const section of reference) {
    const found = section.items.find((item) => item.id === params.id);
    if (found) {
      targetItem = found;
      directory = section.directory || "law";
      break;
    }
  }

  if (!targetItem) {
    return { notFound: true };
  }

  const dataPath = path.join(
    process.cwd(),
    "data",
    directory,
    `${params.id}.json`
  );
  const dataJson = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const tableData = {
    titleJa: targetItem.title,
    titleEn: targetItem.titleEn,
    data: dataJson,
    resources: targetItem.resources || [],
  };

  return {
    props: {
      tableData,
    },
  };
}
