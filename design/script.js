function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

setTimeout(function(){
    var vrau = document.querySelector('vrau');
    trocaClasse(vrau, 'Azul', 'verde');
}, 357);


let ratings = document.querySelectorAll('.circle');
let btn = document.getElementsById('btn');
let thankYou = document.querySelector('.thankYou');

for (let i = 0;i < ratings.length; i++) {
    let rating = ratings[i].innerHTML;

    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.contains('selected')
    }
}

const getbtn = document.getElementsByClassName('.vrau');
getbtn.addEventListener ("click", myfunction);

function myfunction() {
    document.getElementById("demo").innerHTML = "stay away";
}
