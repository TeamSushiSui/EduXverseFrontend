import './UserPanel.css';
import { AccProfilePics, BlobImg, EdxHeadset, EdxVest } from '../../Components';
import { BiEdit } from 'react-icons/bi';

const UserPanel = () => {
  return (
    <div className='user-panel'>
      <div className='user-panel-top-section'>
        <div className='user-profile'>
            <h1>User Profile</h1>
            <div className='user-profile-stats'>
                <div className='profile-stat-title'>
                    <p>XP</p>
                    <p>EDX</p>
                    <p>SUI</p>
                    <p>NFT</p>
                </div>
                <div className='profile-stat-color'>
                    <div className='color' style={{backgroundColor: '#F05555'}}></div>
                    <div className='color' style={{backgroundColor: '#FFBF1C'}}></div>
                    <div className='color' style={{backgroundColor: '#3790FA'}}></div>
                    <div className='color' style={{backgroundColor: '#16ED52'}}></div>
                </div>
                <div className='profile-stat-rate'>
                    <p>5000</p>
                    <p>10</p>
                    <p>40</p>
                    <p>7</p>
                </div>
            </div>
        </div>
        <div className='profile-pics-section'>
            <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Mykel.sui</p>
            <div>
                <img src={ AccProfilePics } alt="" />
                <div><BiEdit style={{cursor:'pointer', color: '#F05555'}}/><p style={{margin: '0'}}>change</p></div>
            </div>
        </div>
      </div>
      <div className='user-panel-bottom-section'>
        <div>
            <img src={EdxVest} alt=""  width={350} height={300}/>
            <p style={{fontFamily: 'Montserrat', fontWeight: '700'}}>EDX SHIRT</p>
            <p style={{fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5'}}>COMMON</p>
        </div>
        <div>
            <img src={BlobImg} alt="" width={350} height={300} />
            <p style={{fontFamily: 'Montserrat', fontWeight: '700'}}>BLOB</p>
            <p style={{fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5'}}>RARE</p>
        </div>
        <div>
            <img src={EdxHeadset} alt=""  width={350} height={300}/>
            <p style={{fontFamily: 'Montserrat', fontWeight: '700'}}>EDX VR HEADSET</p>
            <p style={{fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5'}}>RARE</p>
        </div>
      </div>
    </div>
  )
}

export default UserPanel;