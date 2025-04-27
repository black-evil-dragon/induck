import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';


import { Loader } from '@shared/Loader';
import { Category } from '@shared/data/catalog';
import { Button } from '@shared/Button';

import { TaskAPI } from '../api';
import { CatalogAPI } from '@pages/catalog';
import { Checkbox } from '@shared/Checkbox';



interface RandomTaskPageProps {
    
}

 
const RandomTaskPage: React.FunctionComponent<RandomTaskPageProps> = () => {
    let { categoryId } = useParams();
    let navigate = useNavigate();

    const [isLoading, setLoading] = React.useState(true)


    const [category, setCategory] = React.useState<Category | null>(null)
    

    const [selectedCategories, setSelectedCategories] = React.useState<Record<string, boolean>>(() => {
        const initialSelection: Record<string, boolean> = {};

        if (category) {
            initialSelection[category.id] = true;
            category.children?.forEach(child => {
                initialSelection[child.id] = true;
            });
        }

        return initialSelection;
    });

    const handleCategoryToggle = (categoryId: string, isChecked: boolean) => {
        setSelectedCategories(prev => ({
            ...prev,
            [categoryId]: isChecked
        }));
    };


    const fetchCatalog = async (id: string) => {
        setLoading(true)
        const response = await CatalogAPI.getCatalog({id: id})
        const data = response.data as Category

        if (response.success && response.code == 200) {
            setCategory(data)


        } else if (response.success && response.code == 404) {
            navigate('/404')
        }

        setLoading(false)
    }


    const fetchTask = async () => {
        setLoading(true)

        const response = await TaskAPI.getRandomTask({})

        console.log(response);

        setLoading(false)
    }


    const handleStartTask = () => {
        const selectedIds = Object.entries(selectedCategories)
            .filter(([_, isSelected]) => isSelected)
            .map(([id]) => id);

        console.log('Выбранные категории:', selectedIds);
        fetchTask()
    }



    React.useEffect(() => {
        setLoading(false)


        if (categoryId) {
            fetchCatalog(categoryId)
        } else {
            navigate('/404')
        }

    
    }, [categoryId])

    return (<>
        <div className="page task">
            <section className="page-section">
                <h2>Создать случайное задание</h2>

                <p>Задание будет содержать вопросы из категории:</p>
                {
                    category && <div>
                        <Checkbox
                            label={category?.title}
                            checked={selectedCategories[category.id] || false}
                            onChange={(checked) => handleCategoryToggle(category.id, checked)}
                        />
                        {category?.children && category.children.map((item) => (
                            <Checkbox
                                key={`child-${item.id}`}
                                label={item.title}
                                checked={selectedCategories[item.id] || false}
                                onChange={(checked) => handleCategoryToggle(item.id, checked)}
                            />
                        ))}
                    </div>
                }
            </section>

            {
                isLoading ? <Loader />
                :
                <section className="page-section">
                    <Button onClick={handleStartTask}>Начать выполнение</Button>
                </section>
            }
        </div>
    </>);
}
 
export default RandomTaskPage;

