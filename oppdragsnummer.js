function oppdragsnummer(){
    xpath="//h3[text()='Oppdragsnummer' or text()='oppdragsnummer']";
    oppdragsNummerElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    oppdragsTekst= oppdragsNummerElement.parentElement.querySelector(".AccordionBlock-container").textContent;
    cleanOppdragsTekst = parseInt(oppdragsTekst.match(/\d+/));
    return cleanOppdragsTekst;
}
