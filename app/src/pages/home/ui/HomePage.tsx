import React from 'react';

import { Link } from 'react-router-dom';


import { AuthRouter } from '@pages/auth';
import { SelectionRouter } from '@pages/selection';


interface HomePageProps {

}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
    return (
        <>
            HOME PAGE
            <Link to={AuthRouter.root}>AUTH LINK</Link>

            <Link to={SelectionRouter.root}>SELECTION LINK</Link>
        </>
    );
}

export default HomePage;