let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('.button'); // Asegúrate que tus botones tengan la clase 'button'

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === 'AC') {
            string = '';
            inputbox.value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputbox.value = string;
        } else if (button.id === 'plusMinus') {
            string = (-eval(string)).toString();
            inputbox.value = string;
        } else if (value === '=') {
            string = eval(string).toString();
            inputbox.value = string;
        } else {
            string += value;
            inputbox.value = string;
        }
    });
});