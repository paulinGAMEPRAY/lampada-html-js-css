const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const reset = document.getElementById("reset");
const lamp = document.getElementById("lamp");

function lampReset () {
    lamp.src = './img/desligada.jpg';

}

function isLampBroken () {
    return lamp.src.indexOf ("quebrada" ) > -1
}

function lampOn () {
    if (!isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if(!isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff);
reset.addEventListener( 'click', lampReset);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);