// ==========================================
// FROGGIN ROUTER
// ==========================================

const MODULOS = {

    home: {
        title: "Home",
        init: "iniciarHome",
        libraries:[]
    },

    pickup: {
        title: "Pickup",
        init: "iniciarPickup",
        libraries:[
            "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"
        ]
    },

    attendance: {
        title: "Attendance",
        init: "iniciarAttendance",
        libraries:[]
    },

    teachers: {
        title: "Teachers",
        init: "iniciarTeachers",
        libraries:[]
    },

    reports: {
        title: "Reports",
        init: "iniciarReports",
        libraries:[]
    },

    settings: {
        title: "Settings",
        init: "iniciarSettings",
        libraries:[]
    }

};

// ==========================================
// INICIO
// ==========================================

window.addEventListener("DOMContentLoaded", () => {

    abrirModulo("home");

});

// ==========================================
// ABRIR MÓDULO
// ==========================================

async function abrirModulo(modulo){

    try{

       actualizarBarra(modulo);

        await cargarLibrerias(modulo);

        await cargarHTML(modulo);

        cargarCSS(modulo);

await cargarJS(modulo);

    }

    catch(error){

        console.error(error);

        document.getElementById("contenido").innerHTML = `
            <h2>Error</h2>
            <p>${error.message}</p>
        `;

    }

}

// ==========================================
// CARGAR HTML
// ==========================================

async function cargarHTML(modulo){

    const respuesta = await fetch(
        `modules/${modulo}/index.html`
    );

    if(!respuesta.ok){

        throw new Error(`Module "${modulo}" not found.`);

    }

    document.getElementById("contenido").innerHTML =
        await respuesta.text();

}

// ==========================================
// CARGAR CSS
// ==========================================

function cargarCSS(modulo){

    document
        .getElementById("moduleStyle")
        .href =
        `modules/${modulo}/${modulo}.css`;

}

// ==========================================
// CARGAR JS
// ==========================================

function cargarJS(modulo){

    return new Promise((resolve)=>{

        const anterior =
            document.getElementById("moduleScript");

        if(anterior){

            anterior.remove();

        }

        const script =
            document.createElement("script");

        script.id = "moduleScript";

        script.src =
            `modules/${modulo}/${modulo}.js`;

        script.onload = ()=>{

            iniciarModulo(modulo);

            resolve();

        };

        document.body.appendChild(script);

    });

}

// ==========================================
// INICIAR MÓDULO
// ==========================================

function iniciarModulo(modulo){

    const nombreFuncion =
        MODULOS[modulo].init;

    if(typeof window[nombreFuncion] === "function"){

        window[nombreFuncion]();

    }

}

// ==========================================
// BARRA SUPERIOR
// ==========================================

function actualizarBarra(modulo){

    document.getElementById("moduleTitle").textContent =
        MODULOS[modulo].title;

    document.getElementById("btnBack").style.display =
        modulo === "home"
            ? "none"
            : "block";

}
// ==========================================
// LOAD MODULE LIBRARIES
// ==========================================

async function cargarLibrerias(modulo){

    const librerias = MODULOS[modulo].libraries || [];

    for(const url of librerias){

        const yaExiste = document.querySelector(
            `script[src="${url}"]`
        );

        if(yaExiste){

            continue;

        }

        await new Promise((resolve,reject)=>{

            const script = document.createElement("script");

            script.src = url;

            script.onload = resolve;

            script.onerror = reject;

            document.body.appendChild(script);

        });

    }

}