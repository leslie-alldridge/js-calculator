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
        clearString,
        calcResult;
//grab the total display and set to variable
        totalview = document.getElementById("totaldisplay");

        var allBtn = document.querySelectorAll(".calcbutton");
        
          var len = allBtn.length;
        
          for(var i = 0; i < len; i++ ) {
            // for every button add a click listener
            allBtn[i].addEventListener("click",function() {
                      
                num = this.value;
                         
                output = totalview.innerHTML +=num;
                      
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
                    totalview.innerHTML = "";
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
                }
            });
        }

        for(var n = 0; n < operator.length; n++ ) {
            // for every button add a click listener
            operator[n].addEventListener("click",function() {
                      
                symbol = this.value;
   // if user presses a symbol, store it and the number                       
                if(symbol === "+"){
                    //store the numbers as temp variable and store + sign
                    operatorStore = "+"; //tested and it works store operator 
                    current = totalview.innerHTML; //tested and it works store number entered first
                    totalview.innerHTML = ""; // reset view to 0 so they can enter more numbers
                    
                }
                else if(symbol === "-"){
                    //store the numbers as temp variable and store - sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "-"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = ""; // reset view to 0 so they can enter more numbers
                } 
                
                else if(symbol === "/"){
                    //store the numbers as temp variable and store / sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "/"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = ""; // reset view to 0 so they can enter more numbers
                }

                else if(symbol === "*"){
                    //store the numbers as temp variable and store * sign
                     //store the numbers as temp variable and store + sign
                     operatorStore = "*"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = ""; // reset view to 0 so they can enter more numbers
                }

                else if(symbol === "%"){
                    //store the numbers as temp variable and store % sign
                    operatorStore = "%"; //tested and it works store operator 
                     current = totalview.innerHTML; //tested and it works store number entered first
                     totalview.innerHTML = ""; // reset view to 0 so they can enter more numbers
                }
// calculations start here 
                else if(symbol === "="){
                    //return calculation
                    console.log(operatorStore);
                    console.log(current);
                    console.log(totalview.innerHTML);
                    lastTotal = totalview.innerHTML;
                    if(operatorStore == "+"){
                        calcResult = parseInt(current) + parseInt(lastTotal);
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