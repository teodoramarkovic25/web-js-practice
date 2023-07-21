var h2 = document.getElementById("h2");
function promjena(){
    h2.innerHTML = "Ooops";
}

function velikaSlova(){
    var ime = document.getElementById("ime");
    ime.value = ime.value.toUpperCase();
}

function over(obj){
    obj.innerHTML = "AAAA"
    obj.style.backgroundColor = "red";
}

function out(obj){
    obj.innerHTML = "DDDD";
    obj.style.backgroundColor = "green";
}

function down(obj){
    obj.style.backgroundColor = "blue";
    obj.innerHTML = "Zdravo";
}

function up(obj){
    obj.style.backgroundColor = "yellow";
    obj.innerHTML = "Dovidjenja";
}