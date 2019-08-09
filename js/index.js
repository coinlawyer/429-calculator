
//Calculator
//      + 1-to clear display after errror notice by click on any other btn of digitsOper
//      + 2-to add clearLastEl button
//      + 3-to change to opposite operator by click on it if the last element is operator.
// 4-to add memory button
//      + 5-to deny add '0' when the only elem == '0'
// 6-to fix % funtion  
// 7-to fix multiple usage of '.'
//.... and many others...

const display = document.querySelector('.display');
const errorMessage = 'You can`t divide by "0"!';
const lastChar = display.value.slice(-1);// or .replace(/.$/," ") or string.substring (from, to)

const operButtons = document.querySelectorAll('.operations button');
operButtons.forEach(digit => 
digit.addEventListener('click', changeOperButtons));
function changeOperButtons(e){
    const lastChar = display.value.slice(-1);// or .replace(/.$/," ") or string.substring (from, to)
    e.preventDefault();
        for (let i=0; i<operButtons.length; i++) {
            if (operButtons[i].innerText.includes(lastChar)) {
            display.value = display.value.slice(0, -1); 
        }
    }
}


const digitsOper = document.querySelectorAll('.digits button, .operations button'); // all buttons are assigned to the arr digitsOper[]
digitsOper.forEach(digit => 
digit.addEventListener('click', digitOperPressed));
function digitOperPressed(e) {
    e.preventDefault(); //prevent from sending form to server
    switch(display.value) {
        case(errorMessage):  
        case('undefined'):
        case(isNaN(display.value)): 
            display.value = e.target.innerText;
            break;
        case ('0'):
            display.value = display.value.slice(0, -1); 
            break;
        case ((display.value.includes('.'))&&(e.target.innerText==='.')):
                display = display.value.slice(0, -1);
                break;
        default:
            display.value += e.target.innerText; //target is the clicked button 
    }
}

const equal = document.querySelector('.equalBtn');
equal.addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    eval(display.value) !== Infinity ?
        display.value = eval(display.value) :
        display.value = errorMessage;
}

const clearC = document.querySelector('.clearC');
clearC.addEventListener('click', clearPressed);
function clearPressed(e) {
    e.preventDefault();
    display.value = '';
}

const clearElem = document.querySelector('.clearEl');
clearElem.addEventListener('click', clearEleemPressed);
function clearEleemPressed (e) {
    e.preventDefault();
    display.value = display.value.slice(0, display.value.length-1) ;
}


const percent = document.querySelector('.percent');
percent.addEventListener('click', percentPressed);
function percentPressed(e) {
    e.preventDefault();
    display.value.scile(-1) === operButtons.innerText ?
        display.value = eval(display.value.scile(-1) / 100) :
        display.value = (eval(display.value)) / 100;
}

    // const IsOper = function(e){
    //     for (let i=0; i<operButtons.length; i++) {
    //         if (operButtons[i].innerText.includes(lastChar)) {
    //             return IsOper = true;
    //         }
    //     }
    // }

    