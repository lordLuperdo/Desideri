import { defineStore } from "pinia";

export const useSellStore = defineStore('sell', ()=>{

const addtocart = (product) => {
    
    
 if(product.cart_cuantity < 1){
   carrito.value.push(product)
   product.cart_cuantity++
   final_price.value += product.price

 }else{
    product.cart_cuantity++
    final_price.value += product.price  
 }
}

const deletetocart = (product) => {
    carrito.value = carrito.value.filter(p => p.id !== product.id)
    product.cart_cuantity = 0
    final_price.value -= product.price
    
}

const sumar = (prod) => {final_price += prod.price}


const restar = (prod) => {
   prod.cart_cuantity >1 ? final_price -= prod.price : deletetocart(prod)
}

const carrito = ref([])


const final_price = ref(0)

return {carrito,addtocart,final_price,deletetocart,sumar,restar}
})