'use strict'
//console.log(window)
//console.log(navigator)
//console.log(screen)
//sconsole.log(document)

// document.getElementById("parent-id");
// document.getElementsByTagName("UL")[0];
// document.querySelectorAll("p");
// document.getElementsByClassName("test");
// const link = document.querySelector('a');
// const sect = document.querySelectorAll('section');

//const element = document.getElementById("pelement");
//console.log(element)
//console.log(kazkas)

let kazkas = document.getElementById("pelement"); //sulinkinam elementa su id html
let randoms = document.createElement('random')

kazkas.textContent = 'Mozila Developer network';
kazkas.href = 'https://developer.mozilla.org';
kazkas.appendChild(randoms);

//
let reset = document.getElementById("reset")
let masyvas = document.querySelectorAll("p")// gauname elementa kaip masyva
for(let i = 0; i<masyvas.length; i++){ // ciklas nes masyvas
    masyvas[i].style.color = "red";
    masyvas[i].style.fontSize = "25px";
    masyvas[i].style.background = "blue";
    masyvas[i].style.width = "250px";
}

const mygtukas = document.getElementById("button");
//mygtukas.addEventListener("click", modifyText); // dadeda jau paruosta teksta i ekrana

function modifyText(){
    const info = document.querySelector('#sections');
    info.innerHTML+='<p style="color: red; font-size: 25px; background: blue; width: 250px;">Informacija</p>';
}


const button = document.getElementById("button");
const inputval = document.getElementById("textarea");
let manodiv = document.getElementById("sections");

//button.addEventListener("click", addreiksme);

function addreiksme(){
    const vietinis = document.createElement("p");
    vietinis.innerText = inputval.value;
    manodiv.appendChild(vietinis);
}

//pakeicia viskas kas yra p elemente
mygtukas.addEventListener("click", modifycolor);
reset.addEventListener("click", resetstyle)
function modifycolor(){
    for(let i = 0; i<masyvas.length; i++){
        masyvas[i].style.color = "white";
        masyvas[i].style.fontSize = "20px";
        masyvas[i].style.background = "red";
        masyvas[i].style.width = "250px";
    }
}

// nuresetina i tai kas buvo pradzioje
function resetstyle(){
    for(let i = 0; i<masyvas.length; i++){ // ciklas nes masyvas
        masyvas[i].style.color = "red";
        masyvas[i].style.fontSize = "25px";
        masyvas[i].style.background = "blue";
        masyvas[i].style.width = "250px";
    }
}








