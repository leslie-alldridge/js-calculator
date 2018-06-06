window.onload = function() {
// set global array
var inputfromUser = [];

    

//set global variables 
    var current,
        totalview,
        output,
        limit,
        zero,
        period,
        operator,
        lastTotal,
        shortString,
        numberStore,
        clearString,
        calcResult;
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

                //this is an issue if we leave a 0 on screen
                //maybe set a variable and not use .innerhtml to add num to it. 
                // fixed using trimmed var and regex
                
                limit = output.length;
             
             if(limit > 8 ) { // if too many entries entered reset screen to nothing
            
             alert("You've outgrown this calculator");
             totalview.innerHTML = '';       
           }
            
          
           
         },false);
            
        } // end of for loop looping thru all buttons
        //setting symbols to variable 
        var operator = document.querySelectorAll(".calcbuttonsymbol");
        var operatorStore = "";
        //setting clears to variable 
        var clearBtn = document.querySelectorAll(".calcbuttonclear");
        var clear = "";

        for(var l = 0; l < clearBtn.length; l++){
            clearBtn[l].addEventListener("click", function(){
                clear = this.value;
                if(clear == "ac"){
                    //clear everything
                    totalview.innerHTML = "0";
                    operatorStore = "";
                    clear = "";
                    symbol = "";
                    current = "";
                    lastTotal = "";
                    calcResult = "";
                    //tested and works
                }
                else if(clear == "ce"){
                       shortString = totalview.innerHTML;
                       clearString = shortString.substring(0,shortString.length-1);
                       totalview.innerHTML = clearString; // tested and working phew
                        if(clearString.length < 1){
                            totalview.innerHTML = "0";
                        }
                    }
            });
        }

        for(var n = 0; n < operator.length; n++ ) {
            // for every button add a click listener
            operator[n].addEventListener("click",function() {
                      numberStore = totalview.innerHTML;
                symbol = this.value;
                
   // if user presses a symbol, store it and the number                       
                if(symbol === "+"){
                    //store the numbers as temp variable and store + sign
                    operatorStore = "+"; //tested and it works store operator 
 //CHANGES                   //current = totalview.innerHTML; //tested and it works store number entered first
                    totalview.innerHTML = "+"; // reset view to 0 so they can enter more numbers
                    
                }
                else if(symbol === "-"){
                    //store the numbers as temp variable and store - sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "-"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = "-"; // reset view to 0 so they can enter more numbers
                } 
                
                else if(symbol === "/"){
                    //store the numbers as temp variable and store / sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "/"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = "/"; // reset view to 0 so they can enter more numbers
                }

                else if(symbol === "*"){
                    //store the numbers as temp variable and store * sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "*"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
                }

                else if(symbol === "%"){
                    //store the numbers as temp variable and store % sign
                    operatorStore = "%"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = "%"; // reset view to 0 so they can enter more numbers
                    
                    }
                        //new double symbol
                        else if(symbol === "*" && operatorStore !== ""){
                            operatorStore = "*"; //tested and it works store operator 
                     current = numberStore; //tested and it works store number entered first
                     totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
                     console.log("double symbol");
                        }

// calculations start here 
                else if(symbol === "="){
                    //return calculation
                    console.log(operatorStore);
    //CHANGES                console.log(current);
                    console.log(totalview.innerHTML);
                    //lastTotal = totalview.innerHTML;
                    if(operatorStore == "+"){
     //CHANGES                   calcResult = parseInt(current) + parseInt(numberStore);
                        console.log(calcResult); //returns the right number yay
                        totalview.innerHTML = calcResult;
                    }
                    else if(operatorStore == "-"){
                        calcResult = parseInt(current) - parseInt(lastTotal);
                        console.log(calcResult); 
                        totalview.innerHTML = calcResult; //correct 
                    }
                    else if(operatorStore == "*"){
                        calcResult = parseInt(current) * parseInt(lastTotal);
                        console.log(calcResult); 
                        totalview.innerHTML = calcResult; //correct answer
                    }
                    else if(operatorStore == "/"){
                        calcResult = parseInt(current) / parseInt(lastTotal);
                        console.log(calcResult); 
                        totalview.innerHTML = calcResult; //correct answer
                    }
                    else if(operatorStore == "%"){
                        calcResult = (parseInt(current) / parseInt(lastTotal)) * 100;
                        console.log(calcResult); 
                        totalview.innerHTML = calcResult + '%'; //correct - added % sign for clarity
                    }
                }
         },false);      
        }
    }

    //trying to leave a leading 0 and remove it on second etc button presses 

    