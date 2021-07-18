# Factory.js
Core capabilities of Javascript expressed in functions

## How I use Factory.js
I use Factory.js to help early CS learners understand logic and not get overwhelmed at CS-First. It also helps them to be creative to solve a problem using limited options. 

## Factory.js is Evolving
The idea is to support minimal operations in programming in functional way.

## How to Use
```js
var Factory=require("./lib/Factory")
let listofPeople=Factory.NewContainer("Harsh","John","Elizabeth","Murphy");
let nameOfCountry="India";
let getLength=Factory.Operation(nameOfCountry,()=>{return nameOfCountry.length;})
listofPeople.insert("Biblo")
Factory.Log(listofPeople.view())
```