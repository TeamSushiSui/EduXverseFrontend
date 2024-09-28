import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navigations } from '../index';

const Navbar = () => {
  return (
    <div className='navigations'>
        <nav>
            <h1>EduXverse</h1>
            <ul>
              {Navigations.map((nav) => {
                return (
                  <li key={nav.id}><a href={nav.url}>{nav.name}</a></li>
                )
              })}
            </ul>
            <button><Link to={'/'}>Get Started</Link></button>
        </nav>
    </div>
  )
}

export default Navbar;