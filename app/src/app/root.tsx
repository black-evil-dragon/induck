import React from 'react';
// import { Provider } from 'react-redux';

import Routing from './Router'
// import { store } from './Store';



export default function App() {
    return (
        <>
            <React.StrictMode>
                {/* <Provider store={store}>
                    
                </Provider> */}

                <Routing />
            </React.StrictMode>
        </>
    );
}
