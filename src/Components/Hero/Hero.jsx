import './Hero.css';
import { Link } from 'react-router-dom';
// import { IoMdArrowDroprightCircle,
//          IoMdArrowDropleftCircle 
//        } from "react-icons/io";

const Hero = () => {
  return (
    <div className='hero-section'>
        {/* <div className='hero-tinted-overlay'></div> */}
        {/* <IoMdArrowDroprightCircle className='pagination-right'/>
        <IoMdArrowDropleftCircle className='pagination-left'/> */}

        {/* Commented the above lines of code off as I think there's no need for the pagination buttons anymore. */}
        <div className='hero-content'>
            <h1>LEARN, EARN, <br/>NETWORK</h1>
            <p>A Sui Blockchain Revolution.</p>
            <p>Ready for an immersive learning, earning <br /> and networking experience on the blockchain?</p>
            <button><Link to={'/'}>Explore</Link></button>
        </div>
    </div>
  )
}

export default Hero;