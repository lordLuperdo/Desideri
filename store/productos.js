import { defineStore } from "pinia";

export const useProductsStore = defineStore('productos', ()=> {
 
  const products = [
  {
    id:100,
    name:"aceite machungo",
    price:300,
    description:"",
    inventary:"",
    category:"",
    cart_cuantity:0,
  },
  {
    id:101,
    name:"esposa",
    price:200,
    description:"",
    inventary:"",
    category:"",
    cart_cuantity:0,
  },
  {
    id:102,
    name:"aceite indico",
    price:100,
    description:"",
    inventary:"",
    category:"",
    cart_cuantity:0,
  },
  
 ]

 const banners = [
    {
        id:100,
        products:""
    }
 ]

 const choicen_category = ref("")

 const filter_prod =  products.filter(p => p.category.includes(choicen_category.value))



 return {products,banners,choicen_category, filter_prod}
})