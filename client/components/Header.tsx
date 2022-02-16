import Head from "next/head";
import styles from "../styles/Header.module.css";
import Sidebar from "./Sidebar";

export default function Header({ children }: { children: any }) {
  return (
    <>
      <h1 className="{headerStyles.title}">{children.title}</h1>
      <main className={styles.main}>{children}</main>
    </>
  );
}
