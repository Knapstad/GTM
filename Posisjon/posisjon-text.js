function posisjon_text(){
    var list = document.querySelectorAll('h3.CardItem-heading a');
        el   = {{Click Element}};
    return [].indexOf.call(list, el) + 1;
}