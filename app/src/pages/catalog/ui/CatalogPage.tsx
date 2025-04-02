import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


import { CatalogRouter } from "..";

interface CatalogPageProps {
    
}

type ResponseType<T = {}> = {
    success: boolean;
    code: number;
    data: T;
    error?: {
        text: string;
    };
};
interface Category {
    slug: string;
    title: string;
    children: string;
}

const categories: Category[] = [
    {
        slug: "spelling",
        title: "Орфография",
        children: "",
    },
    {
        slug: "grammar",
        title: "Грамматика",
        children: "",
    },
    {
        slug: "vocabulary",
        title: "Лексика",
        children: "",
    },
];

const promiseData = (slug: string): Promise<ResponseType<Category>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const category = categories.find(category => category.slug === slug);
            if (category) {
                resolve({
                    success: true,
                    code: 200,
                    data: category,
                });
            } else {
                resolve({
                    success: false,
                    code: 404,
                    data: {} as Category,
                    error: {
                        text: 'Категория не найдена',
                    }
                });
            }
        }, 500);
    });
};


 
const CatalogPage: React.FunctionComponent<CatalogPageProps> = () => {
    let { categoryId } = useParams();

    const [category, setCategory] = React.useState<Category | null>(null)

    React.useEffect(() => {
        if (categoryId) {
            promiseData(categoryId).then((response) => {
                console.log(response);
                if (response.success) {
                    setCategory(response.data);
                } else {
                    setCategory(null)
                }
            })
        }
    }, [categoryId])


    return (<>
        <div className="page catalog">
            <section className="page-section">
                <h1 className="page-title">
                    Каталог
                </h1>
            </section>
            
            {
                categoryId 
                ?
                <>
                    {category?.title}
                </>
                : 
                <section className="page-section catalog-items">
                    <div className="catalog-items__item">
                        <Link to={`${CatalogRouter.root}/spelling`}>SPELLING LINK</Link>
                    </div>
                        <div className="catalog-items__item">
                            <Link to={`${CatalogRouter.root}/error`}>ERROR LINK</Link>
                        </div>
                </section>
            }
        </div>
    </>);
}
 
export default CatalogPage;