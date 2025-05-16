import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import Logo from '@/shared/assets/logo.png';

export const Navbar = () => ( 
    <div className='navbar'>
        <img src={Logo} className="logo" alt="HaHaBoard logo" />
        
        <NavLink to={RoutePath.home}>
            <h1>Home</h1>
        </NavLink>

        <NavLink to={RoutePath.about}>
            <h1>About</h1>
        </NavLink>
    </div>
);
    