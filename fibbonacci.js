function  nthFibonacci(n) {
    if(n <=1) return n;

    return nthFibonacci(n - 1) +  nthFibonacci(n - 2)
}

console.log(nthFibonacci(10));