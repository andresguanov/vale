import Head from 'next/head'
import Image from 'next/image'

import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'


export default function Tequiero() {

  const [music, setMusic] = useState("")
    const [paused, setPaused] = useState(true)


  useEffect(() => {

    const music = new Audio("https://andresguanov.github.io/assets/love.mp3")
    music.volume = 0.05
    music.loop = true
    setMusic(music)

  }, [])

  const handleMusic = () => {
    if (paused) {

      music.play()
      setPaused(paused => !paused)
    } else {
      music.pause()
      setPaused(paused => !paused)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Para la más hermosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <h1 className="text-5xl relative text-center">
          No hay nadie mejor que tú
          <img className={`absolute top-5 -left-0 md:-left-14 cursor-pointer ${!paused && "bg-green-300 rounded-full"}`} src="/music.svg" width={30} height={30} alt="music" onClick={handleMusic} />
        </h1>
        <p className="max-w-xl mt-5 text-md">
          Hola Vale ✨ eres la chica más fabulosa, más genial y la más hermosa del mundo mundial. 
        </p>
        <p className="max-w-xl mt-5 text-md">
        ¿Te divirtió un poquito esto que hice? no es mucho pero es trabajo honesto jajaj Espero caerte un poquito mejor porque ¿quién hace estos detalles hoy en día? Nadie ... creo xd 
        </p>
        <p className="max-w-xl mt-5 text-md">
        Bueno, que tengas un hermoso día, que te vaya bien en tus estudios y en todo lo que hagas ✨
        </p>
        <p className="max-w-xl mt-5 text-md">
          Mi hoja de vida es la mejor, ¿por qué no me contratas?😔
        </p>
        <p className="max-w-xl mt-5 text-md">
          Entonces, con respecto a la anterior pregunta, ¿la respuesta es un sí o un sí? xdxdd
        </p>
        <p className="max-w-xl mt-5 mb-5 text-md">
          Ahora dime tú ¿qué piensas de mí?...
        </p>
        <img src="https://scontent.fuio19-1.fna.fbcdn.net/v/t1.6435-9/159971404_3286263874840885_1989985709279539530_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DjzSKzfe2HYAX_abla-&tn=WGuBPoH4O6sBtSDA&_nc_ht=scontent.fuio19-1.fna&oh=00_AT_xIFqLaeKdi8m0ZOpqi-g_rma527xnMgGAdvYb1bFZMg&oe=6253C34A" alt="meme" width="400px" />
      </main>


      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/jheslyvaleria/"
          rel="noopener noreferrer"
        >
          La única maravilla del mundo
        </a>
      </footer>
    </div>
  )
}
