import React from "react";
import { Link } from "react-router-dom";


function Header(props: {
    parent: {
        className: string,
    }
}) {
    return (
        <>
            <div className={`${props.parent.className}__content`}>
                HEADER
                <Link to={"/"}>HOME</Link>
            </div>
        </>
    );
}

export default Header;