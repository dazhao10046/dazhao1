var dex=0;
function changeimg(){
	var img=document.getElementById("img1")
					
					//计算出当前要切换到第几张图片
					var curIndex = index%3 + 1;  //0,1,2 
					img.src="img/"+curIndex+".jpg";  //1,2,3
					//每切换完,索引加1
					index = index + 1;
}
function mui.init(){
	setInterval("changeimg",1500)
}