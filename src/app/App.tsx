import './styles/index.css';
import './styles/reset.css'; 
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from '@/app/providers/router';

const App = () => (
    <>       
        <Navbar />
        <div className='page-container'>
            <AppRouter/>
        </div>
    </>
);

export default App;
