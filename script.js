// Función para alternar entre las secciones de la página de forma fluida
function cambiarSeccion(idSeccion) {
    const secciones = document.querySelectorAll('.project-card');
    secciones.forEach(sec => sec.classList.remove('active'));

    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));

    document.getElementById(idSeccion).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Proyecto 1: Cronómetro simple
let segundosTotales = 0;
let intervaloCronometro = null;

function iniciarCronometro() {
    if (!intervaloCronometro) {
        intervaloCronometro = setInterval(() => {
            segundosTotales++;
            let hrs = Math.floor(segundosTotales / 3600).toString().padStart(2, '0');
            let min = Math.floor((segundosTotales % 3600) / 60).toString().padStart(2, '0');
            let seg = (segundosTotales % 60).toString().padStart(2, '0');
            document.querySelector('.cronometro-display').textContent = `${hrs}:${min}:${seg}`;
        }, 1000);
    }
}

function pausarCronometro() {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
}

function limpiarCronometro() {
    pausarCronometro();
    segundosTotales = 0;
    document.querySelector('.cronometro-display').textContent = "00:00:00";
}

// Proyecto 2: Bloc de Notas con LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    cargarNotasGuardadas();
});

function guardarNotaLocal() {
    let texto = document.getElementById('input-nota').value.trim();
    if (texto === "") return;

    let notas = JSON.parse(localStorage.getItem('mis_notas_app')) || [];
    notas.push(texto);
    localStorage.setItem('mis_notas_app', JSON.stringify(notas));
    
    document.getElementById('input-nota').value = "";
    cargarNotasGuardadas();
}

function cargarNotasGuardadas() {
    let lista = document.getElementById('lista-notas');
    if (!lista) return;
    lista.innerHTML = "";
    let notas = JSON.parse(localStorage.getItem('mis_notas_app')) || [];
    
    notas.forEach((nota, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${nota} <button onclick="borrarNota(${index})" style="background:#e74c3c; padding:2px 6px;">X</button>`;
        lista.appendChild(li);
    });
}

function borrarNota(index) {
    let notas = JSON.parse(localStorage.getItem('mis_notas_app')) || [];
    notas.splice(index, 1);
    localStorage.setItem('mis_notas_app', JSON.stringify(notas));
    cargarNotasGuardadas();
}

// Proyecto 3: Adivina el Número
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
function verificarIntento() {
    let num = parseInt(document.getElementById('intento-usuario').value);
    let msj = document.getElementById('mensaje-adivina');
    
    if (isNaN(num)) {
        msj.textContent = "Por favor ingresa un número válido.";
        return;
    }
    
    if (num === numeroSecreto) {
        msj.textContent = "¡Felicidades, acertaste el número oculto!";
        msj.style.color = "green";
    } else if (num > numeroSecreto) {
        msj.textContent = "El número secreto es menor.";
        msj.style.color = "orange";
    } else {
        msj.textContent = "El número secreto es mayor.";
        msj.style.color = "orange";
    }
}

// Proyecto 4: Fondo Dinámico
function generarColorAleatorio() {
    let letrasHex = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        colorHex += letrasHex[Math.floor(Math.random() * 16)];
    }
    let caja = document.getElementById('caja-color');
    caja.style.backgroundColor = colorHex;
    caja.textContent = colorHex;
}

// Proyecto 5: Contador de Caracteres
function contarLetras() {
    let texto = document.getElementById('texto-entrada').value;
    document.getElementById('contador-resultado').textContent = texto.length;
}

// Proyecto 6: Reloj Digital
setInterval(() => {
    let fechaActual = new Date();
    let horaFormateada = fechaActual.toLocaleTimeString();
    let relojElem = document.getElementById('reloj-digital');
    if (relojElem) {
        relojElem.textContent = horaFormateada;
    }
}, 1000);

// Proyecto 7: Calculadora IMC
function calcularIndiceMasa() {
    let peso = parseFloat(document.getElementById('peso-input').value);
    let altura = parseFloat(document.getElementById('altura-input').value);
    let res = document.getElementById('resultado-imc');

    if (!peso || !altura || altura <= 0) {
        res.textContent = "Ingresa valores reales para calcular.";
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);
    res.textContent = `Tu índice de masa corporal es: ${imc}`;
}

// Proyecto 8: Trivia Rápida
function evaluarTrivia(esCorrecto) {
    let txt = document.getElementById('resultado-trivia');
    if (esCorrecto) {
        txt.textContent = "¡Respuesta correcta!";
        txt.style.color = "green";
    } else {
        txt.textContent = "Incorrecto, intenta con otra opción.";
        txt.style.color = "red";
    }
}

// Proyecto 9: Visor de Imágenes Simple
function cambiarImagen(opcion) {
    let visor = document.getElementById('visor-img');
    if (opcion === 1) {
        visor.style.background = "#3498db";
        visor.textContent = "Visualizando el recurso gráfico tipo A";
    } else {
        visor.style.background = "#e67e22";
        visor.textContent = "Visualizando el recurso gráfico tipo B";
    }
}

// Proyecto 10: Acordeón FAQ
function alternarFaq(elemento) {
    let respuesta = elemento.nextElementSibling;
    if (respuesta.style.display === "block") {
        respuesta.style.display = "none";
    } else {
        respuesta.style.display = "block";
    }
}
