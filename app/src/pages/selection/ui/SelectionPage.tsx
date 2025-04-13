import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SelectionAPI } from '../api';
import { Selection } from '@shared/data/task';
import { Loader } from '@shared/Loader';
import { Link } from 'react-router-dom';
import { CatalogRouter } from '@pages/catalog';
import { Button } from '@shared/Button';


interface SelectionPageProps {
    
}
 
const SelectionPage: React.FunctionComponent<SelectionPageProps> = () => {
    let { selectionSlug } = useParams();
    let navigate = useNavigate();

    const [isLoading, setLoading] = React.useState(true)
    const [isStartPage, setStartPage] = React.useState(true)


    const [selection, setSelection] = React.useState<Selection | null>(null)
    


    const handleStartTask = () => {
        console.log(selection);
    }

    React.useEffect(() => {
        setLoading(true)
        SelectionAPI.getSelectionBySlug(selectionSlug!).then(response => {
            if (response.success) {
                setSelection(response.data!)
                setLoading(false)
            } else {
                navigate('/404')
            }
        })
    }, [selectionSlug])

    return (<>
        {
        isLoading ? <Loader /> 
        :
        isStartPage ?
        <>
        
            <section className="page quiz">
                <div>
                    <h1><Link to={`${CatalogRouter.root}/${selection?.category.slug}`}>{selection?.category.title}</Link> - {selection?.title}</h1>
                </div>

                <Button onClick={handleStartTask}>Пройти тест</Button>
            </section>
        </> :
        <>
            
        </>
        }
    </>);
}
 
export default SelectionPage;