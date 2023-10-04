function digitalRoot(n) {
    let sum = 0;
    if (Math.floor(n % 10) < 0) {
        sum = n;
        return sum;
    }
    else {
        do {
            sum += n % 10;
            n = Math.floor(n / 10);
        } while (n % 10 > 0);
        return sum;
    }
}

let output = digitalRoot(912);
console.log(output);