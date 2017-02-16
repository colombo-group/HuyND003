var dateofmonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var month=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var today=new Date();
var curDate=today.getDate();
var curDay=today.getDay();
var curMonth=today.getMonth();
var curYear=today.getFullYear();
var firstdate=new Date(curYear,curMonth,01);
var firstday=firstdate.getDay();
var calendar="";
calendar+="<table border=1><tr ><th colspan='7'><h1>"+month[curMonth]+","+curYear+"</h1></th></tr>"
	+ "<tr><td>Sun</td><td>Mon</td><td>Tu</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr><tr>";
for(i=0;i<firstday;i++){
	calendar+="<td>&nbsp;</td>";
}
for(i=1;i<=dateofmonth[curMonth];){
	for(j=firstday;j<7;j++){
		if(i<=dateofmonth[curMonth]){
			if(i==curDate){
				calendar+="<td><h2 style='color:red'>"+i+"</h2></td>"
			}
			else{
				calendar+="<td>"+i+"</td>";
			}
		}
		else{
			calendar+="<td></td>";
		}
		i++;
	}
	firstday=0;
	calendar+="</tr>";
}
document.getElementById('show_calendar').innerHTML=calendar;