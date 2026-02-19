<script setup>
import { useSellStore } from '~/store/compra';
import { enviar_carrito } from '~/logic/sendsell'; 
import product_card from './product_card.vue';

const props = defineProps(["active"])

const SellStore = useSellStore()

const cart = SellStore.carrito


</script>
<template>

<div v-if="active" class="  rounded-r-3xl rounded-l-3xl border-red-500 border-t-[1px] flex gap-2 flex-col bg-white/20 w-full back backdrop-blur-md fixed z-50 bottom-0 p-10">
    <h3 class="pol text-4xl text-center">Revisa tu compra</h3>
    <p class="text-center font-poppins">Aquí están los productos que escogiste</p>
    <div class=""></div>
    <div class="flex-col flex bg-white/60 rounded-lg h-40 overflow-scroll p-3 gap-2">
        <span class="font-poppins font-semibold items-center pt-16 justify-center flex h-full text-red-700" v-if="SellStore.carrito.length === 0">Carrito vacio</span>
        
        <product_card

        v-if="cart.length > 0" 

     v-for="product in cart"
     :key="product"
     :name="product.name"
    
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="SellStore.addtocart(product)"
     @del="SellStore.restar(product)"
     ></product_card>

    </div>
    <span class="text-xl font-poppins font-bold text-center text-red-700">total ${{ SellStore.final_price }}</span>
    <button class="bg-red-700 text-white p-1 rounded-full font-poppins" @click="enviar_carrito(SellStore.final_price,SellStore.carrito)">Finalizar compra</button>
</div> 

</template>
