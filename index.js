var assert = require("assert");

//EJERCICIO 1
function multiplicacion(arr, num){
  var total =0;
  if(Array.isArray(arr)){
      total = arr.reduce(function(a, b){
         return a * b;
      });
  }
  else{
    if(!isNaN(arr)){
      total = arr;
    }
  }

  if(!isNaN(num)){
    total = num*total;
  }
  return total;
}

//EJERCICIO 2
function numCelular(arr,num){
    var resultado = arr.filter(function(item){
        item=item.toString();
        num=num.toString();
        if(item.substr(0,3) == num || item.substr(-3) ==num ){
          return true;
        }
        else{
          return false;
        }
    });
  return resultado;
}

//EJERCICIO 3
function multiploNumero(arr,num){
  var arreglo=[];
  arr.forEach(function(element) {
      resultado= element % num;
      if(resultado==0){
        arreglo.push(element);
      }
  });
  return arreglo;
}

//EJERCICIO 4
function doblesNumeros(arr){
   var doubles = arr.map(function(x) {
   return (x * 2)+1;
  });
  return doubles;
}

//EJERCICIO 5
function convertCelToFare(arr) {
    var x;
    var resultado = [];
    var celToFar = arr.map(function(element){

        resultado.push(element * 9 / 5 + 32);
    });
    return resultado;
}

//EJERCICIO 6
function multiplicarArreglo (arr){
    var total = arr.reduce(function(a, b){ return a * b; });
    return total;
}

//EJERCICIO 7
function calcularDateNacimiento (arr){
 var dateActual=2017;
 var mayorEdad =18;
 var dateNacimiento=0;
 var resultado=[];
 arr.forEach(function(element){
   if(element % 2 == 0 && element >= mayorEdad){
     dateNacimiento=dateActual - element;
     resultado.push(dateNacimiento);
   }
 });
  return resultado;
}

//PRUEBAS UNITARIAS
describe("Ejercicios Arrays", function(){
  //EJERICIO 1
  describe("Funcion multiplicacion", function(){
    it("Prueba de [4,4,5,12] y 9", function(){
        assert.equal(8640,multiplicacion([4,4,5,12],9));
    });
    it("Multiplicacion de array y string", function(){
        assert.equal(6,multiplicacion([2,3],"Hola"));
    });
    it("Multiplicacion de 2 y 3", function(){
        assert.equal(6,multiplicacion(2,3));
    });
  });

  //EJERICIO 2
  describe("Funcion Celulares", function(){
    it("Celulares Validos con 9 numeors", function(){
        assert.deepEqual([784123123,355676784],numCelular([784123123,355676784,3423543554],784));
    });
    it("Celulares con menos de 9 numeros", function(){
        assert.deepEqual([784123123,35676784],numCelular([784123123,35676784,3423543554],784));
    });
  });

  //EJERICIO 3
  describe("Funcion Multiplo de un Numero", function(){
    it("Multiplos", function(){
        assert.deepEqual([7,21,77,35],multiploNumero([7,21,44,80,77,35],7));
    });
  });

  //EJERICIO 4
  describe("Funcion Dobles", function(){
    it("Array Doble", function(){
        assert.deepEqual([5,11,15,5,7,17,21],doblesNumeros([2,5,7,2,3,8,10]));
    });
  });

  //EJERICIO 5
  describe("Convertir Celcius a Farenheit", function(){
    it("numero de Celcius a Farenheit", function(){
        assert.deepEqual([53.6, 57.2, 59, 60.8],convertCelToFare([12,14,15,16]));
    });
  });

  //EJERICIO 6
  describe("Multiplicar arreglo", function(){
    it("Multiplicar los valores", function(){
        assert.equal(24,multiplicarArreglo([1,2,3,4]));
    });
  });

  //EJERICIO 7
  describe("Calcular año de nacimiento", function(){
    it("Ingresa arreglo con edad sale arreglo con año de nacimiento", function(){
        assert.deepEqual([1997],calcularDateNacimiento([20,16,89,6]));
    });
  });

});
