let plus_h1 = 0
let plus_h2 = 0
let plus_h3 = 0
let homeResult = 0
let total_h = 0

let plus_g1 = 0
let plus_g2 = 0
let plus_g3 = 0
let guestResult = 0
let total_g = 0

plus_h1 = document.getElementById("addh1").textContent = 1
plus_h2 = document.getElementById("addh2").textContent= 2
plus_h3 = document.getElementById("addh3").textContent = 3
homeResult = document.getElementById("h")

plus_g1 = document.getElementById("addg1").textContent = 1
plus_g2 = document.getElementById("addg2").textContent= 2
plus_g3 = document.getElementById("addg3").textContent = 3
guestResult = document.getElementById("g")

function sum_plus1(){
    total_h = plus_h1 + total_h
    homeResult.textContent = total_h
}
function sum_plus2(){
    total_h = plus_h2 + total_h
    homeResult.textContent = total_h
}
function sum_plus3(){
    total_h = plus_h3 + total_h
    homeResult.textContent = total_h
}

function sum_plus1g(){
    total_g = plus_g1 + total_g
    guestResult.textContent = total_g
}
function sum_plus2g(){
    total_g = plus_g2 + total_g
    guestResult.textContent = total_g
}
function sum_plus3g(){
    total_g = plus_g3 + total_g
    guestResult.textContent = total_g
}