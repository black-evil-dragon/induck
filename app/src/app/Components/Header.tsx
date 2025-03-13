import React from "react";


function Header(props: {
    parent: {
        className: string,
    }
}) {
    return (
        <>
            <div className={`${props.parent.className}__content`}>
                HEADER
            </div>
        </>
    );
}

export default Header;