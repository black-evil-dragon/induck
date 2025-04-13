import React from 'react';


interface ButtonProps {
    type?: "submit" | "reset" | "button",
    className?: string,

    children?: React.ReactNode;

    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}
 
const Button: React.FunctionComponent<ButtonProps> = ({
    type = 'button',
    className = '',

    children,

    onClick = () => {
        console.warn('Button not initialize!');
    },
}) => {
    return (<>
        <button onClick={onClick}>
            {children}
        </button>
    </>);
}
 
export default Button;