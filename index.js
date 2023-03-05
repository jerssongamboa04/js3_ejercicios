// const now = new Date();
// const year = now.getFullYear(); 
// const month = now.getMonth() + 1; 
// const date = now.getDate(); 
// const hours = now.getHours(); 
// const minutes = now.getMinutes(); 

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`); //

// // ### Ejercicios: Nivel 1

// // 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

// let firstName = "jersson";
// let lastName  = "gamboa";
// let country = "españa";
// let city = "madrid";
// let age = 27;
// let isMArried = false;
// let year2 = 2023;

// console.log(`${firstName}/${lastName}/${country}/${city}/${age}/${isMArried}/${year2}`);

// // 2. Verifique si typeof '10' es igual a 10

// let veri = '10';
// let very = 10;
// console.log(veri===very)

// // 3. Verifique si parseInt('9.8') es igual a 10

// let parseInt = '9.8';
// console.log(parseInt===very)

// // 4. Verifique cualquier valor booleano true o false.

//   //    2.A Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
//   let num2 = 3;
//   let num3 = 4;
//   result = num2 > num3 ;
//   result2 = num2 == num3 ;
//   result3 = num3 < num2 ;
//   console.log(result, result2, result3);

//   //    1. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero. 
//   result4 = num2 !== num3;
//   result5 = num3 >= num2 ;
//   result6 = num2 < num3 ;
//   console.log(result4, result5, result6);

// // 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// //    1. 4 > 3 = true
// //    2. 4 >= 3 = true
// //    3. 4 < 3  = false
// //    4. 4 <= 3  = false 
// //    5. 4 == 4  = true
// //    6. 4 === 4  = true
// //    7. 4 != 4   = false
// //    8. 4 !== 4  = false
// //    9. 4 != '4'  = false
// //    10. 4 == '4'  = true 
// //    11. 4 === '4'  = false
// console.log(`${4 > 3}/${4 >= 3}/${4 < 3}/${4 <= 3}/${4 == 4}/${4 === 4}/${4 != 4}/${4 !== 4}/${4 !='4'}/${4 =='4'}/${4 === '4'}`);

// //    12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.

//    let p = "Python";
//    let j = "jargon";
//    console.log(`${p.length}/${j.length}/${p == j}`);

// // 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// //    1. 4 > 3 && 10 < 12 = true
// let check = 4 > 3 && 10 < 12 ;
// console.log(check);

// //    2. 4 > 3 && 10 > 12 = false
// let check2 = 4 > 3 && 10 > 12;
// console.log(check2);

// //    3. 4 > 3 || 10 < 12 = true
// let check3 = 4 > 3 || 10 < 12;
// console.log(check3);

// //    4. 4 > 3 || 10 > 12 = true
// let check4 = 4 > 3 || 10 > 12;
// console.log(check4);

// //    5. !(4 > 3)         = false
// let check5 = !(4 > 3);
// console.log(check5);

// //    6. !(4 < 3)         = true
// let check6 = !(4 < 3);
// console.log(check6);

// //    7. !(false)         = true
// let check7 = !(false);
// console.log(check7);

// //    8. !(4 > 3 && 10 < 12)
// let check8 = !(4 > 3 && 10 < 12);
// console.log(check8);

// //    9. !(4 > 3 && 10 > 12)
// let check9 = !(4 > 3 && 10 > 12);
// console.log(check9);

// //    10. !(4 === '4')
// let check10 = !(4 === '4');
// console.log(check10);

// //    11. No hay 'on' tanto en dragon como en python

// let dragon = 'dragon'
// let python = 'python'

// console.log(!(dragon.includes('on')&&python.includes("on")));


// // 7. Utilice el objeto Date para realizar las siguientes actividades

// //    1. ¿Qué año es hoy?
let years = new Date();
let yearNow = years.getFullYear();
console.log(yearNow);

//    2. ¿Qué mes es hoy con un número?
let month = new Date();
let monthNow = month.getMonth();
console.log(monthNow);

//    3. ¿Qué fecha es hoy?


//    4. ¿Qué día es hoy con un número?
let day = new Date();
let dayNow = day.getDay();
console.log(dayNow);

//    5. ¿Cuál es la hora actual?
let hours = new Date();
let newHours = hours.getHours();
console.log(newHours);

//    6. ¿Cuántos minutos hay actualmente?
let minutes = new Date();
let minutesNow = minutes.getMinutes();
console.log(minutesNow);

//    7. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

let miliSeconds = Math.round(Date.now());
let seconds = miliSeconds / 1000;
console.log(seconds);


// ### Ejercicios: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del 
// triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

//    ```sh
//    Ingrese base: 20
//    Ingrese altura: 10
//    El área del triángulo es: 100
//    ```

// let base = prompt('ingrese la base de un triangulo');
// let altura = prompt('ingrese la altura de un triangulo');
// let calculo = base * altura;
// let area = calculo / 2;

// console.log(`el area del triangulo es:${area}`);


// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

//    ```sh
//    Ingrese lado a: 5
//    Ingrese lado b: 4
//    Ingrese lado c: 3
//    El perimetro del triangulo es: 12
//    ```

// let sideA = prompt('Ingrese el lado A de su triangulo');
// let sideB = prompt('Ingrese el lado B de su triangulo');
// let sideC = prompt('Ingrese el lado C de su triangulo');

// let perimetro = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
// console.log(`El perimetro del triangulo es:${perimetro}`);


// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo 
// (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

// let largo = prompt('ingrese el largo');
// let ancho = prompt('Ingrese el ancho');
//  let area = parseFloat(largo) * parseFloat(ancho);
//  let perimetro = (parseFloat(largo) + parseFloat(ancho)) * 2 ;

//  console.log(`El area del rectangulo es:${area} y el perimetro es:${perimetro}`);

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

// let radio2 = prompt('ingrese el radio');
// const pi = Math.round(3.14);

// let areaR =(parseFloat(pi)) ** parseFloat(radio2);
// let circunferencia = 2 * (parseFloat(pi) * parseFloat(radio2));
// console.log(`El Radio del circulo es:${areaR} y la circunferencia es:${circunferencia}`);

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
// 6. La pendiente es m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
// 7. Compare la pendiente de las dos preguntas anteriores.
// 8. Calcula el valor de y (y = x<sup>2</sup> + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.


// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

// let hoursW = prompt('Ingrese las horas trabajadas');
// let pay = prompt('Ingrese la tarifa por hora');

// let fullPay = parseFloat(hoursW) * parseFloat(pay);
// console.log(`su ganancia total es:${fullPay}`);

// //    ```sh
//    Ingrese horas: 40
//    Introduce la tarifa por hora: 28
//    Su ganancia semanal es 1120
//    ```

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
// let myName = prompt('ingrese su nombre');
// let fullName = myName.length;

// if (fullName > 7 ) {
//   console.log('Su nombre es largo');
// } else {
//   console.log('Su nombre es corto');
// }



// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

//    ```js
    // let firstName = prompt('Ingrese su nombre');
    // let lastName = prompt('Ingrese su apellido');
    
    // let nameL = firstName.length;
    // let lastNameL = lastName.length;

    // if (nameL > lastNameL) {

    //   console.log(`Tu primer nombre ${firstName}, es mas largo que tu apellido ${lastName}`);
    // } else {
    //   console.log(`Tu apellido ${lastName}; es mas largo que tu nombre ${firstName}`);
    // }
//    ```sh
//    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
//    ```

// 12. Declare dos variables _myAge_ y _yourAge_ y asignarles los valores iniciales y myAge y yourAge.

//    ```js
    
// let myAge = 250;
// let yourAge = 25;

// if (myAge > yourAge) {
//   console.log(`soy ${myAge - yourAge} años mayor que tu`);
// } else if (yourAge > myAge) {
//   console.log(`tu eres ${yourAge - myAge} años menor que yo`);
// } else {
//   console.log(`no es una edad`);
// }
//    ```sh
//    Soy 225 años mayor que tú.
//    ```

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca,
//  si no dígale que espere una cierta cantidad de años.

//    ```sh

  //  let birthDay = parseFloat(prompt('Introduzca su año de nacimiento'));
  // let yearMy = new Date().getFullYear() - birthDay;


  //  if ( yearMy >= 18 ) {
  //   console.log(`Tienes ${yearMy} años. Tienes la edad suficiente para conducir`);

  //  } else {

  //       console.log(`Tienes ${yearMy} años. Podras conducir despues de ${18 -yearMy} años`);
  //  }
  
//    Introduzca el año de nacimiento: 1995
//    Tienes 25 años. Tienes la edad suficiente para conducir.

//    Introduzca el año de nacimiento: 2005
//    Tienes 15 años. Podrás conducir después de 3 años.
//    ```




// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir
//  una persona. Supongamos que alguien vive solo cien años

//    ```sh
//    Ingrese el número de años de vida: 100
//     Viviste 3153600000 segundos.
//    ```

// let age = parseFloat(prompt('ingresa tu edad'));
// let remainingYears = 100 - age;
// let remainingSeconds = remainingYears * 365.25 * 24 * 60 * 60;
// console.log(
//   `viviste ${
//     age * 365.25 * 24 * 60 * 60
//   } segundos. tienes ${remainingSeconds} segundos mas de vida si vives 100 años`
// );

// 15. Cree un formato de hora legible por humanos usando el objeto Date.
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm
  
let dateInfo = new Date();
let year = dateInfo.getFullYear();
let monthD = dateInfo.getMonth();
let date = dateInfo.getDate();
let hoursD = dateInfo.getHours();
let minutesD = dateInfo.getMinutes();

console.log(`${year}-${monthD}-${date} ${hoursD}:${minutesD}`);
console.log(`${date}-${monthD}-${year} ${hoursD}:${minutesD}`);
console.log(`${date}/${monthD}/${year} ${hoursD}`);


// ### Ejercicios: Nivel 3

// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05