var i = 0;
const max = 1000;

function isPrime(i) {
  for (var c = 2; c <= Math.sqrt(i); ++c) {
    if (i % c === 0) {
        console.log(i + " is not prime");
        return;
     }
  }
  console.log(i + " is prime");
}

function timedIsPrime(i) {
  setTimeout(function() {
    isPrime(i * (2000000 * Math.random()));
    i++;
    if (i < max) {
      timedIsPrime(i);
    }
  }, 1);
}

function testPrimes() {
  i = 0;
  timedIsPrime(i);
}

var testPrimesButton = document.getElementById("test-primes");
testPrimesButton.addEventListener("click", testPrimes, false);