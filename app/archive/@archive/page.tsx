import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
    
    const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav id="archive-filter">
        <ul>
            {links.map((year) => (
                <li key={year}>
                    <Link href={`/archive/${year}`}>{year}</Link>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}