function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
}
(function(){
    var currentvalue = getCookie("besokteleiligheter");
    if(!currentvalue){
            currentvalue="12365478"};
    var leilighetsnummer = 222123111;
    if(!currentvalue.split(",").includes(leilighetsnummer.toString())){
        var newvalue = currentvalue+","+leilighetsnummer;}
    else{newvalue = currentvalue;}
    document.cookie="besokteleiligheter="+newvalue;})