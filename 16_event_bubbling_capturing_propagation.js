//Event bubbling👇

let div = document.querySelector("div")
let button = document.querySelector("button")

div.addEventListener("click",  () => {
    console.log("div clicked")
})

button.addEventListener("click",  (event) => {
    event.stopPropagation();    //stop propagation
    console.log("button clicked")
})

button.addEventListener("click",  (event) => {
    event.stopImmediatePropagation(); //immediate propagation
    console.log("button1 clicked")
})

//output:
//button clicked
//div clicked


//Event capturing👇

// div.addEventListener("click",  () => {
//     console.log("div clicked")
// },true)

// button.addEventListener("click",  () => {
//     console.log("button clicked")
// },true)


//output:
//div clicked
//button clicked