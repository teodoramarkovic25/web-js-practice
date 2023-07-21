function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "admin"){
        alert("Uspejsno logovanje");
        return false;
    }
    else{
        alert("Neuspejesno logovanje");
    }
}

function reset(){
    var username = document.getElementById("username").value = "";
    var password = document.getElementById("password").value = "";
}