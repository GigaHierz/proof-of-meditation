import { useState } from 'react'
import styles from '../styles/Signup.module.scss'

function Signup () {
  const [state, setState] = useState('')
  const [nameState, setNameState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const signup = () => {
    setState('you are registered')
  }
  return (
    <div className={styles.inputs}>
      <input
        type='text'
        className={styles.input}
        placeholder={'fitbit account'}
        onChange={event => setNameState(event.target.value)}
      />
      <input
        type='password'
        className={styles.input}
        placeholder={'password'}
        onChange={event => setPasswordState(event.target.value)}
      />
      <button onClick={signup} className={styles.signup}>
        sign up
      </button>
      <span>{state}</span>
    </div>
  )
}

export default Signup
