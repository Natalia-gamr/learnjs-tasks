// Странный instanceof

function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B);

// instanceof учитывает только prototype