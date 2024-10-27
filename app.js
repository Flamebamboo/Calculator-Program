const display = document.getElementById("display");

let isCalculatorOn = false


function updateDisplayState(state) {
    display.classList.remove('error', 'on', 'off', 'active')

    if(state){
        display.classList.add(state);
    }
}

function turningOn() {
    if (!isCalculatorOn) {
        isCalculatorOn = true;
        display.value = "FlameBamboo Presents";
        display.classList.remove('error')
        updateDisplayState('on');

        setTimeout(() => {
            display.value = ""; 
            updateDisplayState('active')
        }, 1000);
    }
}


function turningOff(){
    isCalculatorOn = false;
    display.value = "Bye Thanks For Using".toUpperCase();
    updateDisplayState('off')

    setTimeout(() => {
        display.value = "";
        updateDisplayState('active')

    }, 1000);
}
function appendToDisplay(input){
    if(isCalculatorOn){
        if(display.value === "Error".toUpperCase()){
            display.value = " ";
        }
        display.value += input;
    }
    else {
        display.value = "turn on first".toUpperCase();
        setTimeout(() => {
            display.value = "";
            updateDisplayState('active')
    
        }, 1000);
    }

   
}


function clearDisplay(input){
    display.value = " ";
}




function calculateResult(input){

    if(isCalculatorOn){
        try{
            display.value = eval(display.value);
            updateDisplayState('active');
        }
        catch(error){
            display.value = "Error";
            updateDisplayState('error')
        }

    }

    else {
        display.value = "turn on first".toUpperCase();
        setTimeout(() => {
            display.value = "";
            updateDisplayState('active')
    
        }, 1000);
    }
        
}

function deleteInput() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);


}


