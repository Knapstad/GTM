function meglernavn_fra_bilde() {
    var el = {{Click Element}};
    var navn = el.parentElement.nextElementSibling.querySelector("h3").innerText
    return navn
}