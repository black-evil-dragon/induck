import React from "react";


type useInputProps = {
    initial: string,
    required?: boolean
};


const useInput = (props: useInputProps) => {
    const [value, setValue] = React.useState(props.initial);

    const onChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setValue(event.target.value)
    }


    return {
        value,
        onChange,
    };
};

export default useInput;