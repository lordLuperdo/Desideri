export const enviar_carrito= (total_price,prod_list)=> {
    let mensaje = `Hola, estoy interesado en hacer un pedido para Desideri. Aquí están los detalles de mi carrito:\n\n`;
    
    prod_list.forEach(prod => {
        mensaje+= `- ${prod.name}: $${prod.price}\n`;
    });

    mensaje += `\nTotal: $${total_price}`;
    const enlace = `https://wa.me/3103213718?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, '_blank')
}