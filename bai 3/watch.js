var mn=0;
var sc=0;
var mns=0;
function run(){
	if(mns==9){
		if(sc==59){
			mn++;
			sc=0;
			mns=0;
		}
		else{
			sc++;
			mns=0;
		}
	}
	else{
		mns++;
	}
	document.getElementById('msc').innerHTML="0"+mns;
	if(sc<10){
		document.getElementById('sc').innerHTML='0'+sc;
	}
	else{
		document.getElementById('sc').innerHTML=sc;
	}
	if (mn<10) {
		document.getElementById('mn').innerHTML='0'+mn;
	}
	else{
		document.getElementById('mn').innerHTML=mn;
	}
}
var time;
function start(){
    mns = 0;
    time = setInterval(function(){
        run()
    }, 100);
    document.getElementById('start').disabled=true;
    document.getElementById('pause').disabled=false;
}
function pause(){
if(mns>0||mn>0||sc>0){
    clearInterval(time);
    document.getElementById('start').innerHTML="Tiep tuc";
    document.getElementById('start').disabled=false;
    document.getElementById('pause').disabled=true;
}
}
function reset(){
	mn=0;
	mns=0;
	sc=0;
	document.getElementById('mn').innerHTML='0'+mn;
	document.getElementById('msc').innerHTML='0'+mns;
	document.getElementById('sc').innerHTML='0'+sc;
	clearInterval(time);
	document.getElementById('pause').disabled=false;
	document.getElementById('start').disabled=false;
	document.getElementById('start').innerHTML="Bat dau";
}