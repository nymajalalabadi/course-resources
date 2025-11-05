'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {

  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header id="main-header">
        <h1 id="logo">
            <Link href="/">NextNews</Link>
        </h1>
      <ul>
        <li>
          <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/news" className={isActive('/news') ? 'active' : ''}>News</Link>
        </li>
        <li>
          <Link href="/archive" className={isActive('/archive') ? 'active' : ''}>Archive</Link>
        </li>
      </ul>
    </header>
  );
}