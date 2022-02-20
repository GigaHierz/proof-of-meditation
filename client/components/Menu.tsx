import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Menu.module.scss'

export default function Menu () {
  const [showState, setShowState] = useState(false)

  const toggleButton = () => {
    setShowState(!showState)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/'>
          <a>home</a>
        </Link>
        <Link href='/signup'>
          <a>signup</a>
        </Link>
        <Link href='/meditating'>
          <a>meditating</a>
        </Link>
        <Link href='/list'>
          <a>list</a>
        </Link>
      </nav>
    </div>
  )
}
