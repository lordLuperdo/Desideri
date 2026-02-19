<script setup>
import { useProductsStore } from '~/store/productos';
import product_card from './product_card.vue';

productStore = useProductsStore()

</script>

<template>

    

    <h3 class="">
     {{ category }}   
    </h3>

    



    
</template>