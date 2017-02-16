var i,j;
var content="";
var sp="";
function draw(){
	number=document.getElementById('number').value;
	for(i=1;i<=number;i++){
		for(j=i;j>i/2;j--){
			x=j%10;
			content+= x + ' ';
		}
		for(j=Math.ceil(i/2)+1;j<=i;j++){
			x=j%10;
			content+=x + ' ';
		}
		content+="<br>";
	}
	document.getElementById('triangle').innerHTML=content;
}