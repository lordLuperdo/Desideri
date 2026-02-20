<script setup>
import { NeatGradient} from '@firecms/neat';
import { useProductsStore } from '~/store/productos';
import { useSellStore } from '~/store/compra';
import heads from '~/components/head.vue';
import product_card from '~/components/product_card.vue';

import hero from '~/img/hero.png'


const {choice_cat,products} = useProductsStore()
const sellStore = useSellStore()
const productStore = useProductsStore()

const categories = ["juguetes","disfraces","aceites","","potenciadores","juegos","fragancias"]

const choicen_category = ref("")



const canvasRef = ref(null)
let gradient = null



onMounted(() => {
  gradient = new NeatGradient({
    ref: canvasRef.value,
      colors: [
        {
            color: '#FFF3F3',
            enabled: true,
        },
        {
            color: '#FFCDCD',
            enabled: true,
        },
        {
            color: '#FBDCDC',
            enabled: true,
        },
        {
            color: '#FFEAEA',
            enabled: true,
        },
        {
            color: '#F6FFFF',
            enabled: true,
        },
    ],
    speed: 5,
    horizontalPressure: 4,
    verticalPressure: 2,
    waveFrequencyX: 4,
    waveFrequencyY: 4,
    waveAmplitude: 3,
    shadows: 1,
    highlights: 7,
    colorBrightness: 1,
    colorSaturation: 0,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: '#00A2FF',
    backgroundAlpha: 1,
    grainScale: 36,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 2,
    yOffset: 200.19998168945312,
    yOffsetWaveMultiplier: 20,
    yOffsetColorMultiplier: 0,
    yOffsetFlowMultiplier: 7.8,
    flowDistortionA: 0.4,
    flowDistortionB: 3,
    flowScale: 3.3,
    flowEase: 0.53,
    flowEnabled: true,
    mouseDistortionStrength: 0.12,
    mouseDistortionRadius: 0.25,
    mouseDecayRate: 0.96,
    mouseDarken: 0.24,
    enableProceduralTexture: false,
    textureVoidLikelihood: 0.06,
    textureVoidWidthMin: 10,
    textureVoidWidthMax: 500,
    textureBandDensity: 0.8,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.75,
    proceduralBackgroundColor: '#003FFF',
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
  })
})

onBeforeUnmount(() => {
  if (gradient) gradient.destroy()
})


</script>


<template>
 

   
    <canvas ref="canvasRef" class="gradient-bg"></canvas>



    <heads></heads>
    
    <main class="mt-24 px-5">
        <img :src="hero" alt="">
    </main>
    
    <section class="p-5">
        <div class="imag"><img src="https://firebasestorage.googleapis.com/v0/b/desideri-6e6c2.firebasestorage.app/o/banners%2F101.png?alt=media&token=65e6351a-1169-4717-abf0-fa19edc89193" alt=""></div>
    </section>
    
    <section class="">

        <h2 class="text-5xl pol  font-bold text-center">Categorías</h2>
        <p class="text  font-poppins text-center mt-2">Escoge la categoría que buscas</p>

        <div class=" flex gap-3 flex-wrap justify-center p-3">
            <button @click="choicen_category = 'Aceites' " class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Aceites</button>
            <button @click="choicen_category = 'Potenciadores' " class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Potenciadores</button>
            <button @click="choicen_category = 'Lubricantes' " class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Lubricantes</button>
                        <button @click="choicen_category = 'Juguetes' " class="px-5 min-w-[40%] bg-red-950 rounded-full text-white py-2">Juguetes</button>

            <button @click="choicen_category = '' " class="px-5 min-w-[60%] bg-red-500 rounded-full text-white py-2">Todo</button>
           
        </div>
    </section>

    <section class="">
        
        
        <div class="px-5 flex flex-col gap-2 mt-5" v-if="choicen_category === 'Lubricantes' || choicen_category === ''">
            <h3 class="pol text-center text-5xl ">Lubricantes</h3>
     <product_card
     v-for="product in productStore.products.filter(p => p.category === 'Lubricantes')"
     :key="product"
     :name="product.name"
     :description="product.description"
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="sellStore.addtocart(product)"
     @del="sellStore.restar(product)"
     ></product_card>

        </div>

         <div class="px-5 flex flex-col gap-2 mt-5" v-if="choicen_category === 'Potenciadores' || choicen_category === ''">
            <h3 class="pol text-center text-5xl">Poteciadores</h3>
     <product_card
     v-for="product in productStore.products.filter(p => p.category === 'Potenciadores')"
     :key="product"
     :name="product.name"
     :description="product.description"
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="sellStore.addtocart(product)"
     @del="sellStore.restar(product)"
     ></product_card>

        </div>

        <div class="px-5 flex flex-col gap-2 mt-5" v-if="choicen_category === 'Aceites' || choicen_category === ''">
            <h3 class="pol text-center text-5xl">Aceites</h3>
     <product_card
     v-for="product in productStore.products.filter(p => p.category === 'Aceites')"
     :key="product"
     :name="product.name"
     :description="product.description"
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="sellStore.addtocart(product)"
     @del="sellStore.restar(product)"
     ></product_card>

        </div>

         <div class="px-5 flex flex-col gap-2 mt-5 mb-10" v-if="choicen_category === 'Juguetes' || choicen_category === ''">
            <h3 class="pol text-center text-5xl">Juguetes</h3>
     <product_card
     v-for="product in productStore.products.filter(p => p.category === 'Juguetes')"
     :key="product"
     :name="product.name"
     :description="product.description"
     :id="product.id"
     :price="product.price"
     :cuantity="product.cart_cuantity"
     @add="sellStore.addtocart(product)"
     @del="sellStore.restar(product)"
     ></product_card>

        </div>
    
        


    </section>

    

   
    

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap');

.pol {
  font-family: "Poltawski Nowy", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}


.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; 
}
</style>