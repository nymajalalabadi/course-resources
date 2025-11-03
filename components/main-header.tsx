import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
        <h1 id="logo">
            <Link href="/">NextNews</Link>
        </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}