import { useState } from 'react'
import { getNft } from '../services/fitbitService'

function MeditatingPage () {
  const [startState, setStartState] = useState<string>()
  const [stopState, setStopState] = useState<string>()
  const [status, setStatus] = useState<string>('')

  const start = () => {
    if (!startState) {
      console.log('start')

      setStartState(`${new Date().getHours()}:${new Date().getMinutes()}`)
    }
  }
  const stop = () => {
    if (!stopState) {
      console.log('stop')

      setStopState(`${new Date().getHours()}:${new Date().getMinutes()}`)
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
      getNft(startState, stopState).then((uri: string) => {
        console.log(uri)

        // contract.mint(uri, { value: gasfee });
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
    <div className='content'>
      {' '}
      <button disabled={startState !== undefined} onClick={start}>
        Start Meditation
      </button>
      <button
        disabled={stopState !== undefined && startState === undefined}
        onClick={stop}
      >
        End Meditation
      </button>
      <span className='status'>{status}</span>
      <button disabled={!startState || !stopState} onClick={mint}>
        Mint
      </button>
      <button>See my progress</button>
    </div>
  )
}

export default MeditatingPage
