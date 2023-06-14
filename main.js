let b=document.getElementsByTagName("body")[0];
let btn=document.createElement("button");
btn.innerHTML="click";
b.append(btn);


btn.addEventListener("click",function(){
	
	let c1=Math.round(Math.random()*256);
	let c2=Math.round(Math.random()*256);
	let c3=Math.round(Math.random()*256);
	
	let backcolor=`rgb(${c1},${c2},${c3})`;
	console.log(backcolor);
	b.style.backgroundColor=backcolor;
	
});