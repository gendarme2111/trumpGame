var array = ["c1.png","c2.png","c3.png","c4.png","c5.png","c6.png",
            "c7.png","c8.png","c9.png","c10.png","c11.png","c12.png","c13.png"];

function arrShuffle(array){
    var len = array.length;
    while(len > 0){
        var rnd = Math.floor(Math.random() * len);
        var tmp = array[len-1];
        array[len-1] = array[rnd];
        array[rnd] = tmp;
        len-=1;
    }
}

function startGame(){
    arrShuffle(array);
    for(i=7;i<12;i++){
        var img = document.images[i];
        img.src = array[i];
    }
}
var winCount = 0;
var looseCount=0;
function deal(i){
	document.images[5].src=array[i]
    	document.images[i].src="";
 	document.images[6].src=array[i-7];
    	document.images[i-7].src="";
    	var arrays= array[i].slice(0,-4);
    	var arrays2 = array[i-7].slice(0,-4);
    	if(parseInt(arrays.slice(1))>parseInt(arrays2.slice(1))){
    		winCount+=1;
    	}else{
    		looseCount+=1;
	}
	var countup = function(){
    	alert(winCount+"勝"+looseCount+"敗");
  	} 
  	setTimeout(countup, 500);
}
