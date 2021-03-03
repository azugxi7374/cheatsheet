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
// __proto__
Array.__proto__ === Function.prototype
String.__proto__ === Function.prototype
(()=>{}).__proto__ === Function.prototype
({}).__proto__ === Object.prototype

[].__proto__ === Array.prototype
[].__proto__.__proto__ === Object.prototype
[].__proto__.__proto__.__proto__ === null

p.__proto__ === Point.prototype
p.__proto__.__proto__ === Object.__proto__

// getPrototypeOf
Object.getPrototypeOf(p) === p.__proto__

// prototype
[].prototype === undefined
p.prototype === undefined
(()=>{}).prototype === undefined

Function.prototype instanceof Object
Point.prototype instanceof Object
Point.prototype.__proto__ === Object.prototype

// constructor
Point.prototype.constructor === Point
Point.constructor === Function
p.constructor === Point

// Object.create
// ppp ---> p ---> Point.prototype ---> Object.prototype
const ppp = Object.create(p)
ppp.__proto__ === p
ppp.constructor === Point
!(ppp.__proto__ === Point.prototype)

p.hasOwnProperty('x') === true
ppp.hasOwnProperty('x') === false

const n = null
try{ n.hasOwnProperty }catch(e){console.log(e)} // error
/*
TypeError: Cannot read property 'hasOwnProperty' of null
    at <anonymous>:1:8
*/

const n2 = Object.create(null)
n2.hasOwnProperty === undefined

(n2.__proto__ === null) === false // not Object
n2.__proto__ === undefined

try{ var u = Object.create(undefined) }catch(e){console.log(e)} // error
/*
TypeError: Object prototype may only be an Object or null: undefined
    at Function.create (<anonymous>)
    at <anonymous>:1:21
*/






