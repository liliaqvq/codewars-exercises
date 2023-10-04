function narcissistic(value) {
    // Code me to return true or false
    const stringValue = value.toString();
    const digitLen = stringValue.length;
    let digits = 0;
    let sum = 0;
    do {
        digits += 1;
        sum = sum + Math.pow((value % 10), digitLen);
        value = Math.floor(value / 10);
    } while (value / 10 > 0);
    if (sum == parseInt(stringValue)) {
        return true;
    }
    else {
        return false;
    }
}