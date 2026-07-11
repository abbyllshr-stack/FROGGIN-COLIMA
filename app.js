const MODULOS = [

    {
        nombre:"📷 Pickup",
        descripcion:"Entrega de alumnos",
        id:"pickup"
    },

    {
        nombre:"📅 Asistencia",
        descripcion:"Control de asistencia",
        id:"asistencia"
    },

    {
        nombre:"👩‍🏫 Teachers",
        descripcion:"Administración de docentes",
        id:"teachers"
    },

    {
        nombre:"📊 Reportes",
        descripcion:"Estadísticas y consultas",
        id:"reportes"
    },

    {
        nombre:"⚙ Configuración",
        descripcion:"Opciones del sistema",
        id:"configuracion"
    }

];

const menu = document.getElementById("menuPrincipal");

MODULOS.forEach(modulo=>{

    menu.innerHTML += `

        <div
            class="card"
            onclick="abrirModulo('${modulo.id}')">

            <h2>${modulo.nombre}</h2>

            <p>${modulo.descripcion}</p>

        </div>

    `;

});

function abrirModulo(modulo){

    alert("Módulo: " + modulo);

}
