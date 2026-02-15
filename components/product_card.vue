<script setup>


defineProps(["name","description","price"])

const emits = defineEmits(["add","del"])

const add = ()=> {
  emits('add')
}

const del = ()=>{
    emits ("del")
}



</script>

<template>

<div class="">
    <div class="">
        <img src="" alt="" class="">
        <div class="">
            <div class="">
                <span class="">{{ name }}</span>
                <p class="">{{ description }}</p>
            </div>
            <div class="">
                <span class="}">{{ price }}</span>
                <button class="bg-red-400" @click="add" >Al carrito </button>
                <button class="bg-blue-400" @click="del" >eliminar </button>
            </div>
        </div>
    </div>
</div>

</template>