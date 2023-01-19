let edadUsuario1
let edadUsuario2
let edadUsuario3
let edadUsuario4
let valorUsuario1
let valorUsuario2
let valorUsuario3
let valorUsuario4
let a
let b
let c
let d
let resultadoNotas
let resultadoNotasTotal
let resultadoEdadTotal
let resultadoEdad
let saltoLinea
let saltoLinea1
let espacio
let inicio
espacio = "  "
saltoLinea = " Años \n "
saltoLinea1 = "  \n "
let carrito = []
let seleccion

inicio = prompt("Bienvenido a la herramienta para profesores mas avanzada de la actualidad, seleccione una opción \n 1- Iniciar la calculadora de promedios estudiantiles \n 2- Zona Comercial  \n 3- Salir de el simulador")
if (inicio < 4 && inicio > 0) {
    const productos = [{ nombre: "Pizzarra blanca 1.20 x 2.50 Mts", precio: 8990 },
    { nombre: "Tiza blanca", precio: 60 },
    { nombre: "Pack de 6 Marcadores Pilot", precio: 1180 },
    { nombre: "Borrador de pizzarra + 1 Marcador", precio: 110 },
    { nombre: "Proyector Xiaomi Wanbo X1 Mini 120", precio: 6700 },
    { nombre: "Tunica blanca para profesor de Quimica", precio: 845 }
    ];
    if (inicio == 2) {
        // alert("usted a ingresado a la zona comercial del liceo");
        seleccion = prompt("usted a ingresado a la zona comercial del liceo desea comprar si o no")
        while (seleccion != "si" && seleccion != "no") {
            alert("por favor ingresa si o no")
            seleccion = prompt("hola, usted desea comprar algo si o no ")
        }
        if (seleccion == "si") {
            alert("a continuacion la lista de productos")

        }
        else if (seleccion == "no") {
            alert("gracias,por venir hasta pronto!!.")
        }

        while (seleccion != "no") {
            let producto = prompt("seleccione los utiles y haga un presupuesto personalizado para el instituto \n" +
                "1- Tiza blanca, precio: $60 \n" +
                "2- Pack de  Marcadores Pilot precio: $1180 \n" +
                "3- Borrador de pizzarra + 1 Marcador precio: $110 \n" +
                "4- Proyector Xiaomi Wanbo X1 Mini 120 precio: $6700 \n" +
                "5- Tunica blanca para profesor de Quimica precio: $845");
            let precio = 0
            if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5") {
                switch (producto) {
                    case "1":
                        precio = 60;
                        break;
                    case "2":
                        precio = 1180;
                        break;
                    case "3":
                        precio = 110;
                        break;
                    case "4":
                        precio = 6700;
                        break;
                    case "5":
                        precio = 845;
                        break;
                }

                    let unidades = prompt("cuantas unidades quiere llevar")
                    unidades = parseInt(unidades)
                    carrito.push({ producto, unidades, precio })
                    console.log(carrito)
                    seleccion = prompt("desea seguir comprando si o no")
            }

            else {
                alert("no tenemos ese producto")
            }
             
            while (seleccion == "no") {
                alert("gracias por usar la herramienta de calculo, vuelva pronto!")
                carrito.forEach((carritoFinal) => {
                    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},Total a pagar por Producto ${carritoFinal.unidades * carritoFinal.precio}`)
                    alert("Aqui esta los productos de el carrito" + saltoLinea1 + "producto:   " + carritoFinal.producto + "   unidades:   " + carritoFinal.unidades + saltoLinea1 + " Total a pagar por los productos:   " + "$" +  carritoFinal.unidades * carritoFinal.precio )
                })
                break
            }

            setTimeout(function () {
                seleccion = prompt("desea seguir comprando si o no")
            }, 600);
        }
    }


   
    while (seleccion === "no") {
        alert("gracias por usar la herramienta de calculo, vuelva pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.productos}, unidades: ${carrito.unidades},Total a pagar por Producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }


}
if (inicio == 1) {
    valorUsuario1 = prompt("Nombre y apellido del 1er estudiante")

    edadUsuario1 = prompt("ingrese la edad del 1er estudiante")

    a = prompt("ingrese la nota del 1er estudiante");

    a = parseInt(a)
    if (a > 0 && a <= 12 && edadUsuario1 < 70 && edadUsuario1 >= 18) {

        valorUsuario2 = prompt("Nombre y apellido del 2do estudiante")


        edadUsuario2 = prompt("ingrese la edad del 2do estudiante")


        b = prompt("ingrese la nota del 2do estudiante")

        b = parseInt(b)
    }
    else {
        alert("Nota o edad incorrecta, debe ser mayor de 18 años")
        setTimeout(() => {
            window.close()
        }, 700);

    }
    if (b > 0 && b <= 12 && edadUsuario2 < 70 && edadUsuario2 >= 18) {
        valorUsuario3 = prompt("Nombre y apellido del 3er estudiante")
        edadUsuario3 = prompt("ingrese la edad del 3er estudiante")
        c = prompt("ingrese la nota del 3er estudiante")
        c = parseInt(c)
    }
    else {
        alert("Nota o edad incorrecta, debe ser mayor de 18 años")
        setTimeout(() => {
            window.close()
        }, 700);
    }
    if (c > 0 && c <= 12 && edadUsuario3 < 70 && edadUsuario3 >= 18) {
        valorUsuario4 = prompt("Nombre y apellido del 4to estudiante")
        edadUsuario4 = prompt("ingrese la edad del 4to estudiante")
        d = prompt("ingrese la nota del 4to estudiante")
        d = parseInt(d)
    }
    else {
        alert("Nota o edad incorrecta, debe ser mayor de 18 años")
        setTimeout(() => {
            window.close()
        }, 700);
    }
    if (d > 0 && d <= 12 && edadUsuario4 < 70 && edadUsuario4 >= 18) {

    }
    else {
        alert("Nota o edad incorrecta, debe ser mayor de 18 años")
        setTimeout(() => {
            window.close()
        }, 700);
    }
    edadUsuario1 = parseInt(edadUsuario1)
    edadUsuario2 = parseInt(edadUsuario2)
    edadUsuario3 = parseInt(edadUsuario3)
    edadUsuario4 = parseInt(edadUsuario4)

    function estudiantes(nombre, edad, notas) {
        this.nombre = nombre
        this.edad = edad
        this.notas = notas
    }

    const estudiante1 = new estudiantes(valorUsuario1, edadUsuario1, a)
    const estudiante2 = new estudiantes(valorUsuario2, edadUsuario2, b)
    const estudiante3 = new estudiantes(valorUsuario3, edadUsuario3, c)
    const estudiante4 = new estudiantes(valorUsuario4, edadUsuario4, d)


    function notas(a, b, c, d,) {
        resultadoNotas = a + b + c + d
        return resultadoNotas
    }
    notas(a, b, c, d)
    resultadoNotasTotal = resultadoNotas / 4

    function edad(edadUsuario1, edadUsuario2, edadUsuario3, edadUsuario4,) {
        resultadoEdad = edadUsuario1 + edadUsuario2 + edadUsuario3 + edadUsuario4
        return resultadoEdad
    }
    edad(edadUsuario1, edadUsuario2, edadUsuario3, edadUsuario4)
    resultadoEdadTotal = resultadoEdad / 4
    setTimeout(function () {
        alert("estos son los estudiantes cargados por usted" + saltoLinea1 +
            "Nombre: " + estudiante1.nombre + "     Nota:  " + estudiante1.notas + "    Edad " + estudiante1.edad + saltoLinea +
            "Nombre: " + estudiante2.nombre + "     Nota:  " + estudiante2.notas + "    Edad " + estudiante2.edad + saltoLinea +
            "Nombre: " + estudiante3.nombre + "     Nota:  " + estudiante3.notas + "    Edad " + estudiante3.edad + saltoLinea +
            "Nombre: " + estudiante4.nombre + "     Nota:  " + estudiante4.notas + "    Edad: " + estudiante4.edad + saltoLinea)
    }, 400);
    setTimeout(function () {
        alert("El promedio de edad de los estudiantes es de " + resultadoEdadTotal + saltoLinea1 +
            "El promedio de nota de los estudiantes es de " + resultadoNotasTotal)
    }, 600);
}
if (inicio == 3) {
    alert("ha seleccionado salir, la ventana se cerrara automaticamente, hasta luego...")
    setTimeout(() => {
        window.close()
    }, 700);
}



while (inicio != 1 && inicio != 2 && inicio != 3) {
    alert("Introdujo un caracter no existente, reinicie el simulador para continuar")

    inicio = prompt("Bienvenido a la herramienta para profesores mas avanzada de la actualidad, seleccione una opción \n 1- Iniciar la calculadora de promedios estudiantiles \n 2- Zona Comercial  \n 3- Salir de el simulador")

}
