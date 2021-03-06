import { useState } from 'react'
// import { getFitbitData } from '../services/fitbitService'
import styles from '../styles/Meditating.module.scss'
import Link from 'next/link'

function MeditatingPage () {
  const [startState, setStartState] = useState<string>()
  const [stopState, setStopState] = useState<string>()
  const [status, setStatus] = useState<string>('')
  const [showart, setShowart] = useState(false)

  const start = () => {
    if (!startState) {
      console.log('start')

      setStartState(`${new Date().getHours()}:${new Date().getMinutes()}`)
      setStopState(undefined)
      setStatus('meditation is in progress')
    }
  }
  const stop = () => {
    if (!stopState) {
      console.log('stop')

      setStopState(`${new Date().getHours()}:${new Date().getMinutes()}`)
      setStatus('Meditation was ended. Great Job')
    }
  }
  // const mint = () => {
  //   console.log(
  //     Number(stopState?.replace(':', '')) - Number(startState?.replace(':', ''))
  //   )
  //   console.log(
  //     Number(stopState?.replace(':', '')) - Number(startState?.replace(':', ''))
  //   )
  //   if (
  //     startState &&
  //     stopState &&
  //     Number(stopState?.replace(':', '')) -
  //       Number(startState?.replace(':', '')) >
  //       1
  //   ) {
  //     getFitbitData(startState, stopState).then((colorArray: string[]) => {
  //       console.log(colorArray)
  //       // const container = document.getElementById('mycanvas')
  //       // container.appendChild(canvas)
  //     })
  //   } else {
  //     setStatus(
  //       'sorry, this was to short. You will get an NFT if you meditated longer than 5 minutes'
  //     )
  //   }
  //   setStartState(undefined)
  //   setStopState(undefined)
  // }

  const showPixelArt = () => {
    setShowart(true)
  }

  return (
    <div className={styles.content}>
      {' '}
      <div className={styles.meditation_buttons}>
        <button
          className={styles.button}
          disabled={startState !== undefined}
          onClick={start}
        >
          start
        </button>
        <button
          className={styles.button}
          disabled={stopState !== undefined && startState === undefined}
          onClick={stop}
        >
          stop
        </button>
        <span id='mycanvas' className={styles.status}>
          {status}
        </span>
      </div>
      <div className={styles.mint_buttons}>
        <button
          className={styles.button_mint}
          disabled={!startState || !stopState}
          onClick={showPixelArt}
        >
          mint
        </button>
        <div className={styles.link}>
          <Link href='/list'>
            <a>my NFTs</a>
          </Link>
        </div>

        {showart ? (
          <img className={styles.image} src='/pixels/1.png' alt='pxiel art' />
        ) : null}
      </div>
    </div>
  )
}

export default MeditatingPage
