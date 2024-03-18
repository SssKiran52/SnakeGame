var hor=0;
var ver=0;

function right(){
    hor++;
    document.getElementById("snake").style.left=hor+"%"
    document.getElementById("snake").style.transform="rotate(0deg)"
}
function left(){
    hor--;
    document.getElementById("snake").style.left=hor+"%"
    document.getElementById("snake").style.transform="rotate(180deg)"
}
function up(){
    ver++;
    document.getElementById("snake").style.bottom=ver+"%"
    document.getElementById("snake").style.transform="rotate(-90deg)"
}
function down(){
    ver--;
    document.getElementById("snake").style.bottom=ver+"%"
    document.getElementById("snake").style.transform="rotate(90deg)"
}