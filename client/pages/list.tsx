import styles from '../styles/List.module.scss'

function ListPage () {
  return (
    <div id='something' className={styles.list}>
      <img className={styles.image} src='/pixels/1.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/2.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/3.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/4.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/5.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/6.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/7.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/8.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/9.png' alt='pixel art' />
      <img className={styles.image} src='/pixels/10.png' alt='pixel art' />
    </div>
  )
}

export default ListPage
