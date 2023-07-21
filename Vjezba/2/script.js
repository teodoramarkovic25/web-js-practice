document.getElementById("dugme").addEventListener("click", dogadjaj)
function dogadjaj(){
    alert("Poruka: Zdravo");
}

function ClickUpSlika()
{
    var image = document.querySelector("#slika");

    image.src = "images.png";
}

function ClickDownSlika()
{
    var image = document.querySelector("#slika");

    image.src = "emoticon.webp"
}