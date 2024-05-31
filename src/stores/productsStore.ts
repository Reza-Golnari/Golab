import {defineStore} from "pinia";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface IProduct {
    id: number,
    title: string,
    caption: string,
    price: string,
    src: string,
}

interface IProducts {
    products: [] | IProduct[],
}

export const useProductsStore = defineStore({
    id: 'productsStore',
    state: () : IProducts => ({
        products: [],
    }),
    actions:{
        async fetchProducts(){
            await axios(`${BASE_URL}/allposts/`)
                .then(res => this.products = res.data)
                .catch(err => console.error(err));
            this.products.map(product => product.src = BASE_URL + product.src)
        }
    }
})