function oppdragsnummer(){
    var xpath="//h3[text()='Oppdragsnummer' or text()='oppdragsnummer']";
    var oppdragsNummerElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var oppdragsTekst= oppdragsNummerElement.parentElement.querySelector(".AccordionBlock-container").textContent;
    var cleanOppdragsTekst = parseInt(oppdragsTekst.match(/\d+/));
    return cleanOppdragsTekst;
}
