

// for (let i=0; i<=5; i++){
//     const para = document.createElement('p');
//     para.textContent = i + '. Sample text';
//     para.classList.add('highlight');
//     sect.appendChild(para);
// }

// sect.appendChild(linkPara.cloneNode(true));
// //sect.removeChild(linkPara);

Clock
const clock = document.querySelector('.clock');
setInterval(  
    () => clock.innerText =( (new Date()).toLocaleTimeString(), 
1000) + ' Lviv Local Time');


//Calculator

const display = document.querySelector('.display');

// const digitsOper = document.querySelectorAll('.digits button, .operations button');// all buttons are assigned to the arr digitsOper[]
// digitsOper.forEach(digit => digit.addEventListener ('click', digitOperPressed));
$('.digits button, .operations button').click(digitOperPressed);

function digitOperPressed (e) {
    e.preventDefault();//prevent from sending form to server
    display.value += e.target.innerText;//target is the clicked button 
} 

const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e){
    e.preventDefault();
    display.value = eval(display.value);
}

const clearC = document.querySelector('.clearC');
clearC.addEventListener('click', clearPressed);

function clearPressed(e) {
    e.preventDefault();
    display.value = display.value = '';
}

const percent = document.querySelector('.percent');
percent.addEventListener('click', percentPressed);

function percentPressed (e) {
    e.preventDefault();
    let previousVal = eval(display.value) 
    display.value = (eval(display.value)) / 100;
}





document.querySelector('.click-me')
    .addEventListener('click', showAlert);
    function showAlert () {
        alert('Button is clicked!');
    } 


   
