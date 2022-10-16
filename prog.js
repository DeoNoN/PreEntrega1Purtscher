//---------------- Declaracion de variables ----------------

//Filtro edad
let edad
let apto

//IMC
let peso
let estatura
let imc
let diff

const min = 18.5
const max = 25

//Plan
let dias
let int

//---------------- Declaracion de funciones ----------------

function plan(cuota, d) {
    let precio = 0
    //Variable local

    if (d >= 1 && d <= 5) {

        for (let i = 0; i < (d * 4); i++) {
            precio = precio + cuota
            cuota = cuota * 0.95
        }
    
        console.log('El precio total del plan por mes (' + d + ' dias a la semana) es de ' + precio.toFixed(0) + '$.')
    }
    else {

        console.log('No ha ingresado la cantidad de dias correctamente. Tenga en cuenta que no trabajamos los fines de semana.')
    }
}

//---------------- Comienzo del programa ----------------

alert('Bienvenido a ENTRENATE, a continuacion te realizaremos una breve encuesta para tu plan de ejercicios')

// Filtro de edad. 1 = No apto, 2 = apto.

edad = prompt('Indicanos tu edad')

if (edad < 18) {

    console.log('Lo sentimos, pero no tenemos planes y por ende no trabajamos con menores de edad.')
    apto = 1
}
else if (edad > 59) {

    console.log('Lo sentimos, pero no tenemos planes y por ende no trabajamos con gente de la tercera edad.')
    apto = 1
}
else {
//Calculo de IMC y plan recomendado

    apto = 2

    estatura = prompt('Indicanos tu estatura (en Metros).')
    peso = prompt('Indicanos tu peso (en Kilogramos).')
    imc = (peso / (estatura * estatura)).toFixed(1)

    if (imc > max) {

        diff = (peso - estatura * estatura * max).toFixed(2)
        alert('Usted se encuentra en sobrepeso con un IMC de ' + imc + '. Debe apuntar a bajar ' + diff + ' KG para llegar a un IMC maximo de 25.')
    }
    else if (imc < min) {

        diff = (estatura * estatura * min - peso).toFixed(2)
        alert('Usted se encuentra en bajo peso con un IMC de ' + imc + '. Debe apuntar a ganar ' + diff + ' KG para llegar a un IMC minimo de 18.5.')
    }
    else {

        alert('Usted se encuentra en el margen recomendado con un IMC de ' + imc + '.')
    }      
}

// Comienzo de planes

if (apto == 2) {

    alert('A continuacion figuraremos su plan segun su disponibilidad, Le recordamos que cada dia que participe en el mismo mes, se le hara un 5% de descuento adicional en su siguiente dia (considerando el pago mensual cada 4 semanas). El precio de cada dia de plan de intensidad alta, media y baja son de 2600$, 2100$ y 1600$ respectivamente.')

    dias = prompt('Cuantos dias por semana piensa participar? (No abrimos los fines de semana).')
    int = prompt('Cual intensidad? (Alta, Media o Baja).')

    switch (int.toLowerCase()) {
        case "alta":
            plan(2600, dias)
            break
        case "media":
            plan(2100, dias)
            break
        case "baja":
            plan(1600, dias)
            break
        default:
            console.log('No ha ingresado uno de los planes disponibles.')
    }
}


