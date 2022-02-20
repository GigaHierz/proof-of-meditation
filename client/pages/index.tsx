import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  function getLayout (page: any) {
    return <Layout>{page}</Layout>
  }

  getLayout('')
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>welcome to</h3>
      <h3 className={styles.title}>Proof of Meditation</h3>
      <span className={styles.intro}>
        the program always starts at the first of every month and goes for 21
        days. if you sign up with your fitbit, you will be asked to pay the 100$
        at the beginning. for every meditation you do you will get an unique NFT
        based on your heartrate. if you finish the month with an NFT for
        everyday you will get the full amount back. for every day you are not
        meditating we will reduce the amount you will get back by 5$. if you
        miss more than 10 days, we will keep the money. but you will hopefully
        try again. aaaand you have theses amazing NFTs still from all of the
        days you did meditate.
      </span>
    </div>
  )
}

export default Home
