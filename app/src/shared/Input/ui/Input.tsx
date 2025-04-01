import React from "react";

type InputProps = {
    value: string;
    onChange: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}
 
const Input: React.FunctionComponent<InputProps> = ({
    value,
    onChange,
}) => {
    return (<>
        <input
            value={value}
            onChange={onChange}
        />
    </>);
}
 
export default Input;