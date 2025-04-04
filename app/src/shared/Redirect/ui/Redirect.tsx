import React from "react";

import { useNavigate } from "react-router-dom";

interface RedirectProps {
    path: string;
    time?: number;
}
 
const Redirect: React.FunctionComponent<RedirectProps> = ({
    path,
    time = 1000,
}) => {

    let navigate = useNavigate();


    
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(path)
        }, time)

        return () => {
            clearTimeout(timeout)
        }
    })
    return (<>
        Redirect...
    </>);
}
 
export default Redirect;