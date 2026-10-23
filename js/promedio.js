function calcular(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
        alert("Ingresa las 3 notas")
    else if (nota1 > 5 || nota2 > 5 || nota3 > 5 || nota1 < 0 || nota2 < 0 || nota3 < 0)
        alert("Solo se admiten notas en un rango de 0 a 5")
    else {
        let promedio = (nota1+nota2+nota3)/3;
        document.getElementById("resultado").value = `${promedio.toFixed(2)}`;
    }
};