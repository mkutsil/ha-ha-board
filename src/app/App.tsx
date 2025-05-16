import Logo from '../shared/assets/logo.png';

import './styles/index.css';
import './styles/reset.css'; 

const App = () => (
    <>         
        <div> 
            <a 
                href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={Logo} className="logo react" alt="React logo" />
            </a>
        </div>
    </>
);

export default App;
