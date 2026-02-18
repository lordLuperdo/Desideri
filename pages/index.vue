<script setup>
import { useProductsStore } from '~/store/productos';
import { useSellStore } from '~/store/compra';
import heads from '~/components/head.vue';
import product_card from '~/components/product_card.vue';
import cart from '~/components/cart.vue';
import hero from '~/img/hero.png'

const {products,choice_cat} = useProductsStore()
const sellStore = useSellStore()
const productStore = useProductsStore()

const categories = ["juguetes","disfraces","aceites",""]

const choicen_category = ref("")
</script>


<template>
    <heads></heads>
    
    <main class="mt-24 px-5">
        <img :src="hero" alt="">
    </main>
    
    <section class="p-5">
        <div class="imag"><img src="https://firebasestorage.googleapis.com/v0/b/desideri-6e6c2.firebasestorage.app/o/banners%2F101.png?alt=media&token=65e6351a-1169-4717-abf0-fa19edc89193" alt=""></div>
    </section>
    
    <section class="">

        <h2 class="text-5xl pol  font-bold text-center">Categorías</h2>
        <p class="text  font-poppins text-center mt-2">Escoge la categoría que buscas</p>

        <div class=" flex gap-3 flex-wrap justify-center p-3">
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Aceites</button>
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Potenciadores</button>
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Juguetes</button>
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Disfraces</button>
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Juegos</button>
            <button class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Fragancias</button>
        </div>
    </section>

    <section class="">
        <div class="">
            <h2 class=""></h2>
            <div class="relative">
                <div class="star"></div>
                <div class="categories">
                    <button class="">precio</button>
                    <button class=""></button>
                    <button></button>
                </div>
                <button class="">Ordenar por</button>
            </div>
        </div>
        
        <div class="px-5 flex flex-col gap-2">
     <product_card
     v-for="product in products"
     :key="product"
     :name="product.name"
     :description="product.description"
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="sellStore.addtocart(product)"
     @del="sellStore.deletetocart(product)"
     ></product_card>

        </div>
    
        


    </section>

    {{ sellStore.carrito.length>0 ? sellStore.carrito : "Carrito vacio" }}

    <cart></cart>
    -------------------------------------------------------------------------------------------------

    <button class="border-2 border-emerald-400" @click="choice_cat(categories[0])">Juguetes</button>
    <button class="border-2 border-emerald-400" @click="choice_cat(categories[1])">Disfraces</button>
    <button class="border-2 border-emerald-400" @click="choice_cat(categories[2])">Aceites</button>
    <button class="border-2 border-emerald-400" @click="choice_cat(categories[3])">todo</button>

     
    {{ productStore.filter_prod }}
    

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap');

.pol {
  font-family: "Poltawski Nowy", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>