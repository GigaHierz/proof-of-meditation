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
          <div className={styles.left}>
            <Image
              width={500}
              height={790}
              src='/ocean.jpeg'
              alt='calm ocean'
            />
          </div>
          <div className={styles.right}>
            <Menu></Menu>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}
