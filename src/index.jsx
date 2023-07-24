import ReactDOM from 'react-dom/client';
import Page from './global/Page';
import Navigation from './global/Navigation';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Navigation />
        <Page />
    </>
);
