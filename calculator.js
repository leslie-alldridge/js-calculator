window.onload = function() {
//set global variables 
    var current,
        totalview,
        output,
        limit,
        zero,
        period,
        operator;
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
        var operator = document.querySelectorAll(".calcbuttonsymbol");
        //symbols
        for(var n = 0; n < operator.length; n++ ) {
            // for every button add a click listener
            operator[n].addEventListener("click",function() {
                      
                symbol = this.value;
                         
                alert(symbol);     // this works but doesn't show symbol, should be ok 
            
            
        
           
         },false);
            
        }
    }