function isPrime(num) {
  sRoot = Math.sqrt(num);
  for (let i = 2; i <= sRoot; i++) if (num % i === 0) return false;
  return num > 1;
}

function findPrimeTriplets() {
  const twoDigitPrimes = [];
  for (let i = 11; i <= 99; i++) {
    if (isPrime(i)) {
      twoDigitPrimes.push(i);
    }
  }

  for (let i = 0; i < twoDigitPrimes.length; i++) {
    for (let j = i + 1; j < twoDigitPrimes.length; j++) {
      for (let k = j + 1; k < twoDigitPrimes.length; k++) {
        const a = twoDigitPrimes[i];
        const b = twoDigitPrimes[j];
        const c = twoDigitPrimes[k];
        const avgAB = (a + b) / 2;
        const avgAC = (a + c) / 2;
        const avgBC = (b + c) / 2;
        const avgAll = (a + b + c) / 3;
        if (isPrime(avgAB) && isPrime(avgAC) && isPrime(avgBC) && isPrime(avgAll)) {
          return [a, b, c];
        }
      }
    }
  }
  return null;
}

console.log(findPrimeTriplets());
