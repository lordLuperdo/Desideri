<script setup>
import { useProductsStore } from '~/store/productos';
import { useSellStore } from '~/store/compra';
import heads from '~/components/head.vue';
import product_card from '~/components/product_card.vue';
import cart from '~/components/cart.vue';

const {products} = useProductsStore()
const sellStore = useSellStore()
const productsStore = useProductsStore()

const choicen_category = ref("")
</script>


<template>
    <heads></heads>
    <main class=""><img src="" alt=""></main>
    
    <section class="">
        <div class="imag"><img src="" alt=""></div>
    </section>
    
    <section class="">
        <div class="">
            <button class="">Aceites</button>
            <button class="">Juguetes</button>
            <button class="">Disfraces</button>
            <button class="">Potenciadores</button>
            <button class="">Juegos</button>
            <button class="">Fragancias</button>
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
        
     <product_card
     v-for="product in products"
     :key="product"
     :name="product.name"
     :description="product.description"
     :price="product.price"
     @add="sellStore.addtocart(product)"
     @del="sellStore.deletetocart(product)"
     ></product_card>
        


    </section>

    {{ sellStore.carrito.length>0 ? sellStore.carrito : "Carrito vacio" }}

    <cart></cart>
    -------------------------------------------------------------------------------------------------

    
    

</template>