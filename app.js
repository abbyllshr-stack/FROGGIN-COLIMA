const MODULOS = [

    {

        nombre:"📷 Pickup",

        descripcion:"Entrega de alumnos"

    },

    {

        nombre:"📅 Asistencia",

        descripcion:"Control de asistencia"

    },

    {

        nombre:"👩‍🏫 Teachers",

        descripcion:"Administración de docentes"

    },

    {

        nombre:"📊 Reportes",

        descripcion:"Estadísticas y consultas"

    },

    {

        nombre:"⚙ Configuración",

        descripcion:"Opciones del sistema"

    }

];

const menu = document.getElementById("menuPrincipal");

MODULOS.forEach(modulo=>{

    menu.innerHTML += `

        <div class="card">

            <h2>${modulo.nombre}</h2>

            <p>${modulo.descripcion}</p>

        </div>

    `;

});
