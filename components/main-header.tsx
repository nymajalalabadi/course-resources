import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {

  return (
    <header id="main-header">
        <h1 id="logo">
            <Link href="/">NextNews</Link>
        </h1>
      <ul>
        <li>
          <NavLink href="/news">News</NavLink>
        </li>
        <li>
          <NavLink href="/archive">Archive</NavLink>
        </li>
      </ul>
    </header>
  );
}