let texto = document.getElementById("texto_lineas");
let figura = document.getElementById("figura_lineas");
let color = document.getElementById("color_lineas")
let botonDibujar = document.getElementById("botonDibujar");
let botonBorrar = document.getElementById("botonBorrar");
botonDibujar.addEventListener("click", dibujoPorClick);
botonBorrar.addEventListener("click", borrarPorClick);

let d = document.getElementById("dibujito");
let ancho = d.width;
let lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    //Pasos para dibujar lineas
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    let lineas = parseInt(texto.value);
    let num = ancho - 1;
    let cruz = ancho / 2;
    let l = 0;
    let x, y, xx, yy, xcruz, ycruz, xxcruz, yycruz, yyycruz;
    let espacio = ancho / lineas;
    let espacio2 = cruz / lineas;
    let figuraLineas = parseInt(figura.value);
    let colorLineas = color.value;

    for (l = 0; l < lineas; l++) {
        y = espacio * l;
        yy = (ancho - espacio) - y;
        x = espacio * (l + 1);
        xx = (ancho + espacio) - x;

        ycruz = espacio2 * l;
        yycruz = cruz - ycruz - espacio2;
        yyycruz = cruz + yycruz + espacio2;
        xcruz = espacio2 * (l + 1);
        xxcruz = cruz + xcruz;

        if (figuraLineas === 1) {
            dibujarLinea(colorLineas, 0, xx, x, 0);
            dibujarLinea(colorLineas, ancho, x, y, 0);
            dibujarLinea(colorLineas, yy, ancho, ancho, y);
            dibujarLinea(colorLineas, 0, y, x, ancho);

        } else if (figuraLineas === 2) {
            dibujarLinea(colorLineas, yycruz, cruz, cruz, ycruz);
            dibujarLinea(colorLineas, cruz, ycruz, xxcruz, cruz);
            dibujarLinea(colorLineas, cruz, xxcruz, yyycruz, cruz);
            dibujarLinea(colorLineas, ycruz, cruz, cruz, xxcruz);
        } else if (figuraLineas === 3) {
            dibujarLinea(colorLineas, ycruz, ycruz, xxcruz, yycruz);
            dibujarLinea(colorLineas, ycruz, ycruz, yycruz, xxcruz);
            dibujarLinea(colorLineas, yyycruz, ycruz, xxcruz, xxcruz);
            dibujarLinea(colorLineas, ycruz, yyycruz, xxcruz, xxcruz);
        }
    }

    if (figuraLineas === 1) {
        dibujarLinea(colorLineas, 1, 1, 1, num);
        dibujarLinea(colorLineas, 1, 1, num, 1);
        dibujarLinea(colorLineas, num, num, num, 1);
        dibujarLinea(colorLineas, 1, num, num, num);

    } else if (figuraLineas === 2) {
        dibujarLinea(colorLineas, cruz, cruz, cruz, 0);
        dibujarLinea(colorLineas, cruz, cruz, 500, cruz);
        dibujarLinea(colorLineas, cruz, cruz, cruz, 500);
        dibujarLinea(colorLineas, cruz, cruz, 0, cruz);
    } else if (figuraLineas === 3) {
        dibujarLinea(colorLineas, 0, 0, num, num);
        dibujarLinea(colorLineas, num, 0, 0, num);
    }
}

function borrarPorClick() {
    //Borra todo lo que se ha dibujado
    lienzo.clearRect(0, 0, d.width, d.height);
}