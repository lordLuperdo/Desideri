<script setup>

const props = defineProps(["status"])


</script>

<template>
    <div v-if="status" class="fixed top-0 z-50 p-40 bg-black/30 backdrop-blur-2xl w-full h-full flex justify-center items-center">
        <div class="flex flex-col bg-white w-full h-full p-10">
            <div class="flex justify-end w-full">
                <div @click="status = false" class=" bg-red-700 text-white font-bold w-40 h-8 text-center items-center left-1/2 right-1/2  justify-center rounded-full flex  font-poppins"><span class="px-4">x Cerrar</span></div>
            </div>
            
        </div>
    </div>
</template>