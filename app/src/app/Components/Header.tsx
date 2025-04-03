import React from "react";
import { Link } from "react-router-dom";

import { CatalogRouter } from "@pages/catalog";


function Header(props: {
    parent: {
        className: string,
    }
}) {
    return (
        <>
            <header className={`${props.parent.className}__content`}>
                HEADER
                <Link to={"/"}>HOME</Link>
                <Link to={CatalogRouter.root}>CATALOG</Link>
            </header>
        </>
    );
}

export default Header;