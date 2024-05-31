import {defineStore} from "pinia";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useProductsStore = defineStore({
    id: 'productsStore',
    state: () => ({
        products: [],
    }),
    actions:{
        async fetchProducts(){
            await axios(`${BASE_URL}/allposts/`)
                .then(res => this.products = res.data)
                .catch(err => console.log(err));
        }
    }
})