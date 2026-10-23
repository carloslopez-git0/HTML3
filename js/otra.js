function calcular() {
    let invitados = parseInt(document.getElementById("invitados").value) || 0;
    let costoComida = parseFloat(document.getElementById("comida").value) || 0;
    let costoBebida = parseFloat(document.getElementById("bebida").value) || 0;
    let decoracion = parseFloat(document.getElementById("decoracion").value) || 0;
    let musica = parseFloat(document.getElementById("musica").value) || 0;
    let propinaPct = parseFloat(document.getElementById("propina_pct").value) || 0;

    if (invitados <= 0) {
        alert("Por favor ingresa un número de invitados válido.");
        return;
    }

    let comidaTotal = invitados * costoComida;
    let bebidaTotal = invitados * costoBebida;
    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    let propina = subtotal * (propinaPct / 100);
    let totalGeneral = subtotal + propina;
    let costoPorInvitado = totalGeneral / invitados;

    document.getElementById("res_comida").textContent = `${comidaTotal.toLocaleString('es-CO')}`;
    document.getElementById("res_bebida").textContent = `${bebidaTotal.toLocaleString('es-CO')}`;
    document.getElementById("res_decoracion").textContent = `${decoracion.toLocaleString('es-CO')}`;
    document.getElementById("res_musica").textContent = `${musica.toLocaleString('es-CO')}`;
    document.getElementById("res_subtotal").textContent = `${subtotal.toLocaleString('es-CO')}`;
    document.getElementById("res_propina").textContent = `${propina.toLocaleString('es-CO')}`;
    document.getElementById("res_total").textContent = `${totalGeneral.toLocaleString('es-CO')}`;
    document.getElementById("res_costo_invitado").textContent = `${costoPorInvitado.toLocaleString('es-CO')}`;
}