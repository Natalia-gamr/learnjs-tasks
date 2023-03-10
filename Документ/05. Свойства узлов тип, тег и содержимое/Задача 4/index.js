// Где в DOM-иерархии "document"?
// важность: 4
// Объектом какого класса является document?  HTMLDocument

// Какое место он занимает в DOM-иерархии?

// Наследует ли он от Node или от Element, или может от HTMLElement? наследует от Node

alert(document) // [object HTMLDocument]
alert(HTMLDocument.__proto__.name) // Document
alert(HTMLDocument.__proto__.__proto__.name) // Node

