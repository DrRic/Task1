function showMenu() {
    console.log("here");
    var x = document.getElementById("mainTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function loadSnippet(fileName){
    console.log(fileName);
    $("#div1").load("snippets/"+fileName+".html");
}
loadSnippet("home")