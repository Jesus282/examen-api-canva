document.addEventListener("DOMContentLoaded", function() {

    const canvas = document.getElementById('lienzoPayaso');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const COLORES = {
        fondo: '#f8e5ce',
        borde: 'black',
        grosorBorde: 2,
        rojo: '#e53935',
        azul: '#1e88e5',
        amarillo: '#ffeb3b',
        verde: '#43a047',
        naranja: '#ef6c00',
        blanco: 'white',
        negro: 'black'
    };

    ctx.lineWidth = COLORES.grosorBorde;
    ctx.strokeStyle = COLORES.borde;

    // ===== FUNCIONES =====

    function dibujaCirculo(x, y, r, color) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    function dibujaRect(x, y, w, h, color) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    function dibujaTriangulo(x1,y1,x2,y2,x3,y3,color){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    function dibujaSemicirculo(x, y, radio, color, direccion = "arriba") {

    ctx.beginPath();

    if (direccion === "arriba") {
        // Semicírculo mirando hacia arriba
        ctx.arc(x, y, radio, 0, Math.PI);
    } else {
        // Semicírculo mirando hacia abajo
        ctx.arc(x, y, radio, Math.PI, 0);
    }

    ctx.lineTo(x - radio, y);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.stroke();
}

    const cx = W / 2;
    const cy = 200;

    // ===== PELO =====
    const radioPelo = 24;
    const offsetX = 78;
    const baseY = cy;

    // Izquierdo
    dibujaCirculo(cx - offsetX, baseY, radioPelo, COLORES.rojo);
    dibujaCirculo(cx - offsetX - 15, baseY + 20, radioPelo, COLORES.rojo);
    dibujaCirculo(cx - offsetX + 15, baseY + 20, radioPelo, COLORES.rojo);

    // Derecho
    dibujaCirculo(cx + offsetX, baseY, radioPelo, COLORES.rojo);
    dibujaCirculo(cx + offsetX - 15, baseY + 20, radioPelo, COLORES.rojo);
    dibujaCirculo(cx + offsetX + 15, baseY + 20, radioPelo, COLORES.rojo);

    // ===== CABEZA =====
    dibujaCirculo(cx,cy,75,COLORES.amarillo);

    // ===== SOMBRERO =====
    dibujaTriangulo(cx,40, cx-70,160, cx+70,160, COLORES.azul);
    dibujaCirculo(cx,40,15,COLORES.rojo);

    // Ojos
    dibujaCirculo(cx-30,cy-20,15,COLORES.azul);
    dibujaCirculo(cx+30,cy-20,15,COLORES.azul);
    dibujaCirculo(cx-30,cy-20,5,COLORES.negro);
    dibujaCirculo(cx+30,cy-20,5,COLORES.negro);


    // Boca (ellipse completa)
   function dibujarBoca() {

    ctx.beginPath();

    // Punto inicial (lado izquierdo)
    ctx.moveTo(210, 240);

    // Curva superior
    ctx.bezierCurveTo(
        210, 280,   // control izquierdo
        290, 280,   // control derecho
        290, 240    // punto final
    );

    // Curva inferior
    ctx.bezierCurveTo(
        290, 210,   // control derecho inferior
        210, 210,   // control izquierdo inferior
        210, 240    // regreso al inicio
    );

    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // CONTORNO NEGRO
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // DIENTES
    ctx.fillStyle = "white";
    ctx.fillRect(235, 225, 30, 20);

    // Línea divisoria dientes
    ctx.beginPath();
    ctx.moveTo(250, 225);
    ctx.lineTo(250, 245);
    ctx.stroke();
}
     // Nariz
    dibujaCirculo(cx,cy,18,COLORES.rojo);

    // Dientes
    /*dibujaRect(cx-11, cy+40, 10, 12, COLORES.blanco);
    dibujaRect(cx,   cy+40, 10, 12, COLORES.blanco);*/

    // ===== CUELLO =====
    const bodyTop = 305;
    const ruffleY = bodyTop - 35;
    const offsetY = 15; // baja la figura 15px

    // ===== CUERPO =====
    dibujaRect(cx-80, bodyTop, 160, 170, COLORES.blanco);

    // Rayas
    for(let i=0;i<7;i+=2){
        dibujaRect(cx-80 + i*(160/7), bodyTop, 160/7, 170, COLORES.azul);
    }


    // ===== BOTONES =====
    dibujaCirculo(cx,bodyTop+50,15,COLORES.amarillo);
    dibujaCirculo(cx,bodyTop+85,15,COLORES.amarillo);
    dibujaCirculo(cx,bodyTop+120,15,COLORES.amarillo);

    // ===== BRAZOS =====
    dibujaRect(cx-120,bodyTop+20,40,160,COLORES.verde);
    dibujaRect(cx+80,bodyTop+20,40,160,COLORES.verde);

    dibujaCirculo(cx-100,bodyTop+180,20,COLORES.amarillo);
    dibujaCirculo(cx+100,bodyTop+180,20,COLORES.amarillo);

    // ===== PIERNAS =====
    dibujaRect(cx-60,bodyTop+170,40,150,COLORES.naranja);
    dibujaRect(cx+20,bodyTop+170,40,150,COLORES.naranja);

    // ===== PIES =====
    dibujaRect(cx-120,bodyTop+320,100,35,COLORES.rojo);
    dibujaRect(cx+20,bodyTop+320,100,35,COLORES.rojo);

    const coloresCuello = [
        COLORES.rojo,
        COLORES.amarillo,
        COLORES.verde,
        COLORES.azul,
        COLORES.rojo
    ];

    for(let i=0;i<5;i++){
        dibujaSemicirculo(cx-80 + i*40, ruffleY + offsetY, 25, coloresCuello[i]);
    }

    for(let i=0;i<5;i++){
        dibujaSemicirculo(cx-80 + i*40, ruffleY, 25, coloresCuello[i]);
    }
    
    // ===== MOÑO =====
    const centroMoñoY = bodyTop - 5 + 12.5;

    // Triángulo izquierdo
    dibujaTriangulo(
        cx , centroMoñoY,   // punta (pegada al rectángulo)
        cx - 60, centroMoñoY - 20, // base superior
        cx - 60, centroMoñoY + 20, // base inferior
        COLORES.azul
    );

    // Triángulo derecho
    dibujaTriangulo(
        cx , centroMoñoY,   // punta
        cx + 60, centroMoñoY - 20,
        cx + 60, centroMoñoY + 20,
        COLORES.azul
    );

    // Rectángulo central
    dibujaRect(cx - 12, bodyTop - 5, 24, 25, COLORES.rojo);

    

});