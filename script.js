var pendientes = [
    {descripcion: "Tarea de Agenda de JS", completado: false},
    {descripcion: "Comer", completado: false},
    {descripcion: "Dormir",completado: true},
    {descripcion: "Cortarse el pelo", completado: false}
];
function imprimirPendientes(pendiente, index){
    var lista= document.getElementById("lista");
    lista.insertAdjacentHTML('beforeend',
    `<li `+ estaCompletado(pendiente.completado) + ` onClick="marcarCompletado(` + index + `)">
    <div class="checkbox"><i class="fa fa-check"></i></div>
    <div class="descripcion">` + pendiente.descripcion + `</div>
    <i class="fa fa-times" onclick="eliminarPendiente(`+index+`)"><i>
    </li>`
    );
}
function eliminarPendiente(index){
    pendientes.splice(index, 1);
    imprimirTodosLosPendientes();
}
function estaCompletado(completado){
    if(completado){
        return 'class="done pendiente"';
    }else{
        return 'class = "pendiente"';
    }
}
function marcarCompletado(index){
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodosLosPendientes();
}
function imprimirTodosLosPendientes(){
    document.getElementById("lista").innerHTML ="";
    pendientes.forEach(imprimirPendientes);
}
function agregarPendiente(){
    var pendiente = document.getElementById("item").value;
    pendientes.push({descripcion: pendiente, completado: false});
    imprimirTodosLosPendientes();
}
pendientes.forEach(imprimirPendientes);