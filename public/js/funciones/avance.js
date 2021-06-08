import Swal from 'sweetalert2';

export const actualizarAvance = () => { // Seleccionar las tareas existentes
    const tareas = document.querySelectorAll('li.tarea');
    if (tareas.length) { // Seleccionar las tareasa completadas
        const tareasCompletas = document.querySelectorAll('i.completo');
        // calcular el vance
        const avance = Math.round((tareasCompletas.length / tareas.length) * 100);

        // mostrar el avance
        const porcentaje = document.querySelector('#porcentaje');
        porcentaje.style.width = avance+'%'

        if(avance === 100){
            Swal.fire(
                'Completaste el Proyecto',
                'Feliciades, has terminado tus tareas',
                'success'
            )
          
        }
}}
