function provjera(){
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var korisnickoIme = document.getElementById("korisnickoIme").value;
    var adresa = document.getElementById("adresa").value;
    var lozinka = document.getElementById("lozinka").value;
    var potvrdaLozinke = document.getElementById("potvrdaLozinke").value;
    var indeks = document.getElementById("brIndeksa").value;

    var stanje = true;

    if(ime == "" || prezime == "" || korisnickoIme == "" || adresa == "" || lozinka == "" || potvrdaLozinke == "" || indeks == ""){
        alert("Niste unijeli sve podatke");
        stanje = false;
    }
    if(lozinka != potvrdaLozinke){
        alert("Lozinke se ne poklapaju")
        stanje = false;
    }
    if(stanje){
        window.open("registruj.html");
    }
}


function prijaviSe(){
    window.open("prijava.html");
}