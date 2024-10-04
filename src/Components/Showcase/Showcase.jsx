import './Showcase.css';
import Spline from '@splinetool/react-spline';
const Showcase = () => {
  return (
    <div className='showcase-section'>
        <div className='mini-showcase'>
            <h1>Join a community of learners to learn, earn, and socialize</h1>
            <iframe src='https://my.spline.design/blockchain-1c7ef541cc038471750d42092d795912/' title='Blockchain' frameborder='0' width='1300px' height='500px'></iframe>
        </div>
        <div className='app-functions-container'>
            <div className='app-fuctions-morphism-bg'>
                <div className='app-function-showcase'>
                    <div>
                        <h1>Learn</h1>
                        <p>Have an interactive learning experience on EduXverse</p>
                    </div>
                    <Spline
        scene="https://prod.spline.design/jrOv3oRke-ZSPho9/scene.splinecode" 
      />
                </div>
                <div className='app-function-showcase'>
                <Spline
        scene="https://prod.spline.design/psHIAKn4JaQ0xSuP/scene.splinecode" 
      />
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
                    <Spline
        scene="https://prod.spline.design/O6Gcg3DpvQqswDyY/scene.splinecode" 
      />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase;