// Your code goes here

//1 Mouseover <h1> yellow up
const headerH1 = document.querySelector('h1');
console.log(headerH1
    );
    headerH1.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'yellow'; 
    });
    headerH1.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = 'white';
    });

//2 Keydown <h4> "Sign Me Up!" 
//First note I'm using <div class="btn>Sign Me Up!</> as <button id = "launchButton">Launch!</button> from web guided project.I want to use "Esc" key 27 to leave/exit a modal as my Keydown e. To make it easy for myself I added the ID "LaunchButton".

//So... isolate all <div class="btn"> and assign id="signMeUpBtn" 
const divBtns = document.querySelectorAll('div.btn');
for (let i = 0; i<divBtns.length; i++){
    divBtns[i].setAttribute('id', "signMeUpBtn");
}
console.log(`div btn`,divBtns);
console.log(divBtns[1]);

//Handle click events on signMeUpBtn
//first step isolate all <buttons> with #signMeUpBtn ids just created above
const signMeUpBtn = document.querySelectorAll('#signMeUpBtn');
console.log(`Sign Me Up ID's`,signMeUpBtn);
console.log(`just one`, signMeUpBtn[1]);
//next generic function when they are clicked
signMeUpBtn.forEach(ele => {
    ele.onclick = function (e) {
    console.log(`${e.target.nodeName}`);
};} );

// this part is just for me to track bubbling
signMeUpBtn.forEach(elem => {
    elem.addEventListener('click', function (e){
        console.log(`${e} NEW WAY `);
        console.log(`
        Event: TimeStamp ${Math.floor(e.timeStamp / 1000)}, 
        Event: Type ${e.type}, 
        Event: Target ${e.target.nodeName}
        `);
    });
});

// A -Buttons
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');

// B- MESSAGES
const successMessage = document.querySelector('h1.success');
const failureMessage = document.querySelector('h1.failure');

// C- MODAL
const modal = document.querySelector('div.modal');

// Next I set up a modal with a Parent div defaulted to off
const newParentDivModal = document.createElement('div');
newParentDivModal.classList.add('modal');
newParentDivModal.classList.add('off');
console.log(newParentDivModal);

//added a child1 div for opacity 
const divChild1 = document.createElement('div');
divChild1.classList.add('modal-opacity');
newParentDivModal.appendChild(divChild1);
console.log(divChild1);

//Added a child2 div for modal dialog
const divChild2 = document.createElement('div');
divChild2.classList.add('modal-dialog');
newParentDivModal.appendChild(divChild2);
console.log(divChild2);

//Add h4 message "Are You Sure?" append to div dialog
const messageSure = document.createElement('h4');
messageSure.setAttribute('id', "youSure");
divChild2.appendChild(messageSure);
messageSure.textContent = "Are You Sure?";
console.log(messageSure);

//Add ConfirmationButton Yes & append to div dialog
const buttonY = document.createElement('button');
buttonY.setAttribute('id', "confirmationButton");
buttonY.textContent= `Yes, let's rock`;
divChild2.appendChild(buttonY);
console.log(buttonY);

//Add CancelButton No & AppendChild to div dialog
const buttonN = document.createElement('button');
buttonN.setAttribute('id', "cancelButton");
buttonN.textContent = "No take me back";
divChild2.appendChild(buttonN);
console.log(buttonN);

//Add <h1 class="report success off">
const reportSuccessOffh1 = document.createElement('h1');
reportSuccessOffh1.classList.add('report');
reportSuccessOffh1.classList.add('success');
reportSuccessOffh1.classList.add('off');
reportSuccessOffh1.textContent = "Signed Up --> Coming Soon!";
console.log(reportSuccessOffh1);

//Add <h1 class="report failure off">
const reportfailureOffh1 = document.createElement('h1');
reportfailureOffh1.classList.add('report');
reportfailureOffh1.classList.add('failure');
reportfailureOffh1.classList.add('off');
reportfailureOffh1.textContent = "Process Canceled. You are NOT signed up!";
console.log(reportfailureOffh1);

//MAY use this to set up separate messages
// const signMeUph4 = document.querySelectorAll('h4');
// console.log(signMeUph4);
// signMeUph4.forEach((elem) => {
//     elem.classList.add('launchAlert');
// });
// signMeUph4[0].classList.add('message0');
// signMeUph4[1].classList.add('message1');
// signMeUph4[2].classList.add('message2');

document.addEventListener('click', function(event) {
    if (event.target === signMeUpBtn) {
        console.log('clicked on the launch button');
    } else {
        console.log('click somewhere else');
    }
});
function launchModal() {
    //show modal
    modal.classList.remove('off');
    //remove old success/failure message
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
}

launchButton.addEventListener('click', launchModal);
