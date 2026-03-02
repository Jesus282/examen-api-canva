# 🎭 Payaso en Canvas con JavaScript

## 📌 Descripción

En este proyecto desarrollé un payaso utilizando el elemento `<canvas>` de HTML y la API gráfica de JavaScript. Construí cada parte del rostro manualmente mediante figuras geométricas y curvas Bézier, aplicando conceptos de coordenadas y dibujo en 2D.

El proyecto me permitió comprender cómo se construyen formas desde cero sin usar imágenes externas, únicamente mediante código.

---

## 🎯 Objetivos

- Comprender el sistema de coordenadas del canvas.
- Dibujar figuras básicas como círculos, triángulos y rectángulos.
- Utilizar curvas Bézier para crear formas orgánicas.
- Organizar el código en funciones reutilizables.
- Aplicar estilos de relleno y contorno.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- JavaScript
- API Canvas 2D

---

## 🧠 Conceptos Aplicados

Durante el desarrollo utilicé:

- `arc()` para dibujar círculos (cabeza, ojos, nariz).
- `fillRect()` y `strokeRect()` para los dientes.
- `moveTo()` y `lineTo()` para figuras triangulares.
- `bezierCurveTo()` para la boca y la línea de sonrisa.
- Variables centrales (`cx`, `cy`) para mantener proporciones.
- Estilos con `fillStyle`, `strokeStyle` y `lineWidth`.

---

## 🎨 Estructura del Código

El proyecto está organizado en funciones independientes para cada parte del rostro:

- Función para la cabeza.
- Función para los ojos.
- Función para la nariz.
- Función para la boca.
- Funciones para detalles decorativos.

Esto permitió mantener el código modular y más fácil de modificar.

---

## 📸 Resultado

El resultado es un payaso completamente generado mediante primitivas gráficas del canvas, incluyendo:

- Cabeza circular.
- Ojos simétricos.
- Nariz roja.
- Boca orgánica con dientes.
- Línea de sonrisa ajustable.
- Elementos decorativos alrededor del rostro.

---

## 📚 Conclusión

En este proyecto reforcé el manejo del canvas y comprendí cómo pequeñas variaciones en los puntos de control de una curva Bézier cambian completamente la expresión de un personaje. Además, practiqué la organización del código en funciones para mantener una estructura clara y mantenible.