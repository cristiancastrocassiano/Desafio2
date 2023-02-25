'use strict';

const imagen = document.getElementById("bills");
const container = document.getElementById("container");

imagen.addEventListener('click', ()=>{
    if(container.classList.contains('bordeOculto')){
        container.classList.remove('bordeOculto');
        container.classList.add('bordeVisible');
    }else if(container.classList.contains('bordeVisible')){
        container.classList.remove('bordeVisible');
        container.classList.add('bordeOculto');
    }
});



const btnVerificar = document.getElementById('btnVerificar');

btnVerificar.addEventListener('click', ()=>{
    const num1 = parseInt(document.getElementById('numinosuke1').value);
    const num2 = parseInt(document.getElementById('numinosuke2').value);
    const num3 = parseInt(document.getElementById('numinosuke4').value);
    const suma = (num1 + num2 + num3);
    const text = document.getElementById('textnum');
    if (suma <= 10){
        text.innerHTML = "llevas "+suma+" stickers";
    }else{

        text.innerHTML = "LLevas demasiados stickers";
    }
});


const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener('click', ()=>{
    const pass1 = parseInt(document.getElementById('password1').value);
    const pass2 = parseInt(document.getElementById('password2').value);
    const pass3 = parseInt(document.getElementById('password3').value);
    const text2 = document.getElementById('textPass');
     if (pass1 === 9 && pass2 === 1 && pass3 === 1){
        text2.innerHTML = "password 1 correcta";
     }else if(pass1 === 7 && pass2 === 1 && pass3 === 4){
        text2.innerHTML = "password 2 correcta";
     }else{
        text2.innerHTML = "password incorrecto";
     }
});