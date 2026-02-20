import { defineStore } from "pinia";

export const useProductsStore = defineStore('productos', ()=> {
 
  const products = [
 
  
  {
    id:104,
    name:"Lubricante Íntimo Chocolate",
    price:30000,
    description:"Lubricante Íntimo Chocolate Sensación Caliente x 30 ml",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:105,
    name:"Lubricante Íntimo Lychee",
    price:30000,
    description:"Lubricante Íntimo Lychee Sensación Caliente x 30 ml",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:106,
    name:"Lubricante multiorgasmos",
    price:40000,
    description:"Lubricante Íntimo Multiorgasmos x 30 ml by Sen Íntimo",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:107,
    name:"Lubricante Íntimo Neutro",
    price:30000,
    description:" Lubricante Neutro x250 ml. Formulado a base de agua ofrece una lubricación duradera.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:108,
    name:"Garganta Profunda",
    price:30000,
    description:"spray desensibilizante adormece ligeramente la parte posterior de la garganta y suprime el reflejo nauseoso.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:109,
    name:"Lubricante Tequila Sensación Caliente",
    price:30000,
    description:"Aumenta tu sensibilidad intensificando tus sensaciones con nuestro exquisito y provocativo Lubricante íntimo con sabor a tequila",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:110,
    name:"Lubricante Anal Desensibilizante 10 ml",
    price:30000,
    description:"Garantiza una relajación de la zona y una óptima lubricación.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:111,
    name:"Lubricante Íntimo Anal Desensibilizante 30 ml",
    price:30000,
    description:"Garantiza una relajación de la zona y una óptima lubricación.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:112,
    name:"Lubricante Íntimo Caramelo",
    price:30000,
    description:"Experimenta un calor emocionante y delicioso sabor. Usa en la zona íntima o en el preservativo estimula frota o sopla para sentir el calor.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:113,
    name:"Retardante Stud Spray",
    price:30000,
    description:"formulado para ayudarte a prolongar los momentos de placer y retrasar la eyaculación de forma segura y efectiva.",
    inventary:"",
    category:"Potenciadores",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:114,
    name:"Lubricante Estrechante",
    price:30000,
    description:"Sentirás la sensación de contracción del conducto vaginal permitiéndote a ti y a tu pareja disfrutar de mayor contacto",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:115,
    name:"Multiorgasmos Euforia",
    price:30000,
    description:"Relaja suaviza lubrica y enciende. Dile adiós a la incomodidad y hola al placer consciente.",
    inventary:"",
    category:"Potenciadores",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:116,
    name:"Aceite Corporal Euforia",
    price:30000,
    description:"Su textura ligera y su efecto reconfortante lo hacen ideal para masajes que ayudan a relajar el cuerpo y brindar una sensación confortable durante la aplicación.",
    inventary:"",
    category:"Aceites",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:117,
    name:"Lubricante Anal Electrizante",
    price:30000,
    description:"Garantiza una relajación de la zona y una óptima lubricación, además de proporcionar una sensación electrizante para mayor excitación y placer.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:118,
    name:"Aceite Sensual para Masajes",
    price:30000,
    description:"Con base acuosa y soluble en agua este aceite no mancha ni deja residuos proporcionando un masaje suave y placentero. Es fácil de aplicar y no requiere jabón.",
    inventary:"",
    category:"Aceites",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:119,
    name:"Kit de Lubricantes Salva Vidas",
    price:30000,
    description:"Disfruta de todos los placeres en un solo lugar.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:120,
    name:"Sensual para Masajes Passion",
    price:30000,
    description:"Diseñado para ofrecer un masaje tibio y excitante este aceite acuoso y soluble en agua te transportará a nuevas alturas de placer.",
    inventary:"",
    category:"Aceites",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:121,
    name:"Lubricante Íntimo Estrechante",
    price:30000,
    description:"Redescubre la intensidad del placer con nuestro gel vaginal estrechante, diseñado para brindar una sensación de mayor estrechez.",
    inventary:"",
    category:"Lubricantes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:122,
    name:"Gummies Vi King Fresa",
    price:30000,
    description:"Con esta tanga comestible y pezones de corazones en gonita, tu pareja podrá disfrutar saboreando la deliciosa lenceria comestible, hasta el último bocado.",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:123,
    name:"Lubricante Frambuesa + Dados Eróticos",
    price:30000,
    description:"utilizado para complementar los fluidos lubricantes naturales del cuerpo, para mejorar la facilidad y la comodidad de la actividad sexual. aplicar sobre el área deseada o sobre el preservativo.",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:124,
    name:"Gummies Vi King Manzana Verde",
    price:30000,
    description:"Con esta tanga comestible y pezones de corazones en gonita, tu pareja podrá disfrutar saboreando la deliciosa lenceria comestible, hasta el último bocado.",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:125,
    name:"Bala Vibradora Speed a Control Remoto",
    price:30000,
    description:"Cuenta con 9 modos de vibración ajustables para que encuentres tu ritmo ideal.",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  {
    id:126,
    name:"Anillos Donas x 3 Ud",
    price:30000,
    description:"Estos anillos se deslizan fácilmente sobre un miembro y crean una experiencia comestible deliciosa.",
    inventary:"",
    category:"Juguetes",
    cart_cuantity:0,
    search_words:""
  },
  
  
 ]

 const banners = [
    {
        id:100,
        products:""
    }
 ]

 const choicen_category = ref("")

 const filter_prod = computed(()=>products.filter(p => p.category.includes(choicen_category.value)))

 const choice_cat = (cat) => {
      choicen_category.value = cat
    
 }


 return {products,banners,choicen_category, filter_prod, choice_cat}
})