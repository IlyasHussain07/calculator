var a, b, c, sum, sub, mul, div;

console.log("Start")

function addition() {
    a = parseInt(document.getElementById('text-1').value);
    b = parseInt(document.getElementById('text-2').value);
    sum = a + b;
    document.getElementById('result').value=sum;
    // console.log("The SUM of a and b : "+ sum);
}

function subtraction() {
    a = parseInt(document.getElementById('text-1').value);
    b = parseInt(document.getElementById('text-2').value);

    sub = a - b;
    document.getElementById('result').value=sub;
    // console.log("The SUB of a and b : "+ sub);
}

function multiplication() {
    a = parseInt(document.getElementById('text-1').value);
    b = parseInt(document.getElementById('text-2').value);

    mul = a * b;
    document.getElementById('result').value=mul;
    // console.log("The MUL of a and b : "+ mul);
}

function division() {
    a = parseInt(document.getElementById('text-1').value);
    b = parseInt(document.getElementById('text-2').value);

    div = a / b;
    document.getElementById('result').value=div;
    // console.log("The DIV of a and b : "+ div);
}





console.log("End");