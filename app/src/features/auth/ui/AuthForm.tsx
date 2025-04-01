import React from 'react';


import { Input, useInput } from '@shared/Input';


interface AuthFormProps {
    
}
 
const AuthForm: React.FunctionComponent<AuthFormProps> = () => {

    const userMail = useInput({
        initial: '',
        required: true,
    })

    const userPassword = useInput({
        initial: '',
        required: true,
    })


    return (
        <>
            <Input {...userMail} />
            <Input {...userPassword} />

            <button onClick={() => console.log(userMail.value, userPassword.value)}>BUTTON</button>
        </>
    );
}
 
export default AuthForm;