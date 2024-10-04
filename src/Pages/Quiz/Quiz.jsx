import { BlockchainQuizImg } from '../../Components';
import './Quiz.css';

const Quiz = () => {
    const data = '<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button>Start Course</button>'
    
  return (
    <div className='quiz'>
      <h1>Introduction to Blockchain fundamentals and introduction to the Sui Blockchain</h1>
      <div className='text-details'>
        <img width={500} height={500} src={BlockchainQuizImg} alt="Quiz Heading pics" />
        <div className='quiz-text' dangerouslySetInnerHTML={{__html: data}}/>
      </div>
    </div>
  )
}

export default Quiz;