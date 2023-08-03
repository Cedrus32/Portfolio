import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './global/App';
import './styles/reset.css';
import './styles/index.css';

// TODO: implement 404 error -- may need custom routing from nav (where hashes are checked and scrolled into view)

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
