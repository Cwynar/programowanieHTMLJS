//zadanie 1
var a = 20;
var b = 10;

//dodawanie
let addR = a + b;
console.log(addR);
document.getElementById("add").innerHTML=addR;

//odejmowanie 
let subtractR = a - b;
console.log(subtractR);
document.getElementById("sub").innerHTML=subtractR;

//możenie 
let multiplyR = a * b;
console.log(multiplyR);
document.getElementById("multi").innerHTML=multiplyR;

//dzielenie 
let divideR = a / b;
console.log(divideR);
document.getElementById("div").innerHTML=divideR;

//zadanie 2
var s1 = 5;
var s2 = 6;
var s3 = 7;

var p = (s1+s2+s3)/2
var area=Math.sqrt(p*(p-s1)*(p-s2)*(p-s3))

console.log(p);
console.log(area);

document.getElementById("ppp").innerHTML=p;
document.getElementById("area").innerHTML=area;

//zadanie 3

var n = 10;
var randomNumber = Math.ceil(Math.random()*n);
var guess = prompt("Zgadanij liczbe z przedziału 1 - 10");

if(guess == randomNumber){
    console.log("Dobra robota!!!");
    document.getElementById("result").innerHTML="Dobra robota!";
  }else{
    console.log("Niestety, to nie ta liczba:((. Spróbuj pownownaie");
    document.getElementById("result").innerHTML="Niestety, to nie ta liczba:((. Spróbuj ponownie. Prawidłowa liczba to:"+randomNumber;
  }

//zadanie 4
var first = prompt("Podaj pierwszą liczbę: ");
var second = prompt("Podaj drugą liczbę: ");
var third = prompt("Podaj trzecia liczbę: ");

var numMax = Math.max(first,second,third);

console.log("Najwieksza liczba to: "+numMax)

//zadanie 8
function czas(){
    const dzis = new Date();
    const godz = dzis.getHours();
    const min = dzis.getMinutes();
    const sek = dzis.getSeconds();

    const tyg = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const dzien = dzis.getDate();
    const msc = dzis.getMonth() +1;
    const rok = dzis.getFullYear();

    const czasElement = document.getElementById("zegar");
    czasElement.innerHTML = tyg[dzis.getDay()] + ", " + dzien+"."+ msc+"."+ rok + "<br>" + godz + ":" + (min < 10 ? "0" + min : min) + ":" + (sek < 10 ? "0" + sek : sek);

}

setInterval(czas, 1000);