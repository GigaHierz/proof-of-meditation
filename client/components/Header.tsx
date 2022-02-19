import Head from "next/head";
import styles from "../styles/Header.module.scss";
import Sidebar from "./Menu";

export default function Header({ children }: { children: any }) {
  return (
    <>
      <h1 className="{headerStyles.title}">{children.title}</h1>
      <main className={styles.main}>{children}</main>
    </>
  );
}
