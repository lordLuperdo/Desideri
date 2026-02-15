<script setup>
import { useProductsStore } from '~/store/productos';

const {products} = useProductsStore()

const buscador = ref("")

const buscador_sugerencias = computed(()=>
products.filter(p => p.name.toLowerCase().includes(buscador.value.toLowerCase()))
)



</script>

<template>
    <header class="bg-black">
          
        <div class="bg-red-300">
            <span class="">¿Buscas algo especial?</span>
            <input type="text" name="" class="" id="" placeholder="buscar" v-model="buscador">
        </div>

        <div class="">
            <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><!-- Icon from Clarity by VMware - https://github.com/vmware/clarity-assets/blob/master/LICENSE --><circle cx="13.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"/><circle cx="26.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M33.1 6.39a1 1 0 0 0-.79-.39H9.21l-.45-1.43a1 1 0 0 0-.66-.65L4 2.66a1 1 0 1 0-.59 1.92L7 5.68l4.58 14.47l-1.63 1.34l-.13.13A2.66 2.66 0 0 0 9.74 25A2.75 2.75 0 0 0 12 26h16.69a1 1 0 0 0 0-2H11.84a.67.67 0 0 1-.56-1l2.41-2h15.43a1 1 0 0 0 1-.76l3.2-13a1 1 0 0 0-.22-.85" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
        </div>

    </header>
    
    {{ buscador_sugerencias }}
</template>