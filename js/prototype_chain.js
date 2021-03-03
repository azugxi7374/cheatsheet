////////////////////////////////////////////////
// instanceof
// c.f. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/instanceof
Object instanceof Function
Function instanceof Object

Array instanceof Object
Array instanceof Function

({}) instanceof Object
!(({}) instanceof Function)

[] instanceof Array
[] instanceof Object
!([] instanceof Function)

function Point(x,y){ this.x=x, this.y=y; }
Point instanceof Object
Point instanceof Function

const p = new Point(2,3)
p instanceof Point
p instanceof Object
!(p instanceof Function)

const p_not_new = Point(4,5)
p_not_new === undefined


////////////////////////////////////////
// __proto__ and prototype
Array.__proto__ === Function.prototype
String.__proto__ === Function.prototype
(()=>{}).__proto__ === Function.prototype
({}).__proto__ === Object.prototype

[].__proto__ === Array.prototype
[].__proto__.__proto__ === Object.prototype
[].__proto__.__proto__.__proto__ === null

p.__proto__ === Point.prototype
p.__proto__.__proto__ === Object.__proto__

[].prototype === undefined
p.prototype === undefined
(()=>{}).prototype === undefined

Function.prototype instanceof Object

Point.prototype instanceof Object
Point.prototype.__proto__ === Object.prototype




Point.__proto__ === Function.prototype


// TODO getPrototypeOf
//
//
