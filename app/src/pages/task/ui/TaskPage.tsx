import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { Loader } from '@shared/Loader';


import { Button } from '@shared/Button';


interface TaskPageProps {
    
}
 
const TaskPage: React.FunctionComponent<TaskPageProps> = () => {
    let { taskId } = useParams();
    let navigate = useNavigate();

    const [isLoading, setLoading] = React.useState(true)
    const [isStartPage, setStartPage] = React.useState(true)
    


    const handleStartTask = () => {
    }

    React.useEffect(() => {
        setLoading(false)

    }, [])

    return (<>
        {
        isLoading ? <Loader /> 
        :
        isStartPage ?
        <>
            <section className="page task">
                {taskId}
                <Button onClick={handleStartTask}>Пройти тест</Button>
            </section>
        </> :
        <>
            
        </>
        }
    </>);
}
 
export default TaskPage;