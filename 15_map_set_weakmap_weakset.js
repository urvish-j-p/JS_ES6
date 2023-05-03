//set
//it contains only unique values
//object contructor

let myArray = [1,2,3,4]
let obj = new Set(myArray);
obj.add(5)
obj.delete(5)
console.log(obj)



//map
//it contains key value pair

let myMap = new Map([['name','john'],['age',23]])
myMap.set("name2","Urvish")
myMap.delete("name2")
console.log(myMap)

for(let [key, value] of myMap){
    console.log(key,value)
}



//WeakSet
//it contains only objects
//it cannot be iterated

let ws = new WeakSet();
var ob1={"name":"Urvish"};
var ob2={"roll":1};
ws.add(ob1)
ws.add(ob2)
console.log(ws)



//WeakMap

let wm = new WeakMap();
var ob3={};
var ob4={};
wm.set(ob3,"Private")
wm.set(ob4,"Private data")
console.log(wm)