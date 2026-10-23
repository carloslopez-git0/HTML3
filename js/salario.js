function calcular(){
    let horas = parseFloat(document.getElementById("horas").value);
    let valor = parseFloat(document.getElementById("valor").value);
    let horas_extra = 0;
    let valor_extra = 0;
    if (horas > 8){
        horas_extra = horas - 8
        valor_extra = valor * 0.20
    };
    let resultado = (horas*valor)+(horas_extra*valor_extra);
    document.getElementById("resultado").value = `${resultado.toLocaleString('es-CO')}`;
};