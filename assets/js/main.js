$(document).ready(function () {
    
    let checkbox = ($("form input"))
    let objeto = new Set()
    let mapa = new Map()
    

    checkbox.on("change", function(){

        let id = $(this).val()
        let tarea = $(this).siblings().val()
        if($(this).is(":checked") && $(this).siblings().val()){
            agregarSet(id, tarea)
            subrayar($(this).siblings())
            mapear(id, tarea)
            }
        else{
            eliminarSet(id)
            destachar($(this).siblings())
            eliminarMap(id)
        }
        console.log(objeto)
        console.log(mapa)
    })
    
function agregarSet(id, tarea){
    objeto.add({id, tarea})
}

function eliminarSet(id) {
    objeto.forEach(function(item) {
        if (item.id === id) {
            objeto.delete(item);
        }
    })
}
    

function subrayar (tarea){
    tarea.css("text-decoration", "line-through")
}

function destachar(tarea){
    tarea.css("text-decoration", "none")
}

function mapear(id, tarea){
    mapa.set(id, tarea)
}

function eliminarMap(id) {
    mapa.forEach((valor, clave) => {
      if (clave === id) {
        mapa.delete(clave);
      }
    });
  }



});