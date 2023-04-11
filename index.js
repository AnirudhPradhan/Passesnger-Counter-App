// let firstbatch= 5
// let count=firstbatch
// console.log(count)

// let myage= 20
// let humandogratio = 7/1
// let mydogage= myage* humandogratio
// console.log(mydogage)

// let count=5
// count+=1
// console.log(count)

// let bonuspoint=50
// bonuspoint += 50
// bonuspoint -= 75
// bonuspoint += 45
// console.log(bonuspoint)

// function increment(){
//     console.log("Button was click")
// }

// functions 

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// let count=0
// function addition(){
//     count+=1
//     console.log(count)
// }
// addition()
// addition()
// addition()

let countEl = document.getElementById("number")
let saveEl= document.getElementById("save-el")
let count=0
function increment(){
    count += 1
    countEl.innerHTML= count
}

function save(){
    let countstr= count + " - "
    saveEl.innerHTML += countstr
    countEl.innerHTML=0
    count=0
}