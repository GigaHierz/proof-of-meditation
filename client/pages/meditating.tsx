import { useState } from 'react'
import { getFitbitData } from '../services/fitbitService'
import { createPixelArt } from '../services/imageService'
import styles from '../styles/Meditating.module.scss'

function MeditatingPage () {
  const [startState, setStartState] = useState<string>()
  const [stopState, setStopState] = useState<string>()
  const [status, setStatus] = useState<string>('')

  const start = () => {
    if (!startState) {
      console.log('start')

      setStartState(`${new Date().getHours()}:${new Date().getMinutes()}`)
      setStopState(undefined)
      setStatus('Meditation is in Progress')
    }
  }
  const stop = () => {
    if (!stopState) {
      console.log('stop')

      setStopState(`${new Date().getHours()}:${new Date().getMinutes()}`)
      setStatus('Meditation was ended. Great Job')
    }
  }
  const mint = () => {
    console.log(
      Number(stopState?.replace(':', '')) - Number(startState?.replace(':', ''))
    )
    console.log(
      Number(stopState?.replace(':', '')) - Number(startState?.replace(':', ''))
    )
    if (
      startState &&
      stopState &&
      Number(stopState?.replace(':', '')) -
        Number(startState?.replace(':', '')) >
        1
    ) {
      getFitbitData(startState, stopState).then((colorArray: string[]) => {
        console.log(colorArray)
        // const canvas = createPixelArt(colorArray)
        // const container = document.getElementById('mycanvas')
        // container.appendChild(canvas)
      })
    } else {
      setStatus(
        'sorry, this was to short. You will get an NFT if you meditated longer than 5 minutes'
      )
    }
    setStartState(undefined)
    setStopState(undefined)
  }

  return (
    <div className={styles.content}>
      {' '}
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
      <button
        className={styles.button}
        disabled={!startState || !stopState}
        onClick={mint}
      >
        mint
      </button>
      <button className={styles.button}>see my progress</button>
    </div>
  )
}

export default MeditatingPage
