
var opcion= parseInt(prompt("->Esta es una calculadora<-\n elige tu opcion segun el menu \n 1. Suma \n 2. Resta \n 3. Multiplica \n 4. Divide \n por favor ingresa un numero"));

var num1=parseInt(prompt("Ingrese el primer digito"));
var num2=parseInt(prompt("Ingrese el segundo digito"));

switch (opcion) {
    case 1:
        var suma = num1 + num2;
        document.write("El resultado de la suma es: " + suma);
        break;
    case 2:
        var resta = num1 - num2;
        document.write("El resultado de la resta es: " + resta);
        break;
    case 3:
        var multiplica = num1 * num2;
        document.write("El resultado de la multiplicacion es: " + multiplica);
        break;
    case 4:
        var divide = num1 / num2;
        document.write("El resultado de la divicion es: " + divide);
        break;

    default:
        document.write("Los datos ingresados son erroneos");
        break;
}



