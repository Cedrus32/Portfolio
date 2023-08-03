import { useEffect } from 'react';
import Page from './Page';
import Navigation from './Navigation';

const App = () => {
    console.log('render: App');

    useEffect(() => {
        console.log('mount: App');
        console.log('--- --- ---');
    }, []);
    return (
        <>
            <Navigation />
            <Page />
        </>
    )
};

export default App;
