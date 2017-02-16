
function plus(){
	var x=document.getElementById('number1').value;
	var y=document.getElementById('number2').value;
	x=parseFloat(x);
	y=parseFloat(y);
	z=x+y;
	document.getElementById('equal').value=z;
}
function div(){
	var x=document.getElementById('number1').value;
	var y=document.getElementById('number2').value;
	x=parseFloat(x);
	y=parseFloat(y);
	z=x-y;
	document.getElementById('equal').value=z;
}
function multi(){
	var x=document.getElementById('number1').value;
	var y=document.getElementById('number2').value;
	x=parseFloat(x);
	y=parseFloat(y);
	z=x*y;
	document.getElementById('equal').value=z;
}
function sub(){
	var x=document.getElementById('number1').value;
	var y=document.getElementById('number2').value;
	x=parseFloat(x);
	y=parseFloat(y);
	z=x/y;
	document.getElementById('equal').value=z;
}
function mod(){
	var x=document.getElementById('number1').value;
	var y=document.getElementById('number2').value;
	x=parseFloat(x);
	y=parseFloat(y);
	z=x%y;
	document.getElementById('equal').value=z;
}
