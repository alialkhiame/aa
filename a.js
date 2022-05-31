function changeColor(newColor) {
    var elem = document.getElementById("confi");
    elem.style.color = newColor;
  }


  function changetext(newText) {
    document.getElementById("click").innerHTML = "New text!";
  }
  function change(newText) {
  var elem = document.getElementById("myButton1");
  if (elem.value=="Close Curtain") elem.value = "wow";
  else elem.value = "close";

  document.write("<h1>Raus mit dem Alten - rein mit dem Neuen!</h1>");

  document.getElementById("click").innerHTML = "I have changed!";
}



function forthing() {
var schritt;
document.write("das ist die for schleife");
document.write("<br>");
for (schritt = 1; schritt <= 10; schritt++) {
  // Laufe 5 mal, mit den Werten von Schritt 0 bis 4
  var k = "";
  if(schritt%2!=0){
      k="is odd ";
  }else{
    k="is even ";
  }
  

  document.write(schritt+" : "+k);
  document.write("<br>");
}
}





  

function whilething() {
    var n=1;
    document.write("das ist die while schleife");
    document.write("<br>");
    while(n <= 10){
       
       
      var k = "";
      if(n >=5){
          k="is smaller then 5  ";
      }else{
        k="is bigger then 5  ";
      }
      if(k==5) k="it is 5 !!"
      
    
      document.write(n+" : "+k);
      document.write("<br>");
     n++;
    }
    }



    function dowhilething() {
    var n = 0;
do {
    
    var k = "";
    if(n >=5){
        k="is smaller then 5  ";
    }else{
      k="is bigger then 5  ";
    }
    if(k==5) k="it is 5 !!"
    
  
    document.write(n+" : "+k);
    document.write("<br>");
   n++;
} while(n <= 10);
    
}





function whatday() {
    var day="";
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }


document.write("it is "+day);

}





function f(a, b) {
    var q=parseInt(document.getElementById(a).value);
    var w= parseInt(document.getElementById(b).value);

              var s  = w+q; 
              document.getElementById("k").innerHTML=s;
             }
var n =7;
function summe(n){
if(n==0)return 0;
return n+summe(n-1);


}

var spaces="<pre>";





function pattern(numlines){
   
    for(var i=0;i<numlines;i++){
        
        for(var u=0;u<numlines-1-i;u++){
            spaces+=" ";

        }
        spaces+="</pre>"
        
       
       
        for(var k=1;k<i;k++){

        document.getElementById("q").innerHTML+="*"; 


        }
        
        document.getElementById("q").innerHTML+="<br>"; 
        document.getElementById("q").innerHTML+=spaces; 
    }


}


