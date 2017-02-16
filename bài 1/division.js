var i,j;
i=parseInt(i);
j=parseInt(j);
document.write('<table  style=""><tr>');
for(i=1;i<=10;i++){
	if(i==1||i==6){
		document.write('<tr>')
	}
	document.write('<td>');
	for(j=1;j<=10;j++){
		var x=i*j;
		document.write(i+" x "+j+" = "+x+"<br>");
	}
	document.write('</td>');
	if(i==5||i==10){
		document.write('</tr>')
	}
}
document.write('</tr></table>')
