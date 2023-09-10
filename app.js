function restart(){
	console.log("game restart");
}
restart();
function hello(name){
	console.log("snu mni nerig " + name);	
}
hello("tlmen");

function sum(a,b){
	console.log(a+b);
}
sum(15,16);

function too(d,c){
	if(d>c){
		console.log(d)
	}else{
		console.log(c)
	}
}
too(12,11);



var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['brown', 'purple', 'blue', 'pink', 'grey', 'yellow'];
var btn = document.getElementsByTagName('button') [0];
console.log(btn);
var i=-1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random];
	btn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1;
	}
}
