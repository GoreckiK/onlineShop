import { Product } from "../store/types";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { ProductSchema } from "./apiTypes";

export const getAllProductsPromise = (): Promise<Product[] | void>  => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
    );

    return mongodb
        .db("shop")
        .collection("products")
        .find()
        .asArray()
        .then(
            // @ts-ignore
            (products: Product[]) => {
            const transformedProducts = products.map(
                (product: Product) => {
                    product._id = product._id.toString();
                    product.sellValue = product.sellValue && product.sellValue.toString();

                    return product;
                }
            );
            
            return transformedProducts;
        })
        .catch((err: Error) => console.error(err));
};

// <Promise<typeof ProductSchema>>