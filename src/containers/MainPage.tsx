import React, { useState, useEffect } from "react";
import "../styles/MainPage.scss";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import ProductTile from "../components/ProductTile";
import { getAllProductsPromise } from "../database/api";
import { Product } from "../store/types";

const MainPage = () => {
    const [menuCategory, setMenuCategory] = useState("");
    const [menuCategories, setMenuCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const onChangeMenuCategory = (category: React.ReactText) => {
        console.log(category);
        setMenuCategory(category.toString());
    };

    const firstCapitalLetter = (word: string) => {
        const firstLetter = word.slice(0, 1).toUpperCase();

        return `${firstLetter}${word.slice(1)}`;
    };

    useEffect(() => {
        const productsFetch = async () => {
            // @ts-ignore
            const apiProducts: Parameters[] = await getAllProductsPromise();
            // @ts-ignore
            setProducts(apiProducts);
            const categories: string[] = apiProducts.map((product) => {
                if (product.additionalInformation !== "uncategorised")
                    return product.category;
                else return "";
            });
            // @ts-ignore
            setMenuCategories([...new Set(categories)]);
        };

        productsFetch();
    }, []);

    useEffect(() => {
        menuCategories[0] && setMenuCategory(firstCapitalLetter(menuCategories[0]));
    }, [menuCategories]);

    return (
        <div className="main-page">
            <Menu
                mode="inline"
                style={{ width: 256 }}
                onClick={({ key }) => onChangeMenuCategory(key)}
            >
                {menuCategories.map((category) => {
                    return (
                        <Menu.Item key={category}>
                            {firstCapitalLetter(category)}
                        </Menu.Item>
                    );
                })}
            </Menu>
            <div className="items-container">
                {products.map((product: Product) => {
                    return (
                        product.category === menuCategory && (
                            <ProductTile
                                key={product._id}
                                productInfo={{
                                    sellValue: product.sellValue,
                                    name: product.name,
                                    category: product.category,
                                    pcsAvailable: product.pcsAvailable,
                                    _id: product._id,
                                }}
                            ></ProductTile>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default MainPage;
