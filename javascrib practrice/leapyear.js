function year(n) {
    if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
        console.log(n + " is leap year");
    } else {

        console.log(n + " not leap year");
    }
}

console.log(year(2020));