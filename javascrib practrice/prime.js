function prime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not prime";
            break;
        }
    }
    return "Prime";
}

console.log(prime(15));