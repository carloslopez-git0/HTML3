function calcular(){
    let nombre=document.getElementById("producto").value;
    let cantidad=parseInt(document.getElementById("cantidad").value);
    let precio_u=parseFloat(document.getElementById("precio").value);

    let subtotal=cantidad*precio_u;
    document.getElementById("subtotal").value=`${subtotal.toLocaleString('es-CO')}`;

    let iva=subtotal*0.19;
    document.getElementById("iva").value=`${iva.toLocaleString('es-CO')}`;

    let descuento=0;
    if (cantidad>10){
        descuento=subtotal*0.10;
    }
    document.getElementById("descuento").value=`${descuento.toLocaleString('es-CO')}`;

    let total=subtotal+iva-descuento;
    document.getElementById("total").value=`${total.toLocaleString('es-CO')}`;
};