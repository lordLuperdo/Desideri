<script setup>
import { useProductsStore } from '~/store/productos';
import card_browser from './card_browser.vue';

const {products} = useProductsStore()

const buscador = ref("")

const buscador_sugerencias = computed(()=>
products.filter(p => p.name.toLowerCase().includes(buscador.value.toLowerCase()))
)



</script>

<template>
    <header class=" flex items-center gap-3 fixed top-3 p-2 w-full justify-center z-10 px-5">
          

        

        <div class="bg-red-700/30 backdrop-blur-sm rounded-full p-3 flex flex-col w-[90%] relative">
            <span class="hidden ">¿Buscas algo especial?</span>
            <input type="text" class="hidden md:block rounded-full p-2 px-4" placeholder="buscar" v-model="buscador">
            <input type="text" class="md:hidden rounded-full p-2 px-4" placeholder="¿Buscas algo especial?" v-model="buscador">
        
            <div class=" hidden absolute left-0 top-[120%] flex flex-col gap-3  rounded-lg bg-re p-3 w-[50vh] back backdrop-opacity-85 bg-red-600/30 backdrop-blur">
             <card_browser 
             v-for="product in buscador_sugerencias"
             :key="product"
             :id="product.id"
             :name="product.name"
             ></card_browser>
            </div>
        </div>

        <div class="bg-red-700/30 backdrop-blur-sm rounded-full p-4">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><!-- Icon from Clarity by VMware - https://github.com/vmware/clarity-assets/blob/master/LICENSE --><circle cx="13.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"/><circle cx="26.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M33.1 6.39a1 1 0 0 0-.79-.39H9.21l-.45-1.43a1 1 0 0 0-.66-.65L4 2.66a1 1 0 1 0-.59 1.92L7 5.68l4.58 14.47l-1.63 1.34l-.13.13A2.66 2.66 0 0 0 9.74 25A2.75 2.75 0 0 0 12 26h16.69a1 1 0 0 0 0-2H11.84a.67.67 0 0 1-.56-1l2.41-2h15.43a1 1 0 0 0 1-.76l3.2-13a1 1 0 0 0-.22-.85" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
        </div>

    </header>
    
</template>