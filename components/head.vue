<script setup>
import { useProductsStore } from '~/store/productos';
import { useSellStore } from '~/store/compra';
import card_browser from './card_browser.vue';
import cart from './cart.vue';
import popUp from './pop-up.vue';
import PopUp from './pop-up.vue';

const {products} = useProductsStore()
const sell = useSellStore()

const buscador = ref("")

const buscador_sugerencias = computed(()=>
products.filter(p => p.name.toLowerCase().includes(buscador.value.toLowerCase()))
)

const active = ref(false)
const active_cart = ref(false)

const change_status = ()=>{
    if(active_cart.value == false){
        active_cart.value = true
        
    }else{
        active_cart.value = false
        
    }
    
}



</script>

<template>

    <pop-up></pop-up>

    <header class=" flex items-center gap-3 fixed top-3 p-2 w-full lg:px-64 justify-center z-40 px-5 ">
          

        <cart
        :active="active_cart"
        @exit="change_status"
        ></cart>

        <div class="bg-red-700/30 backdrop-blur-sm rounded-full p-2 flex justify-between w-[90%] relative items-center md:gap-7">
            <span class="ml-5 hidden md:block w-[30%] font-poppins text-white font-medium text-center"><p class="">¿Buscas algo especial?</p></span>
            <input @focus="active=true" @blur="active=false" type="text" class="hidden w-[70%] md:block rounded-full p-2 px-4" placeholder="buscar" v-model="buscador">
            <input @focus="active=true" @blur="active=false" type="text" class="md:hidden w-full rounded-full p-1 px-4" placeholder="¿Buscas algo especial?" v-model="buscador">
        
            <div v-if="active" class="bg-red-700/30 backdrop-blur-sm absolute left-0 top-[120%] flex flex-col gap-3  rounded-lg bg-re p-3 w-[50vh] ">
             <card_browser 
             v-for="product in buscador_sugerencias.splice(0,3)"
             :key="product"
             :id="product.id"
             :name="product.name"
             ></card_browser>

                         <span  class=" flex font-poppins font-semibold text-center text-red-700 text-xl bg-white p-3 rounded-md" v-if="buscador_sugerencias.length < 1">No se encontraron sugerencias</span>
                   
            </div>


        </div>

        <button @click="change_status" class=" bg-red-700/30 backdrop-blur-sm rounded-full p-2 relative">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36"><!-- Icon from Clarity by VMware - https://github.com/vmware/clarity-assets/blob/master/LICENSE --><circle cx="13.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"/><circle cx="26.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M33.1 6.39a1 1 0 0 0-.79-.39H9.21l-.45-1.43a1 1 0 0 0-.66-.65L4 2.66a1 1 0 1 0-.59 1.92L7 5.68l4.58 14.47l-1.63 1.34l-.13.13A2.66 2.66 0 0 0 9.74 25A2.75 2.75 0 0 0 12 26h16.69a1 1 0 0 0 0-2H11.84a.67.67 0 0 1-.56-1l2.41-2h15.43a1 1 0 0 0 1-.76l3.2-13a1 1 0 0 0-.22-.85" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            <div v-if="sell.carrito.length>0" class="absolute bg-red-700 text-white flex p-2 w-5 h-5 justify-center items-center rounded-full top-0 right-0 text-sm"> {{ sell.carrito.length }}</div>
        </button>

    </header>
    
</template>