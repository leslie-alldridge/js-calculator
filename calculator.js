window.onload = function() {
// set global array

	function clearDecimal (){
		decimalStore = 0;
	}
    
	//set global variables 
	var current,
		totalview,
		output,
		limit,
		operator,
		shortString,
		memory = 0,
		numberStore,
		decimalStore = 0,
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
			var num = this.value;
			output = totalview.innerHTML +=num; 
			var trimmed = output.replace(/\b0+/g, "");
			totalview.innerHTML = trimmed;

			//this is an issue if we leave a 0 on screen
			//maybe set a variable and not use .innerhtml to add num to it. 
			// fixed using trimmed var and regex
                
			limit = output.length;
             
			if(limit > 8 ) { // if too many entries entered reset screen to nothing
            
				alert("You've outgrown this calculator");
				totalview.innerHTML = "0";       
			}  
		},false);    
	} 
	// end of for loop looping thru all buttons setting symbols to variable 
	operator = document.querySelectorAll(".calcbuttonsymbol");
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
				memory = 0;
				clearDecimal();
				//tested and works
			}
			else if(clear == "ce"){
				shortString = totalview.innerHTML;
				clearString = shortString.substring(0,shortString.length-1);
				totalview.innerHTML = clearString; // tested and working phew
				if(clearString.length < 1){
					totalview.innerHTML = "0";
				}
				clearDecimal();
			}
			else if(clear == "off"){
				if(this.innerHTML == "Off"){
					this.innerHTML = "On";
					totalview.innerHTML = "Press On";
				}
				else if(this.innerHTML == "On"){
					this.innerHTML = "Off";
					totalview.innerHTML = "0";
				}
			}
		});
	}
	for(var n = 0; n < operator.length; n++ ) {
		// for every button add a click listener
		operator[n].addEventListener("click",function() {  
			var symbol = this.value;
			// if user presses a symbol, store it and the number  
			if(symbol === "+" && operatorStore == ""){
				//memorystore checker
				if (memory !== 0){
					numberStore = memory;
					totalview.innerHTML = "+";
					operatorStore = "+";
				}
				else{
					numberStore = totalview.innerHTML;
					//store the numbers as temp variable and store + sign
					operatorStore = "+"; //tested and it works store operator 
					//CHANGES                   //current = totalview.innerHTML; //tested and it works store number entered first
					totalview.innerHTML = "+";
				}
				// reset view to 0 so they can enter more numbers
				clearDecimal();
			}
			else if(symbol === "-" && operatorStore === ""){
				//memorystore checker
				if (memory !== 0){
					numberStore = memory;
					totalview.innerHTML = "-";
					operatorStore = "-";
				}
				else {
					numberStore = totalview.innerHTML;
					//store the numbers as temp variable and store - sign
					//store the numbers as temp variable and store + sign
					operatorStore = "-"; //tested and it works store operator 
					// current = totalview.innerHTML; //tested and it works store number entered first
					totalview.innerHTML = "-"; // reset view to 0 so they can enter more numbers
				}
				clearDecimal();
			} 
                
			else if(symbol === "/" && operatorStore === ""){
				//memorystore checker
				if (memory !== 0){
					numberStore = memory;
					totalview.innerHTML = "/";
					operatorStore = "/";
				}
				else{
					numberStore = totalview.innerHTML;
					//store the numbers as temp variable and store / sign
					//store the numbers as temp variable and store + sign
					operatorStore = "/"; //tested and it works store operator 
					//  current = totalview.innerHTML; //tested and it works store number entered first
					totalview.innerHTML = "/"; // reset view to 0 so they can enter more numbers
				}
				clearDecimal();
			}

			else if(symbol === "*" && operatorStore === ""){
				//memorystore checker
				if (memory !== 0){
					numberStore = memory;
					totalview.innerHTML = "*";
					operatorStore = "*";
				}
				else {
					numberStore = totalview.innerHTML;
					//store the numbers as temp variable and store * sign
					//store the numbers as temp variable and store + sign
					operatorStore = "*"; //tested and it works store operator 
					//  current = totalview.innerHTML; //tested and it works store number entered first
					totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
				}
				clearDecimal();
			}
			else if(symbol === "%" && operatorStore === ""){
				//memorystore checker
				if (memory !== 0){
					numberStore = memory;
					totalview.innerHTML = "%";
					operatorStore = "%";
				}
				else {
					numberStore = totalview.innerHTML;
					//store the numbers as temp variable and store % sign
					operatorStore = "%"; //tested and it works store operator 
					//   current = totalview.innerHTML; //tested and it works store number entered first
					totalview.innerHTML = "%"; // reset view to 0 so they can enter more numbers
				}
				clearDecimal();
			}
			//new double symbol tested
			else if(symbol == "*" && operatorStore !== ""){
				operatorStore = "*"; //tested and it works store operator 
				current = numberStore; //tested and it works store number entered first
				totalview.innerHTML = "*"; // reset view to 0 so they can enter more numbers
				clearDecimal();
			}

			else if(symbol == "+" && operatorStore !== ""){
				operatorStore = "+"; //tested and it works store operator 
				current = numberStore; //tested and it works store number entered first
				totalview.innerHTML = "+"; // reset view to 0 so they can enter more numbers
				clearDecimal();
			}
			else if(symbol == "-" && operatorStore !== ""){
				operatorStore = "-"; //tested and it works store operator 
				current = numberStore; //tested and it works store number entered first
				totalview.innerHTML = "-"; // reset view to 0 so they can enter more numbers
				clearDecimal();
			}
			else if(symbol == "/" && operatorStore !== ""){
				operatorStore = "/"; //tested and it works store operator 
				current = numberStore; //tested and it works store number entered first
				totalview.innerHTML = "/"; // reset view to 0 so they can enter more numbers
				clearDecimal();
			}
			else if(symbol == "%" && operatorStore !== ""){
				operatorStore = "%"; //tested and it works store operator 
				current = totalview.innerHTML; //tested and it works store number entered first
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
					current = totalview.innerHTML;
					current = current.substring(1);
					calcResult = parseFloat(current) + parseFloat(numberStore);
					calcResult = calcResult.toFixed(4);
					totalview.innerHTML = parseFloat(calcResult); 
                        
				}
				else if(operatorStore == "-"){
					current = totalview.innerHTML;
					current = current.substring(1);
					calcResult = parseFloat(numberStore) - parseFloat(current);
					calcResult = calcResult.toFixed(4);
					totalview.innerHTML = parseFloat(calcResult); 
				}
				else if(operatorStore == "*"){
					current = totalview.innerHTML;
					current = current.substring(1);
					calcResult = parseFloat(numberStore) * parseFloat(current);
					calcResult = calcResult.toFixed(4);
					totalview.innerHTML = parseFloat(calcResult);  //correct answer
				}
				else if(operatorStore == "/"){
					current = totalview.innerHTML;
					current = current.substring(1);
					calcResult = parseFloat(numberStore) / parseFloat(current);
					calcResult = calcResult.toFixed(4);
					totalview.innerHTML = parseFloat(calcResult);  //correct answer
				}
				else if(operatorStore == "%"){
					current = totalview.innerHTML;
					current = current.substring(1);
					calcResult = (parseFloat(numberStore) / parseFloat(current)) *100;                    
					calcResult = calcResult.toFixed(4);
					totalview.innerHTML = parseFloat(calcResult) + "%"; //correct - added % sign for clarity
				}
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
};