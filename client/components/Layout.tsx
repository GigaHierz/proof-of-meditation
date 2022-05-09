import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'
import Menu from './Menu'

export default function Layout ({ children }: { children: any }) {
  return (
    <>
      <div className={styles.pageframe}>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Nunito+Sans:wght@200&display=swap'
            rel='stylesheet'
          ></link>
          <title>Proof of Meditation</title>
        </Head>

        <div className={styles.page}>
          <div className={styles.header}>
            <div className={styles.left}>
              <Image
                width={400}
                height={600}
                src='/ocean.jpeg'
                alt='calm ocean'
              />
            </div>
            <div className={styles.right}>
              <Menu></Menu>
              <h1 className={styles.moto}>mental health is mental wealth</h1>
            </div>
          </div>
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
