let palabraAleatoria;
let filaActual = 0;
reiniciarJuego = false
function juego(){
    filaActual = 0;
    palabraAleatoria = elejirPalabra();
    let tablaJuego = document.getElementById("tablaJuego");
    tablaJuego.innerHTML = ''; // Borrar la tabla
    let num = 0;
    for (let i = 0; i < 6; i++){
        let fila = document.createElement("tr");
        for (let j = 0; j < 5; j ++ ){
            let celda = document.createElement("td");
            celda.id = 'celda' + num; 
            fila.appendChild(celda);
            num +=1;        }
        tablaJuego.appendChild(fila);
    }
}
function selectorFila(){
    let celdasDeLaFila;
    if(filaActual == 0){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(1) td');
    }
    else if(filaActual ==1){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(2) td');
    }
    else if(filaActual ==2){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(3) td');
    }
    else if(filaActual ==3){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(4) td');
    }
    else if(filaActual ==4){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(5) td');
    }
    else if(filaActual ==5){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(6) td');
    }
    else if(filaActual > 5){
        filaActual = 0; return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(1) td');
    }
}

function elejirPalabra(){
    const palabras = ["valor","pesca","calza","volar"];
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    palabras[indiceAleatorio] = palabras[indiceAleatorio].toUpperCase();
    return palabras[indiceAleatorio];
}

function presionarTecla(tecla){
    if (tecla == "Backspace") {
        let idCelda = queCeldaPintar();
        if(idCelda != -1){
            idCelda = Number(idCelda.replace('celda', ''));
            if (idCelda ==0 || idCelda ==5 || idCelda ==10 || idCelda ==15 || idCelda ==20 || idCelda ==25){return;}
            else{
            idCelda -= 1;
            let celda = document.querySelector('#celda' + idCelda);
            celda.textContent = "";
            celda.style.backgroundColor = "";}}
        else if (idCelda == -1) {
            let celda;
            switch(filaActual){
                case 0:
                    idCelda = 4;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
                case 1:
                    idCelda = 9;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
                case 2:
                    idCelda = 14;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
                case 3:
                    idCelda = 19;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
                case 4:
                    idCelda = 24;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
                case 5:
                    idCelda = 29;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    celda.style.backgroundColor = "";
                    break;
            }
        
    }}
    else if(tecla =="Enter"){
        if(lineaCompleta()){
        colorearCeldas(palabraAleatoria);
        comprovarPalabra(palabraAleatoria);
        }
        else{
            mostrarModal("La linea no esta completa");
        }}
    else{
        let idCelda = queCeldaPintar();
        if (idCelda == -1) {
            return; // Si todas las celdas están llenas, no hay nada que pintar
        }
        let celda = document.querySelector('#' + idCelda);
        celda.textContent = tecla;
        celda.style.backgroundColor = "gray"; // Cambiar el color de fondo de la celda a gris
        celda.style.color = "white"; // Cambiar el color del texto a blanco
    }
}

function queCeldaPintar(){
    let celdas = selectorFila();
    let numCeldas = celdas.length;
    for(let i = 0; i < numCeldas; i++){
        let celda = celdas[i];
        let contenido = celda.textContent;
        if (contenido == ""){
            return celda.id;
        }
    }
    return -1;
}
// Asegúrate de que la función presionarTecla() esté definida antes de este punto

document.addEventListener('keydown', function(event) {
    let tecla = event.key.toUpperCase();
    if (tecla.length === 1 && tecla.match(/[A-ZÑ]/i)) { // Si la tecla es una letra
        presionarTecla(tecla);
    } else if (tecla === 'BACKSPACE') { // Si la tecla es Backspace
        presionarTecla('Backspace');
    } else if (tecla === 'ENTER') { // Si la tecla es Enter
        presionarTecla('Enter');
    }
});

// El resto de tu código JavaScript va aquí

function colorearCeldas(palabraAleatoria){
    let arrayPalbra = palabraAleatoria.split("");
    let linea = selectorFila();
    for (let i = 0; i < linea.length; i++){
        let celda = linea[i];
        if(celda.textContent == arrayPalbra[i]){
            celda.style.color = "white";
            celda.style.backgroundColor = "green";
        }
        else if(celda.textContent != arrayPalbra[i] && arrayPalbra.includes(celda.textContent)){
            celda.style.color = "white";
            celda.style.backgroundColor = "khaki";
        }
        else{
            celda.style.color = "white";
            celda.style.backgroundColor = "red";
        }
        
    }
    
    
   


}
function mostrarConfeti() {
    var end = Date.now() + (2 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
function mostrarModal(texto) {
    $('#modal-text').text(texto);
    $('#modal').css('opacity', 0).show().animate({opacity: 1}, 500);
    setTimeout(function() {
        $('#modal').animate({opacity: 0}, 500, function() {
            $(this).hide();
        });
    }, 1500); // El modal se ocultará después de 3 segundos
}
function lineaCompleta(){
    let celdas = selectorFila();
    let celdasArray = Array.from(celdas); // Convertir NodeList a Array
    return celdasArray.every(celda => celda.textContent !== "");
}
function todasLasCeldasSonVerdes() {
    let celdas = selectorFila();
    let celdasArray = Array.from(celdas); // Convertir NodeList a Array
    return celdasArray.every(celda => celda.style.backgroundColor === "green");
}
function comprovarPalabra(palabraAleatoria){
    let arrayPalabra = palabraAleatoria.split("");
    let linea = selectorFila();
    let respuesta = [];
    
    for(let element of linea){
        respuesta.push(element.textContent);
    }
    palabraAleatoria = arrayPalabra.join('');
    respuesta = respuesta.join('');
    respuesta = respuesta.toUpperCase();
    if (palabraAleatoria == respuesta){
        if(todasLasCeldasSonVerdes()){
            
            mostrarModal("Has ganado!");
            mostrarConfeti();
            setTimeout(juego, 2000); // Esperar 2 segundos antes de reiniciar el juego
           
            return;
        }
    }
    else{
        if(filaActual == 5){
        mostrarModal("Has perdido, la palabra era: " + palabraAleatoria);
            setTimeout(juego, 2000); // Esperar 2 segundos antes de reiniciar el juego
            juego();
            return;
            
        }else{
        mostrarModal("La palabra no es correcta, vuelve a intentarlo!")
        filaActual +=1;}
        
        
        
    }
   
}

juego();