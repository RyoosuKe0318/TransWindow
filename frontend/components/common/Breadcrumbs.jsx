import Link from "next/link";

export default function Breadcrumbs({ crumbs = [] }) {
  if (!crumbs || !crumbs.length) return null; // crumbs がない場合は描画しない

  return (
    <nav>
      <ol className="flex space-x-2">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            <Link href={crumb.href} className="hover:underline">
              {crumb.label}
            </Link>
            {i < crumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}