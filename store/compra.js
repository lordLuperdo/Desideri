import { defineStore } from "pinia";

export const useSellStore = defineStore('sell', ()=>{

const addtocart = (product) => {
    
    
 if(product.cart_cuantity < 1){
   carrito.value.push(product)
   product.cart_cuantity++
   final_price.value += product.price
   console.log( product.cart_cuantity)

 }else{
    product.cart_cuantity++
    final_price.value += product.price  
    console.log( product.cart_cuantity)
 }
}

const deletetocart = (product) => {
    carrito.value = carrito.value.filter(p => p.id !== product.id)
    product.cart_cuantity = 0
    final_price.value -= product.price
    
}

const sumar = (price, cart_cuantity) => {
      final_price.value += price
      cart_cuantity++
      console.log(cart_cuantity)

}


const restar = (prod) => {

   if(prod.cart_cuantity > 1){
     final_price.value -= prod.price
     prod.cart_cuantity--
     
   }else{
      deletetocart(prod)
   }
    
     
}

const carrito = ref([])


const final_price = ref(0)

return {carrito,addtocart,final_price,deletetocart,sumar,restar}
})