AOS.init();

function enviarPedido() {
    alert('¡Tu pedido ha sido registrado!');
    document.getElementById('form-pedido').reset();
} //enviarPedido

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else enviarPedido()
  
          form.classList.add('was-validated')
        }, false)
      })
})()

//DataTable
$('.tabla').DataTable({
    retrieve: true,
    language: {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrando _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados.",
        "sEmptyTable":     "Ningún dato disponible en esta tabla.",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros.",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros.",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    }
});