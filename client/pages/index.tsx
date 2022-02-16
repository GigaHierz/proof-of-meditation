import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function getLayout(page: any) {
    return <Layout>{page}</Layout>;
  }

  getLayout("");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Proof of Meditation</h1>
    </div>
  );
};

export default Home;
