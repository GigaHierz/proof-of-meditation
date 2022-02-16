import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Sidebar></Sidebar>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
