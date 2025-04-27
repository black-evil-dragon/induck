import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


import { CatalogRouter, CatalogAPI } from "..";
import { Catalog } from "../api/types";

import { TaskRouter } from "@pages/task";

import { Loader } from "@shared/Loader";
import { Category } from "@shared/data/catalog";





interface CatalogPageProps {
    
}

 
const CatalogPage: React.FunctionComponent<CatalogPageProps> = () => {
    let { categorySlug } = useParams();
    let navigate = useNavigate();

    const [catalog, setCatalog] = React.useState<Category[]>([])
    const [category, setCategory] = React.useState<Category | null>(null)

    const [isLoading, setLoading] = React.useState<boolean>(true)


    const fetchCatalog = async (slug?: string) => {
        setLoading(true)
        const response = await CatalogAPI.getCatalog({ slug })
        const data = response.data as Catalog
        console.log(data);

        if (response.success && response.code == 200) {

            if (!categorySlug) {
                setCatalog(data.categoryTree)
                setCategory(null)

            } else {
                setCategory(response.data as Category)
            
            }


        } else if (response.success && response.code == 404) {
            navigate('/404')
        }

        setLoading(false)
    }

    React.useEffect(() => {
        
        fetchCatalog(categorySlug)
        
        
    }, [categorySlug])

    React.useEffect(() => {
        
        console.log(catalog);
        
        
    }, [catalog])


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
                    category
                    ? 
                    <>
                        <section>
                            <h2>{category?.title}</h2>
                        </section>
                        <section className="page-section catalog-items">
                            {
                                category.children && category.children.map((item: Category, index: number) => (
                                    <div className="catalog-items__item" key={`catalog-item-${index}`}>
                                        <Link to={`${CatalogRouter.root}/${item.slug}`}>{item.title}</Link>
                                    </div>
                                ))
                            }
                        </section>

                        <section className="page-section">
                            <Link to={`${TaskRouter.getRandomTask}/${category.id}`}>Случайные задание</Link>
                        </section>

                        <section>
                            {
                                category?.selections && category.selections.map((item: Category, index: number) => (
                                    <div className="catalog-items__item" key={`catalog-item-${index}`}>
                                        <Link to={`${TaskRouter.getTaskByID}`}>{item.title}</Link>
                                    </div>
                                ))
                            }
                        </section>
                    </>
                    :
                    <section className="page-section catalog-items">
                        {catalog && catalog.map((item: Category, index: number) => (
                            
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