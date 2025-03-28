function mostrarDetalle(imagen, descripcion) {
    document.getElementById('imagen-detalle').src = `assets/${imagen}`;
    document.getElementById('descripcion').innerText = descripcion;
}

document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente');
});
