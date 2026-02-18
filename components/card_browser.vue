<script setup>
const props = defineProps(["name","id"])
</script>
<template>
<div class="bg-white p-2 flex gap-3 rounded-lg c shadow-lg justify-center items-center">

    <div class="rounded-lg overflow-hidden w-[50%]">
       <img :src="`https://firebasestorage.googleapis.com/v0/b/desideri-6e6c2.firebasestorage.app/o/productos%2F${id}.png?alt=media&token=96095759-def0-4699-85e7-2279dfe6a61d`" alt="" class="rounded-lg">
    </div>
    
    <span class="min-w-[40%] text-center ">{{ name }}</span>
    <button class="bg-red w-full rounded-full max-h-10 text-red-400  font-semibold  shadow-sm shadow-rose-950 bg-red-100 border-red-200 border-2" @click="">Ver más</button>
</div>
</template>