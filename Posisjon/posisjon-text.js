function posisjon_text(){
    var list = document.querySelectorAll('h3.CardItem-heading a'), // Make sure this CSS selector matches the one in the trigger
        el   = {{Click Element}};
    return [].indexOf.call(list, el) + 1;
  }

