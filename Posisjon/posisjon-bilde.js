function posisjon_bilde(){
    var list = document.querySelectorAll('div.CardItem-image a');
        el   = {{Click Element}};
    return [].indexOf.call(list, el) + 1;
  }