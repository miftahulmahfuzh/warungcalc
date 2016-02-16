var result = null; //saving the result, or the left side of operation
var rightside = null;
var text = ""; //saving the input 
var operator = ""; 
var pressed = false; //operator flag
function append(x) {
	if(text=="0") {
	   text = x;
	} else {
	   text += x;
	   document.getElementById("lcd").value = text;
	}
}

function operate(x) {
	document.getElementById("lcd").value = "";
	if(result==null && text=="") {//do nothin
	} else if(pressed && rightside==null) {//do nothin
	} else if(pressed) {
	   //case if the input is: 'x (operator) y (operator)' 
	   result(); //it will do '=' function
	   operator = x;
	   text = "";
	   pressed = true;
	}
	else { //case of input: 'x (operator)'
	   if(text != "") result = parseInt(text);
	   operator = x;
	   text = ""; //reinitialize text for rightside
	   pressed = true;	
	} 
}

function maths(operator,x,y) {
	switch(operator) {
	   case '*': return x * y;
	   case '/': return x / y;
	   case '+': return x + y;
	   default : return x - y;
	}
}

function getresult() {
	if(!pressed || text=="") { 
	//if no operator was pressed nor string for rightside then do nothin'
	} else {
	   rightside = parseInt(text);
	   result = maths(operator,result,rightside);
	   document.getElementById("lcd").value = result.toString();
	   rightside = null; 
	   pressed = false; 
	   text = "";
	}
}

function clearit() { //reinitialize everything
	document.getElementById("lcd").value = "";
	result = null;
	rightside = null;
	text = "";
	pressed = false;
}
