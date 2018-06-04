window.onload = function() {

    var current,
        totalview,
        output,
        limit,
        zero,
        period,
        operator;
        
        totalview = document.getElementById("totaldisplay");
    
            var allBtn = document.querySelectorAll(".calcbutton");
        
          var len = allBtn.length;
        
          for(var i = 0; i < len; i++ ) {
            
            allBtn[i].addEventListener("click",function() {
                      
                num = this.value;
                         
                output = totalview.innerHTML +=num;
                      
                limit = output.length;
             
             if(limit > 8 ) { // if too many entries entered reset screen to nothing
            
             alert("You've outgrown this calculator");
             totalview.innerHTML = '';       
           }
           
         },false);
            
        } 
    }