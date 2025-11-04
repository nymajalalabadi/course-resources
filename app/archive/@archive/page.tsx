import Link from "next/link";

export default function ArchivePage() {
  return (
    <header id="archive-header">
      <nav id="archive-filter">
        <ul>
            <li>
                <Link href="/archive/2025">2025</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}