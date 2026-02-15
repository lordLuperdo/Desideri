<script setup>
import { useSellStore } from '~/store/compra';
import { enviar_carrito } from '~/logic/sendsell'; 

const SellStore = useSellStore()

const cart = SellStore.carrito


</script>
<template>

<div class="">
    <h3 class="">Revisa tu compra</h3>
    <p class="">Aquí están los productos que escogiste</p>
    <div class=""></div>
    <button class="bg-blue-500" @click="enviar_carrito(SellStore.final_price,SellStore.carrito)">Finalizar compra</button>
</div> 

</template>
