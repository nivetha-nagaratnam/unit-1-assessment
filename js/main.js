
let output = 0


let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let input = document.getElementById('input');
let display = document.getElementById('display');

init()

function init() {

display.innerHTML = 0
display.style.color = "black";

}

function Add() {

    plusButton.addEventListener('click',function(evt){

        output = output + Number(input.value)
        display.innerHTML = output

        if  (Math.sign(output) === -1)    {

            display.style.color = "red";
        } else  {
            display.style.color = "black";
        }

        
    });

}

Add()

function Subtract()   {

    minusButton.addEventListener('click',function(evt){

        output = output - Number(input.value)
        display.innerHTML = output

        if  (Math.sign(output) === -1)  {

            display.style.color = "red";
        }   else  {
            display.style.color = "black";
        }

    });
    
}

Subtract()








