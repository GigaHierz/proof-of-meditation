import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/onboarding">
        <a>onboarding</a>
      </Link>
      <Link href="/tracking">
        <a>tracking</a>
      </Link>
      <Link href="/list">
        <a>list</a>
      </Link>
    </nav>
  );
}
