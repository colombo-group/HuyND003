var count= prompt('Nhap so luong do thi: ','');
nameE= new Array();
while(isNaN(count)||count<=0||count%1!=0||count==0||count==""){
	alert('Khong hop le! Xin nhap lai!!');
	count= prompt('Nhap so luong do thi: ','');
}
var nameC="";
for(i=0;i<count;i++){
	stt=i+1;
	content=prompt('Nhap ten nuoc thu '+stt,'');
            while(content==""){
                alert('Khong hop le! Xin nhap lai!!');
                content=prompt('Nhap ten nuoc thu '+stt,'');
            }
	nameE[i]=content;
	nameC+='<div style="width:500px;">'
			+'<div style="width:60px;float:left">'+nameE[i]+'</div>'
			+"<div><input required  style='margin-left:20px;float:left'' type='number' id='nameE"+i+"' placeholder='Nhap so phan tram'></div>"
			+"<label>%</label></div><div style='clear:both'></div>";
}
document.getElementById('show_element').innerHTML=nameC+'<input type="button" id="button" value="Vẽ đồ thị" onclick="draw()">';


function draw(){

    var chart = "";
    for (i = 0; i < count; i++){
        name = "nameE"+i;
        x = document.getElementById(name).value;
        chart += 	'<tr>'
            +	'<td>'+nameE[i]+'</td>'
            +	'<td style = "width:150px">'
            +	'<div style = "width:100px">'
            +	'<div style = "border:5px solid red; width: '+ x + '%; float:left; float: left; margin:5px;"></div></div><label>'
            +	x
            +	'%</label></td></tr>'
    }
    
    document.getElementById("show_chart").innerHTML = chart;
}