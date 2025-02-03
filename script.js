
//I get a display id from html element using getElementById Method
let display = document.getElementById("display");

//Now I create a javascript function that i pass in html element as event attribute
function appendToDisplay(value) {
    //Now i access display id and pass a value in input field that will be clicked 
    display.value += value;
}

//Now i create a another function that clear a value from input or display filed  
function clearDisplay() {
    display.value = "";
}

//Now  create a function that will calculate result in input or display field
function calculateResult() {
    //Here i create try-catch block which will show a result on success otherwise it throw an error
    try {
        // Here i use eval function that identify a symbol then show a result accoding it 
        // if symbol is + between number it show me addition result like this for others
        display.value = eval(display.value);
    } catch (error) {
        //This will show me error instead of crashing
        display.value = "Error";
    }
}
