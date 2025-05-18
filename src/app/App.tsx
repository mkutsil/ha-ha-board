import './styles/index.css';
import './styles/reset.css'; 
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from '@/app/providers/router';
import { SnackbarProvider } from '@/app/providers/SnackbarProvider';

const App = () => (
    <SnackbarProvider>       
        <Navbar />
        <div className='page-container'>
            <AppRouter/>
        </div>
    </SnackbarProvider>
);

export default App;
