import './Navbar.css';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import Logo from '@/shared/assets/logo.png';
import AppLink from '@/shared/ui/AppLink/AppLink';

export const Navbar = () => {
    
    return ( 
        <div className='navbar'>
            <AppLink 
                to={RoutePath.home}
                className='logo-link'
            >
                <img src={Logo} className="logo" alt="HaHaBoard logo" />
            </AppLink>
        
            <AppLink 
                to={RoutePath.home}
            >
                Home
            </AppLink>

            <AppLink 
                to={RoutePath.about}
            >
                About
            </AppLink>

        </div>
    );
};
    