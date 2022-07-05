var currentNumber = document.getElementById("currentNumber");
let contador = 0;

function increment()
{
    contador++;
    currentNumber.innerHTML = contador;

}

function decrement()
{
    contador--;
    currentNumber.innerHTML = contador;
}
