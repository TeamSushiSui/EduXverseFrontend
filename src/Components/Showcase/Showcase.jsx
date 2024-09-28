import './Showcase.css';
import miniShowcaseVideo from '../../Assets/Students_1.mp4' 
const Showcase = () => {
  return (
    <div className='showcase-section'>
        <div className='mini-showcase'>
            <h1>Join a community of learners to learn, earn, and socialize</h1>
            <video src={miniShowcaseVideo} type="video/mp4" className="miniShowCaseVid" autoPlay muted loop />
        </div>
        <div className='app-functions-container'>
            <div className='app-fuctions-morphism-bg'>
                <div className='app-function-showcase'>
                    <div>
                        <h1>Learn</h1>
                        <p>Have an interactive learning experience on EduXverse</p>
                    </div>
                    <img src="https://tinyurl.com/58kpvujs" alt="Students discussing" />
                </div>
                <div className='app-function-showcase'>
                    <img src="https://tinyurl.com/58kpvujs" alt="Students discussing" />
                    <div>
                        <h1>Earn</h1>
                        <p> Get rewarded for your knowledge and skills on EduXverse</p>
                    </div>
                </div>
                <div className='app-function-showcase'>
                    <div>
                        <h1>Interact</h1>
                        <p>Interact with fellow learners and educators on EduXverse</p>

                    </div>
                    <img src="https://tinyurl.com/58kpvujs" alt="Students discussing" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase;