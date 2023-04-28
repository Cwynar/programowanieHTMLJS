const fibonacciArray = [0, 1];
let i = 2;
while (i < 100) {
  fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
  i++;
}
