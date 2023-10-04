// return masked string
function maskify(cc) {
    const uncovered = 4;
    let ccString = cc.toString();
    let ccLen = ccString.length;
    let ccMask = '';
    if (ccLen > uncovered) {
        for (let i = 0; i < ccLen - uncovered; i++) {
            ccMask += '#';
        }
        return ccMask + ccString.substring(ccLen - uncovered);
    }
    else {
        return ccString;
    }
}

let output = maskify(987654321);
console.log(output);
