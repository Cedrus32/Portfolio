import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './global/App';
import './styles/reset.css';
import './styles/index.css';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
