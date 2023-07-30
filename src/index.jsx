import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import Page from './global/Page';
import Navigation from './global/Navigation';
import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Navigation />
        <Page />
    </StrictMode>
);
