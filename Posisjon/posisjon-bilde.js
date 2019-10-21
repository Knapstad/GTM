function() {
    var list = document.querySelectorAll('div.CardItem-image a'), // Make sure this CSS selector matches the one in the trigger
        el   = {{Click Element}};
    return [].indexOf.call(list, el) + 1;
  }