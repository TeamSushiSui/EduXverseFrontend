import './Signup.css';
import { FaGoogle } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup-container'>
            <div className='inner-signup-container'>
                <div>
                    <h1>Welcome to EduXverse</h1>
                    <p>Signup or Login to your account</p>
                </div>
                <div>
                    {/* Kindly write an onlick function for the buttons and make the bankend and the blockchain auth, thanks */}
                    <button><FaGoogle /> Google</button>
                    <button><IoWallet /> Connect Wallet</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;
