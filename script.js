

const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
var hasError = false;

function addDigit(thisSign) {           // lägg till siffra
    elemCalcScreen.innerHTML += thisSign;
    if (hasError) {
        btnClear();
        hasError = false;
    }
}

function btnBackSpace() {               // ta bort 1 siffra i taget
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}

function btnSum() {
    result = elemCalcScreen.innerHTML;
    result = result.replaceAll("^","**") //replacar "^" med ** då "^" inte räknar ut någonting
    elemCalcScreen.innerHTML = eval(result);

    try {
        let result = elemCalcScreen.innerHTML;
        if (isNaN(result)) {
        result = "Error";
        hasError = true;
        elemCalcScreen.innerHTML = result;
        return;
        }
        elemCalcScreen.innerHTML=result;
     } catch {
        calcScreen = "Error";
        elemCalcScreen.innerHTML = calcScreen;
    }
}
function btnClear() { //cleara allt, "C"
    elemCalcScreen.innerHTML = ""
}
function feet() { //Konvertera från CM till Feet
    elemCalcScreen.innerHTML *= 0.032808399
}

function centimeter() { //konvertera Feet till CM
    elemCalcScreen.innerHTML /= 0.032808399
}

function btnPowerTo() { //Lägger till powerto knappen
    elemCalcScreen.innerHTML += "^"
}

function btnSqrt() {
    elemCalcScreen.innerHTML **= 0.5 //roten ur, hittade ingenting som jag kunde använda mig av för att få fram "roten-ur-symbolen" + det man vill ta roten ur.
}
