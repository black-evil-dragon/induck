import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


import { CatalogRouter } from "..";
import { Category } from "../api/types";
import { catalogAPI } from "../api";
import { Loader } from "@shared/Loader";
import { QuizRouter } from "@pages/quiz";



interface CatalogPageProps {
    
}

 
const CatalogPage: React.FunctionComponent<CatalogPageProps> = () => {
    let { categorySlug } = useParams();
    let navigate = useNavigate();

    const [catalog, setCatalog] = React.useState<Category[]>([])
    const [category, setCategory] = React.useState<Category | null>(null)
    const [isLoading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        if (categorySlug) {
            setLoading(true)
            catalogAPI.getCategoryBySlug(categorySlug).then(response => {
                if (response.success) {
                    setCategory(response.data!)
                    console.log(response);
                    setCatalog([])

                    setLoading(false)
                    
                } else if (response.code == 404) {
                    navigate('/404')
                }
            })
        } else {
            setLoading(true)
            catalogAPI.getCatalog().then(response => {
                if (response.success) {
                    setCatalog(response.data!)
                    setLoading(false)

                } else if (response.code == 404) {
                    navigate('/404')
                }
            })
        }
        
    }, [categorySlug])


    return (<>
        <div className="page catalog">
            <section className="page-section">
                <h1 className="page-title">
                    Каталог
                </h1>
            </section>

            {
                isLoading ? <Loader />
                : <>{
                    categorySlug
                    ? 
                    <>
                        <section>
                            <h2>{category?.title}</h2>
                        </section>
                        <section className="page-section catalog-items">
                            {
                            category?.children?.length
                            &&
                            category.children.map((item: Category, index: number) => (
                                <div className="catalog-items__item" key={`catalog-item-${index}`}>
                                    <Link to={`${CatalogRouter.root}/${item.slug}`}>{item.title}</Link>
                                </div>
                            ))
                            }
                        </section>

                        <section>
                            {
                                category?.quizzes && category.quizzes.map((item: Category, index: number) => (
                                    <div className="catalog-items__item" key={`catalog-item-${index}`}>
                                        <Link to={`${QuizRouter.root}/${item.slug}`}>{item.title}</Link>
                                    </div>
                                ))
                            }
                        </section>
                    </>
                    :
                    <section className="page-section catalog-items">
                        {catalog.map((item: Category, index: number) => (
                            <div className="catalog-items__item" key={`catalog-item-${index}`}>
                                <Link to={`${CatalogRouter.root}/${item.slug}`}>{item.title}</Link>
                            </div>
                        ))}
                        <div className="catalog-items__item">
                            <Link to={`${CatalogRouter.root}/error`}>ERROR LINK</Link>
                        </div>
                    </section>
                }</>
            }
        </div>
    </>);
}
 
export default CatalogPage;