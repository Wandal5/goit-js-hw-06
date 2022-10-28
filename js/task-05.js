const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');
let nameBase = 'незнакомец';

const onInput = ({currentTarget}) =>{
    nameText.textContent = currentTarget.value;
    
    if (nameText.textContent === "") {
        nameText.textContent = 'Anonymous';
    }
       ;
    }
    


nameType.addEventListener('input', onInput);