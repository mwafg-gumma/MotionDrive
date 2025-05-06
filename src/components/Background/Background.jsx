
import './Back.css'
import car7 from '../../assets/image/car7.jpg'
import car3 from '../../assets/image/car3.jpg'
import car6 from '../../assets/image/car6.jpg'
import video4 from '../../assets/image/video4.mp4'

const Background = ({Play,HeroCount}) => {

    if(Play) {
        return (
            <video autoPlay loop muted className='Background'>
            <source src={video4}  />
        </video>
        )
    } else if(HeroCount === 0) {
        return <img src={car7} className='Background change' ></img>
    } else if (HeroCount === 1) {
        return <img src={car6} className='Background change' ></img>
    } else if (HeroCount === 2) {
        return <img src={car3} className='Background change'></img>
    }
}

export default Background
