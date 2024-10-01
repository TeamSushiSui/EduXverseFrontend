import { EngageCreate, Navbar } from '../Components';
import { Link } from 'react-router-dom';

const Earn = () => {
  return (
    <div>
        <Navbar />
        <div className='hero-section'>
            {/* <div className='hero-tinted-overlay'></div> */}
            {/* <IoMdArrowDroprightCircle className='pagination-right'/>
            <IoMdArrowDropleftCircle className='pagination-left'/> */}

            {/* Commented the above lines of code off as I think there's no need for the pagination buttons anymore. */}
            <div className='hero-content'>
                <h1>Earn even while <br/>Learning</h1>
                <p>Explore opportunities to earn <br /> on the SUI blockchain through <br /> EduXverse</p>
                <button><Link to={'/'}>Explore</Link></button>
            </div>
        </div>
        <EngageCreate />
    </div>
  )
}

export default Earn
