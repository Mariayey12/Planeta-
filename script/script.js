let nombrePlanetas = Array('tierra', 'Martes')
let distancia = [6, 3, '67']
const tamaño = [];
console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)
    //Recorrer planeta
    //ciclo while 
let i = 0;
while (i <= nombrePlanetas.length - 1) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1
}
//ciclo for 
for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index]);
}
//ciclo for in 
//or (const key in nombrePlanetas) {
//if (Object.hasOwnProperty.call(object, key)) {
//const element = object[key];}
//console.log(nombrePlanetas[key])
//}
//ciclo for of 
//for (const planeta of nombrePlanetas) {
//console.log(planeta)
//}

let distancia = [5, 3, '67'];
//operador de igualdad
for (const key in distancia) {
    if (distancia[key] == '5') {
        console.log('se encontro la distancia')
    } else { console.log('no se encontro la distancia') }
}
for (const key in distancia) {
    if (distancia[key] === '5') {
        console.log('se encontro la distancia')
    } else { console.log('no se encontro la distancia') }
}