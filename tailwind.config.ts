/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './components/**/*.{vue,js}',  
      './layouts/**/*.vue',          
      './pages/**/*.vue',            
      './plugins/**/*.{js,ts}',      
      './nuxt.config.{js,ts}', 
    ],
    theme: {
      
       screens: {
      
      'sm': '470px', 
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px', 
    },
    
    extend: {
      fontFamily:{
        poppins:["poppins",'sans-serif'],
        titulo:["PoltawskiNowy",'serif']
      }
    }
  
  }

}
    