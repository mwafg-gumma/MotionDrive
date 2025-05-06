import play1 from '../../assets/image/play1.png'
import pause from '../../assets/image/pause.png'
import right from '../../assets/image/right.png'
import './hero.css'

const Hero = ({HeroCount,setHeroCount,Data,Play,setPlay}) => {
    return (
    <>
    <div className="hero">
        <div className="hero-text">
            <p>{Data.text1}</p>
            <p>{Data.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore The Features</p>
            <img src={right} className='back'  />
        </div>
        <div className="hero-dot-play">
            <ul>
                <li onClick={() => setHeroCount(0)} className={HeroCount === 0 ? "hero-dot orange":"hero-dot"} ></li>
                <li onClick={() => setHeroCount(1)} className={HeroCount === 1 ? "hero-dot orange":"hero-dot"} ></li>
                <li onClick={() => setHeroCount(2)} className={HeroCount === 2 ? "hero-dot orange":"hero-dot"} ></li>
            </ul>
            <div className="hero-video">
                <img src={Play? pause : play1} onClick={() => setPlay (!Play)} className='back' />
                <p>See The Video</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Hero

