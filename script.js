// ? capture go from top to buttom. It capture all the event
// ? after tha it will bubble up to top and tigger the event
// ? capture:true it will run the evet at the capture state 
// ? e.stopPropagation() it will stop the target event and will not bubble up
// ? once:true it will unbind or remove the event
const divs =document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
    // e.stopPropagation(); // stop bubbling
    console.log(`Class : ${this.classList.value}`);
}

// document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // run at capture state
    once: true
}));

btn.addEventListener('click', () => {
    console.log('click');
}, { once: true});