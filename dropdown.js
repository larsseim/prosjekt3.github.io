window.onclick = function(event) 
{
    var cont = document.getElementsByClassName("dropdown-container");
    if (event.target.className == "dropdown-button")
    {
        cont[0].style.display = "flex";
    }
    else 
    {
        cont[0].style.display = "none";
    }
}