import React from 'react';

import { Link } from 'react-router-dom';


import { AuthRouter } from '@pages/auth';
import { CatalogRouter } from '@pages/catalog';


interface HomePageProps {

}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
    return (
        <>
            HOME PAGE
            <Link to={AuthRouter.root}>AUTH LINK</Link>

            <Link to={CatalogRouter.root}>Catalog LINK</Link>
        </>
    );
}

export default HomePage;