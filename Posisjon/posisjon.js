function() {
    var list = document.querySelectorAll('h3.CardItem-heading a'); // Make sure this CSS selector matches the one in the trigger
    var imlist= document.querySelectorAll('div.CardItem-image');
        el   = {{Click Element}};
    if([].includes.call(list, el)){
        return [].indexOf.call(list, el) + 1;
    }
    if([].includes.call(imlist, el)){
        return [].indexOf.call(imlist, el) + 1;
    }
  }