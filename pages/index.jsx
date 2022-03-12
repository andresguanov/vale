import Head from 'next/head'
import {useState, useRef} from 'react'
import confetti from 'canvas-confetti'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'

const initial = "bg-transparent text-red-700"

export default function Home() {
  const [error, setError] = useState(initial)
  const [position, setPosition] = useState({x: 0, y:0})
  const [scale, setScale] = useState("scale(1)")
  const clicks = useRef(0)
  const router = useRouter()


  const handleError = (e) => {
    const x = Math.floor(Math.random() * 80)
    const y = Math.floor(Math.random() * 93)
    setError("absolute bg-red-800 text-white hover:text-black")
    setPosition({x,y})
    clicks.current++
            
    if(clicks.current>2) setScale("scale(0.8)")
    if(clicks.current>10) setScale("scale(0.5)")
    
  }

  const handleSuccess = (e) => {
    confetti()
    setTimeout(() => router.push("/tequiero"), 2000)
  }
  
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Vale eres fabulosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ¿Puedo ser tu  <span>novio?</span>
        </h1>

        <div className={styles.buttons}>
          <button
            onClick={handleSuccess}
            className={styles.success}
          >Por supuesto!</button>
          <button
            className={`w-32 border border-red-600 border-solid rounded-md hover:bg-red-100 transition-all delay-75 ${error}`}
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: `${scale}`
            }}
            onClick={handleError}
          >No</button>
        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/andresguanov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descrube al mejor novio del mundo
        </a>
      </footer>
    </div>
  )
}
