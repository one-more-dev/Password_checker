
tl = document.getElementsByClassName("thelist")[0];
nlist = [];
for(s=0;s<=9;s++){
	nlist.push(s);
}
/*console.log(nlist);
btn0 = document.getElementsByClassName("double")[0];
btn0.innerText = 13;


*/
function valueButton(qtn){
	for(s=0;s<=4;s++){
		btlist = [];
		console.log(nlist);
		for(r=0;r<=1;r++){
			btn = document.getElementsByClassName("double")[s];
			choice = nlist[Math.floor(Math.random()*qtn)];
			btlist.push(choice)
			btn.innerHTML = btlist;
			qtn -= 1;
			nlist.splice(nlist.indexOf(choice),1);
		}
		//console.log(nlist);
	}
}

valueButton(10);











