import { Link } from 'react-router-dom';
// import { IoMdArrowDroprightCircle,
//     IoMdArrowDropleftCircle
//   } from "react-icons/io";
  import { ForYouFavorites, Navbar } from '../../src/Components/index';

const Learn = () => {
  return (
    <div>
        <Navbar />
        <div className='hero-section'>
            {/* <div className='hero-tinted-overlay'></div> */}
            {/* <IoMdArrowDroprightCircle className='pagination-right'/>
            <IoMdArrowDropleftCircle className='pagination-left'/> */}

            {/* Commented the above lines of code off as I think there's no need for the pagination buttons anymore. */}
            <div className='hero-content'>
                <h1>What are you <br/>Learning today?</h1>
                <p>Get access to informative and  <br /> interactive learning experiences</p>
                <button><Link to={'/'}>Explore</Link></button>
            </div>
        </div>
        <ForYouFavorites />
    </div>
  )
}

export default Learn;
