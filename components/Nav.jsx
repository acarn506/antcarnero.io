import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/agify">
            <a>Agify</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
