import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ComputersCanvas from '../3DModel'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  /*need to parse on the array to animate every letter also ignores the empty fields*/
  const nameArray = ['','W', 'a', 'l', 'i', 'd']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / ALX Student / Intern</h2>
          <Link to="/contact" className="flat-button">
            HIRE ME
          </Link>
        </div>
        <ComputersCanvas />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home