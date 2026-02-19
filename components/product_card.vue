<script setup>


defineProps(["name","description","price","id","cuantity"])

const emits = defineEmits(["add","del"])

const add = ()=> {
  emits('add')
}



const del = ()=>{
    emits ("del")
}



</script>

<template>

<div class="p-2 border-[1px] border-red-700 rounded-lg bg-white/30 backdrop-blur-lg">
    <div class="flex gap-2 items-center">
       <div class="max-w-[30%] overflow-hidden rounded-lg">        
        <img class="max-w-full" :src="`https://firebasestorage.googleapis.com/v0/b/desideri-6e6c2.firebasestorage.app/o/productos%2F${id}.png?alt=media&token=96095759-def0-4699-85e7-2279dfe6a61d`" alt="" >
       </div>
        <div class="">
            <div class="">
                <span class="pol text-2xl">{{ name }}</span>
                <p class="font-poppins">{{ description }}</p>
            </div>
            <div class="flex w-full gap-5 justify-between items-center">
                <span class="text-xl font-poppins font-bold text-red-500">${{ price }}</span>
                <button v-if="cuantity < 1" class=" bg-red-700 rounded-full w-full font-poppins text-white font-semibold" @click="add" >Al carrito </button>
                <div v-if="cuantity >= 1" class="bg-red-100 flex gap-6 rounded-full p-2 ">
                    <button @click="del" class="text-white p-2 bg-red-700 rounded-full h-7 w-7 flex justify-center items-center font-extrabold ">-</button>
                    {{ cuantity }}
                    <button @click="add" class="text-white p-2 bg-red-700 rounded-full h-7 w-7 flex justify-center items-center font-extrabold ">+</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>