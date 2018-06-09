window.onload = function() {
// *************
// Variables
// *************
var current,
totalview,
output,
limit,
operator,
lastTotal,
shortString,
memory = 0,
numberStore,
decimalStore = 0,
clearString,
calcResult;
// *************
// Functions 
// *************
// function to clear decimal store
function clearDecimal (){
    decimalStore = 0;
}
//clear everything
function allClear (){
    totalview.innerHTML = "0";
    operatorStore = "";
    clear = "";
    symbol = "";
    current = "";
    lastTotal = "";
    calcResult = "";
    memory = 0;
    clearDecimal();
}
//clear last entry
function clearLast(){
    shortString = totalview.innerHTML;
    clearString = shortString.substring(0,shortString.length-1);
    totalview.innerHTML = clearString;
     if(clearString.length < 1){
         totalview.innerHTML = "0";
     }
     clearDecimal();
}
//partial clear
function partialClear(){
    operatorStore = "";
    clear = "";
    symbol = "";
    current = "";
    lastTotal = "";
    calcResult = "";
    memory = 0;
    clearDecimal();
}
//memorystore active
function memoryActive(){
    numberStore = memory;
    totalview.innerHTML = "+";
    operatorStore = "+";
}
//calculate current
function calcCurr(){
    current = totalview.innerHTML;
    current = current.substring(1);
}
// display answer and round it
function finalCalc(){
    calcResult = calcResult.toFixed(4);
    totalview.innerHTML = parseFloat(calcResult);
}
// set number to screen
function setNumber(){
    numberStore = totalview.innerHTML;
}
//store current number
function storeCurr(){
    current = numberStore;
}
// *************
//CODE START
// *************
//grab the total display and set to variable
        totalview = document.getElementById("totaldisplay");
        totalview.innerHTML = "0";
        var allBtn = document.querySelectorAll(".calcbutton");
          var len = allBtn.length;
          for(var i = 0; i < len; i++ ) {
            // for every button add a click listener
            allBtn[i].addEventListener("click",function() {  
                num = this.value;
                output = totalview.innerHTML +=num;
                var trimmed = output.replace(/\b0+/g, "");
                totalview.innerHTML = trimmed;
                limit = output.length;
                if(limit > 8 ) { // if too many entries entered reset screen to nothing
                    alert("You've outgrown this calculator / I'm turned off!");
                    totalview.innerHTML = '0';       
                    }
            },false);
        } // end of for loop looping thru all buttons
        //setting symbols to variable 
        var operator = document.querySelectorAll(".calcbuttonsymbol");
        var operatorStore = "";
        //setting clear buttons to variable 
        var clearBtn = document.querySelectorAll(".calcbuttonclear");
        var clear = "";
        //check what clear button is pressed
        for(var l = 0; l < clearBtn.length; l++){
            clearBtn[l].addEventListener("click",function(){
                clear = this.value;
                if(clear == "ac"){
                    allClear();
                }
                else if(clear == "ce"){
                    clearLast();
                }
                else if(clear == "off"){
                    if(this.innerHTML == "Off"){
                    this.innerHTML = "On";
                    totalview.innerHTML = "Press 'On' first";
                    partialClear();
                }
                else if(this.innerHTML == "On"){
                    this.innerHTML = "Off";
                    totalview.innerHTML = "0";
                }
                }
            });
        }
        // for every operator button add a click listener
        for(var n = 0; n < operator.length; n++ ) {
            operator[n].addEventListener("click",function() {  
            symbol = this.value;   
        // if user presses a symbol, store it and the number  
                if(symbol === "+" && operatorStore == ""){
                    //memorystore checker
                    if (memory !== 0){
                        memoryActive();
                    }
                    else{
                        setNumber();
                        operatorStore = "+";
                        totalview.innerHTML = "+";
                    }
                    //symbol pressed so clear decimal store
                    clearDecimal();
                }
                else if(symbol === "-" && operatorStore === ""){
                    //memorystore checker
                    if (memory !== 0){
                        numberStore = memory;
                        totalview.innerHTML = "-"
                        operatorStore = "-"
                    }
                    else {
                        setNumber();
                        operatorStore = "-"; //tested and it works store operator 
                        totalview.innerHTML = "-"; // reset view to 0 so they can enter more numbers
                    }
                    clearDecimal();
                    } 
                
                else if(symbol === "/" && operatorStore === ""){
                    //memorystore checker
                    if (memory !== 0){
                        numberStore = memory;
                        totalview.innerHTML = "/"
                        operatorStore = "/"
                    }
                    else{
                        setNumber();
                        operatorStore = "/"; //tested and it works store operator 
                        totalview.innerHTML = "/"; // reset view to 0 so they can enter more numbers
                    }
                    clearDecimal();
                }
                else if(symbol === "*" && operatorStore === ""){
                    //memorystore checker
                    if (memory !== 0){
                        numberStore = memory;
                        totalview.innerHTML = "*"
                        operatorStore = "*"
                    }
                    else {
                    setNumber();
                    operatorStore = "*"; //tested and it works store operator 
                    totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
                    }
                    clearDecimal();
                }
                else if(symbol === "%" && operatorStore === ""){
                    //memorystore checker
                    if (memory !== 0){
                        numberStore = memory;
                        totalview.innerHTML = "%"
                        operatorStore = "%"
                    }
                    else {
                    setNumber();
                    operatorStore = "%"; //tested and it works store operator 
                    totalview.innerHTML = "%"; // reset view to 0 so they can enter more numbers
                    }
                    clearDecimal();
                }
                    //new double symbol tested
                else if(symbol == "*" && operatorStore !== ""){
                    operatorStore = "*"; //tested and it works store operator 
                    storeCurr(); //tested and it works store number entered first
                    totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
                    clearDecimal();
                }

                else if(symbol == "+" && operatorStore !== ""){
                    operatorStore = "+"; //tested and it works store operator 
                    storeCurr(); //tested and it works store number entered first
                    totalview.innerHTML = "+"; // reset view to 0 so they can enter more numbers
                    clearDecimal();
                }
                else if(symbol == "-" && operatorStore !== ""){
                    operatorStore = "-"; //tested and it works store operator 
                    storeCurr(); //tested and it works store number entered first
                    totalview.innerHTML = "-"; // reset view to 0 so they can enter more numbers
                    clearDecimal();
                }
                else if(symbol == "/" && operatorStore !== ""){
                    operatorStore = "/"; //tested and it works store operator 
                    storeCurr(); //tested and it works store number entered first
                    totalview.innerHTML = "/"; // reset view to 0 so they can enter more numbers
                    clearDecimal();
                }
                else if(symbol == "%" && operatorStore !== ""){
                    operatorStore = "%"; //tested and it works store operator 
                    storeCurr(); //tested and it works store number entered first
                    totalview.innerHTML = "%"; // reset view to 0 so they can enter more numbers
                    clearDecimal();
                }
                //decimals 
                else if(symbol == "." && decimalStore === 0){
                            totalview.innerHTML += this.value;
                            decimalStore = 1;
                }
                else if(symbol == "." && decimalStore === 1){
                            alert("only one decimal please");
                            decimalStore = 1;        
                }
                // calculations start here 
                else if(symbol === "="){
                    //return calculation
                    clearDecimal();
                    if(operatorStore == "+"){
                        calcCurr();
                        calcResult = parseFloat(current) + parseFloat(numberStore);
                        finalCalc();
                    }
                    else if(operatorStore == "-"){
                        calcCurr();
                        calcResult = parseFloat(numberStore) - parseFloat(current);
                        finalCalc();
                    }
                    else if(operatorStore == "*"){
                        calcCurr();
                        calcResult = parseFloat(numberStore) * parseFloat(current); 
                        finalCalc();
                    }
                    else if(operatorStore == "/"){
                        calcCurr();
                        calcResult = parseFloat(numberStore) / parseFloat(current);
                        finalCalc();
                    }
                    else if(operatorStore == "%"){
                        calcCurr();
                        calcResult = (parseFloat(numberStore) / parseFloat(current)) *100;
                        calcResult = calcResult.toFixed(4)
                        totalview.innerHTML = parseFloat(calcResult) + '%'; //added % sign for clarity
                    }
                    //end of calculation and committing to memory
                    memory = parseFloat(calcResult);
                    operatorStore = "";
                    clear = "";
                    symbol = "";
                    current = "";
                    lastTotal = "";
                    calcResult = "";
                }
        },false);      
    }
}
// copyright Leslie Alldrige 2018
    