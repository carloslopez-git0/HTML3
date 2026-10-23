function sumar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let suma = n1 + n2;

    document.getElementById("resultado1").value = `${suma}`;
};

function restar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resta = n1 - n2;

    document.getElementById("resultado1").value = `${resta}`;
};

function multiplicar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let multiplicacion = n1 * n2;

    document.getElementById("resultado1").value = `${multiplicacion}`;
};

function dividir(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    if (n2 === 0){
        alert("No se puede dividir por cero");
        return;
    }
    let division = n1 / n2;

    document.getElementById("resultado1").value = `${division}`;
};