/* get all elements */ 
const searchInput = document.querySelector('#search');
const btnMsg = document.querySelector('.btn_msg');
const ajouterMsg = document.querySelector('.ajouter_msg');

/* create events onclick */
btnMsg.onclick = function () {

/* get value from input */ 
    const inputValue = searchInput.value;

/* inject a msg value from HTML */ 
    ajouterMsg.innerHTML = inputValue;

/* empty value from input */ 
    searchInput.value = "";
} 