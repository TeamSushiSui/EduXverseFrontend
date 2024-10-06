import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navigations } from '../index';
import { AuthService } from '../../utils/authService.ts';

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
        <div>
          {AuthService.isAuthenticated() ? (
            <button><Link to={'/user'}>Connected</Link></button> 
          ) : (
            <button><Link to={'/signup'}>Get Started</Link></button>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;