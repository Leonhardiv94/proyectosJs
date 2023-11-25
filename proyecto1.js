"use strcit"
/*Funciones*/
function pedirNombre(){
    const nombre = prompt("¡Hola! ¿como te llamas?");
    return nombre
}
function pedirApellido(){
    const apellido = prompt("¿Y como es tu apellido?");
    return apellido
}
function continuar(){
    const siONo = prompt("Si desea continuar responda 1 para SI o 2 para NO");
    if (siONo == 1){
        return "Hola."
    }else{
        return "Adios."
    }
}
function mayorEdad(){
    const edad = prompt("Introduce tu edad");
    if (edad>=18){
        return "Usted es mayor de edad."
    }else{
        return "Usted es menor de edad."
    }
}
function rol(){
    const rol = prompt("Hola, por favor indica tu rol. - Admin. - Ventas. - Cliente.");
    if (rol == "Admin") {
        return "usted es un admin."
    }if (rol == "Ventas") {
        return "usted es del area de ventas."
    }if (rol == "Cliente") {
        return "usted es nuesro apreciado cliente."
    }else{
        return "roll incorrecto."
    }
}
function nDoble(){
    let numero = prompt("Introduce un numero:");
    numero2 = numero * 2
    return numero2
}
function nMitad(){
    let numero = prompt("Introduce un numero:");
    numero2 = numero / 2
    return numero2
}
function poNeCe(){
    let numero = Math.sign(prompt("Introduce un numero:"));
    
    if (numero < 0) {
        return "El numero es negativo."    
    }if (numero > 0) {
        return "El numero es positivo."
    }else{
        return "El numero es cero"
    }
}
function parImpar(){
    let numero = prompt("Introduce un numero:");
    if (numero % 2 == 0) {
        return "El numero " + numero + " es par."
    }else{
        return "El numero " + numero + " es impar."
    }
}
function nMayor(){
    const numero1 = prompt("Introduce un numero:");
    const numero2 = prompt("Introduce otro numero:");
    if (numero1 > numero2) {
        return "El numero " + numero1 + " es mayor."
    }if (numero1 < numero2) {
        return "El numero " + numero2 + " es mayor."
    }else{
        return "Los numeros son iguales."
    }
}
function OBasicas(){
    let numero1 = prompt("Introduce un numero:");
    let numero2 = prompt("Introduce otro numero:");
    let suma = Number.parseInt(numero1) + Number.parseInt(numero2)
    let resta = (numero1 - numero2)
    let multiplicacion = numero1 * numero2
    let divicion = numero1 / numero2
    let modulo = numero1 % numero2
    let cuadrado1 = Math.pow(numero1,2)
    let cuadrado2 = Math.pow(numero2,2)
    return "La suma es = " + suma + ". La resta es = " + resta + ". La multiplicacion es = " + multiplicacion + ". La divicion es = " + divicion + ". El modulo es = " + modulo + ". El cuadrado de " + numero1 + " es = " + cuadrado1 + " y el cuadrado de " + numero2 + " es = " + cuadrado2
}
function suDiRe(){
    let numero1 = prompt("Introduce un numero:");
    let numero2 = prompt("Introduce otro numero:");
    let suma = Number.parseInt(numero1) + Number.parseInt(numero2)
    let resta = (numero1 - numero2)
    let division = suma / resta
    return "La suma es = " + suma + ". La resta es = " + resta + ". La division de " + suma + " / " + resta + " es = " + division
}
function pares(){
    let numero = prompt("Introduce un numero:");
    let n = 1
    const arr = []
    while (n <= numero) {
        let par = n % 2
        if (par === 0) {
            arr.push(n)
        }
        n = n + 1     
    }
    return arr
}
function sumaN(){
    let numero = prompt("Introduce un numero:");
    let suma = 0
    let n = 1
    while (n <= numero) {
        suma = suma + n
        n = n + 1
    }
    return "La suma de los numeros desde 1 hasta " + numero + " es igual a: " + suma
}
function sumaPares(){
    let numero = prompt("Introduce un numero:");
    let suma = 0
    let n = 1
    while (n <= numero) {
        let par = n % 2
        if (par === 0) {
            suma = suma + n    
        } 
        n = n + 1
    }
    return "Los numeros pares entre 1 y " + numero + " es igual a: " + suma
}
function sumaImpar(){
    let numero = prompt("Introduce un numero:");
    let suma = 0
    let n = 1
    while (n <= numero) {
        let par = n % 2
        if (par != 0) {
            suma = suma + n    
        } 
        n = n + 1
    }
    return "Los numeros impares entre 1 y " + numero + " es igual a: " + suma    
}
function multiplos3() {
    let numero = prompt("Introduce un numero:");
    let n = 1
    const arr = []
    while (n <= numero) {
        if ((n % 3) === 0) {
            arr.push(n)
        }
        n = n + 1
    }
    return "Los numeros multiplos de 3 entre 1 y " + numero + " son: " + arr
}
function numerosAlRevez() {
    let numero = prompt("Introduce un numero:");
    let n = 0
    const arr = []
    while (n <= numero) {
        arr.push(n)
        n = n + 1
    }
    arr.reverse()
    return arr
}
function numerosOrdenados() {
    let numero = prompt("Introduce un numero:");
    let n = 0
    const arr = []
    while (n <= numero) {
        arr.push(n)
        n = n + 1
    }
    return arr
}
function tablasN() {
    let numero = prompt("Introduce un numero:");
    let t = 18
    let n = 1
    const arr = []
    while (n <= t) {
        arr.push(" " + n + " x " + numero + " = " + (numero * n))
        n = n + 1
    }
    return arr
}

let ejercicio = prompt("Indique ejercicio\n1) Preguntar al usuario por su nombre y luego saludar al usuario.\n2) Preguntar al usuario por su nombre, si el usuario no lo coloca, saludar al desconocido.\n3) Preguntar al usuario por su nombre y apellido y saludarlo.\n4) Preguntar al usuario si desea continuar, responder Hola o Adios.\n5) Leer nombre y edad y mostrar nombre y si es mayor de edad.\n6) Leer rol y dar acceso deacuerdo con esto.\n7) Leer un numero y mostrar el doble de n.\n8) Leer un numero y mostrar la mitad de n.\n9) Leer un numero y mostrar si es positivo negativo o cero.\n10) Leer un numero y mostrar si es par o impar.\n11) Leer dos numero y mostrar solo el mayor.\n12) Leer dos numeros y mostrar operaciones basicas: +, -, *, /, % y cuadrado.\n13) Leer dos numeros, mostras la suma dividido en la resta.\n14) Leer un numero y mostras los numeros pares que contiene.\n15) Pedir un número, mostrar la suma total desde 1 hasta n.\n16) Pedir un número, mostrar la suma de los números pares desde 1 hasta n.\n17) Pedir un número, mostrar la suma de los números impares desde 1 hasta n.\n18) Pedir un número, mostrar multiplos de 3 desde 1 hasta n.\n19) Pedir un número, mostrar los números desde n hasta 0.\n20) Pedir un número, mostrar los números desde 0 hasta n.\n21) Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 18.");
switch (ejercicio){
    case "1":
        /* 1) Preguntar al usuario por su nombre y luego saludar al usuario.*/
        document.write("¡Es un gusto " + pedirNombre() + "!");
        break;
    case "2":
        /* 2) Preguntar al usuario por su nombre, si el usuario no lo coloca,
        saludar al desconocido. */
        const nombre = pedirNombre();
        if (nombre){
            document.write("¡Es un gusto " + nombre + "!");
        }else{
            document.write("Hola desconocido");
        }
        break;
    case "3":
        /* 3) Preguntar al usuario por su nombre y apellido y saludarlo. */
        document.write("¡Es un gusto " + pedirNombre() + " " + pedirApellido() + "!");
        break;
    case "4":
        /* 4) Preguntar al usuario si desea continuar, responder Hola o Adios. */
        document.write(continuar());
        break
    case "5":
        /* 5) Leer nombre y edad y mostrar nombre y si es mayor de edad. */
        document.write("Hola " + pedirNombre() + ", " + mayorEdad());
        break
    case "6":
        /* 6) Leer rol y dar acceso deacuerdo con esto. */
        document.write("Hola " + rol());
        break
    case "7":
        /* 7) Leer un numero y mostrar el doble de n. */
        document.write("El doble de " + nDoble()/2 + " es: " + numero2);
        break
    case "8":
        /* 8) Leer un numero y mostrar la mitad de n. */
        document.write("La mitad de " + nMitad()*2 + " es: " + numero2);
        break
    case "9":
        /* 9) Leer un numero y mostrar si es positivo negativo o cero. */
        document.write(poNeCe());
        break
    case "10":
        /* 10) Leer un numero y mostrar si es par o impar. */;
        document.write(parImpar());
        break
    case "11":
        /* 11) Leer dos numero y mostrar solo el mayor. */
        document.write(nMayor());
        break
    case "12":
        /* 12) Leer dos numeros y mostrar operaciones basicas: +, -, *, /, % y cuadrado. */
        document.write(OBasicas());
        break
    case "13":
        /* 13) Leer dos numeros, mostras la suma dividido en la resta. */
        document.write(suDiRe());
        break
    case "14":
        /* 14) Leer un numero y mostras los numeros pares que contiene. */
        document.write(pares());
        break
    case "15":
        /* 15) Pedir un número, mostrar la suma total desde 1 hasta n. */
        document.write(sumaN());
        break
    case "16":
        /* 16) Pedir un número, mostrar la suma de los números pares desde 1 hasta n. */
        document.write(sumaPares());
        break
    case "17":
        /* 17) Pedir un número, mostrar la suma de los números impares desde 1 hasta n. */
        document.write(sumaImpar());
        break
    case "18":
        /* 18) Pedir un número, mostrar multiplos de 3 desde 1 hasta n. */
        document.write(multiplos3());
        break
    case "19":
        /* 19) Pedir un número, mostrar los números desde n hasta 0. */
        document.write(numerosAlRevez());
        break
    case "20":
        /* 20) Pedir un número, mostrar los números desde 0 hasta n. */
        document.write(numerosOrdenados());
        break
    case "21":
        /* 21) Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 18. */
        arr = (tablasN());
        n = 0
        str = ""
        while (n <= arr.length - 1) {
            str += arr([n]);
            n = n + 1
        }
        document.write(str)
        break
}