var i=0,j=0,k=0;
content="";
function draw(){
	number=document.getElementById('number').value;
	if(number>0){
		for(i = 1; i <= number; i++){
			for(j = i; j > 0; j--){
				 k =  j % 10;
				content+= k+' ';
			}
			content+="<br>";
		}
		document.getElementById('triangle').innerHTML=content;
	}
}