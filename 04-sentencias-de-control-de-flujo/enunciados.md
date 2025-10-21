# 🔀 Estructuras de control: condicionales
<br>

## `if`, `else`, `else if`

**1 🔢 Número par o impar**
- Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

**2 📆 Días del mes**
- Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

**3 🔐 Cambio de contraseña**
- Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (*hardcodear*) preguntas y respuestas.

**4 🎓 Examen aprobado**
- Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

**5 Grupo de letras**
- Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
  - grupo A = {a, e, i, o ,u}
  - grupo B = {b, c, d, f, g}
  - grupo C = {h, j, k , l, m}
  - grupo D = {n, p, q, r}
  - grupo E = {s, t, v, w, x, y, z}

**6 🥪 Sandwich**
- Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
  - Tipo de pan: blanco, negro, integral
  - Ingrediente 1: tomate, lechuga, pimiento
  - Ingrediente 2: cebolla, aceituna, pepino
  - Aderezos: mostaza, mayonesa, picante
  - Gaseosa: Coca Cola, Pepsi, Sprite

**7 ✊🤚✌️ Piedra, papel o tijera**
- Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.


**8 🎨 Simón dice**
- Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.

```
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!
```

## Condicional `switch`

Para los siguientes ejercicios utilizar el condicional **switch** donde sea necesario.

**9 🗓 Meses del año**
- Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

**10 ❄️ Estaciones del año II**
- Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

**11 🧮 Calculadora**
- Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.

**12 📺 Televisor**
- Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
  - CAMBIAR CANAL: permite ingresar un canal (0 al 99)
  - CANAL SIGUIENTE: sube un canal
  - CANAL ANTERIOR: baja un canal
  - SUBIR VOLUMEN: sube en volumen en 5
  - BAJAR VOLUMEN: disminuye en volumen en 5
  - MUTEAR: pone el volumen en 0

Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.


# 🔄 Estructuras de control: bucles
<br>

## Bucle `for`

**1 🔢 Números impares**
- Crear un programa que muestre en consola los números impares entre el 0 y el 20

**2 📀 Playlist**
- Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

**3 🔍 Número mayor o menor**
- Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

**4 ❗️ Factorial**
- Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24

**5 🏃‍♀️ Carrera**
- Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
Ejemplo:

```
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
```

**6 ✊🤚✌️ Piedra, papel, tijera II**
- Al ejercicio de **Piedra, papel, tijera** de *condicionales*, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó.
Ejemplo:

```
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)
```

**7 📐 Patrón**
- Crear un programa que muestre en consola el siguiente patrón

```bash
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
```
<br>

## Bucle `while`

**8 🔐 Múltiples intentos**
- Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

**9 💲Cara o cruz**
- Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

**10 ⚖️ Mayor o menor**
- Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.