function rekniahoj() {
    console.log ("dobrý den cestovateli");
}

rekniahoj();
rekniahoj();

let pozdrav = "Pozdrav!"
function ukazpozdrav() {
    console.log(pozdrav)
}

function testlocal() {
    let localvalue = 123;
    console.log(localvalue)
}

ukazpozdrav();
testlocal();

if(true) {
    var y = "var blok nerespektuje";
}
console.log(y);

function sayhello(name) {
    console.log("Ahoj" + name);
}

sayhello("Kubo");

function addnumber(n1,n2) {
    console.log(n1+n2)
    console.log(n1-n2)
    console.log(n1*n2)
    console.log(n1/n2)
}

addnumber(11,4);