import { defineStore } from "pinia";

export const useProductsStore = defineStore('productos', ()=> {
 
  const products = [
  {
    id:100,
    name:"aceite machungo",
    price:300000,
    description:"Este aceite viene del Quindio y es muy rico cuando se lame",
    inventary:"",
    category:"Aceites",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:101,
    name:"esposa",
    price:200000,
    description:"Este aceite viene del Quindio y es muy rico cuando se lame",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:102,
    name:"vestido de caperucita",
    price:100000,
    description:"Este aceite viene del Quindio y es muy rico cuando se lame",
    inventary:"",
    category:"Disfraces",
    cart_cuantity:0,
    search_words:""
  },
  
 ]

 const banners = [
    {
        id:100,
        products:""
    }
 ]

 const choicen_category = ref("")

 const filter_prod = computed(()=>products.filter(p => p.category.includes(choicen_category.value)))

 const choice_cat = (cat) => {
      choicen_category.value = cat
    
 }


 return {products,banners,choicen_category, filter_prod, choice_cat}
})