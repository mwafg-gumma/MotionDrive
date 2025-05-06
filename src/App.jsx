import { useState,useEffect } from "react"
import Background from './components/Background/Background'
import NavBar  from "./components/Navbar/NavBar"
import Hero from './components/Hero/Hero'


const App = () => {
  let Data = [
    {text1:"Midnight Predator",text2:"A Powerful Beast Ruling The Night with unstoppable Force"},
    {text1:"Silver Bullet",text2:"Speed and Elegance Fused into a masterpiece of motion"},
    {text1:"Neon Dream",text2:"A Youthful Spirit Shining under City light"},
  ]
  const[HeroCount,setHeroCount] = useState(1)
  const[Play,setPlay] = useState(false)

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count) => {return count== 2 ? 0 : count+1})
    },4000)
  },[])
  return (
    <>
    <NavBar />
    <Background HeroCount={HeroCount} Play={Play} />
    <Hero 
    Data = {Data[HeroCount]}
    Play={Play}
    setPlay={setPlay}
    HeroCount={HeroCount}
    setHeroCount={setHeroCount}
    />
    </>
  )
}

export default App
















