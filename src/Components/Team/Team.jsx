import './Team.css';
import { ProfilePics, GeorgeDP, RevivalDP, TeamLeadDP, AyoSamuelDP, MichaelObeDP, } from '../index';

const Team = () => {
  return (
    <div className='team'>
      <h1>Our Team</h1>
      <div className='team-members'>
        <div className='team-member'>
            <img src={GeorgeDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>George Junior</h2>
            <p className='member-role'>Blockchain developer</p>
        </div>
        <div className='team-member'>
            <img src={RevivalDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Revival</h2>
            <p className='member-role'>Community Manager</p>
        </div>
        <div className='team-member'>
            <img src={TeamLeadDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>De Rich Hub</h2>
            <p className='member-role'>Team Lead</p>
        </div>
        <div className='team-member'>
            <img src={AyoSamuelDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Ayo Samuel</h2>
            <p className='member-role'>Frontend Developer</p>
        </div>
        <div className='team-member'>
            <img src={MichaelObeDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Michael Obe</h2>
            <p className='member-role'>Backend Developer</p>
        </div>
        <div className='team-member'>
            <img src={ProfilePics} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Wisdom Obami</h2>
            <p className='member-role'>Creative Director</p>
        </div>
        <div className='team-member'>
            <img src={ProfilePics} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Divine Odike</h2>
            <p className='member-role'>Backend developer</p>
        </div>
      </div>
    </div>
  )
}

export default Team;