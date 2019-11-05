
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
}

var currentvalue = getCookie("besokteleiligheter");
var leilighetsnummer = {{DLV - Prosjektnummer}};
if(!currentvalue){
currentvalue=leilighetsnummer.toString();}
if(currentvalue.length >= 900){
currentvalue.pop()};
if(!currentvalue.split(",").includes(leilighetsnummer.toString())){
var newvalue = currentvalue+","+leilighetsnummer;}
else{newvalue = currentvalue;}
document.cookie="besokteleiligheter="+newvalue;

