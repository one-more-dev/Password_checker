
var x = document.getElementById("digitx");
var pass = document.getElementById("showing").innerHTML;
var pass2 = [];
var passF = "";
bte = document.querySelectorAll(".double");

var nlist = [];			//THE NUMBER LIST FOR THE BUTTONS
for(s=0;s<=9;s++){	nlist.push(s);}



function valueButton(qtn){
	for(s=0;s<=4;s++){
		btlist = [];
		for(r=0;r<=1;r++){
			choice = nlist[Math.floor(Math.random()*qtn)];
			btlist.push(choice);
			qtn -= 1;
			nlist.splice(nlist.indexOf(choice),1);
		}
		bte[s].innerText = btlist;
	}
}


function insertvalue(btn){
	x.innerText += 'X';
	pass2.push(bte[btn].innerHTML);
}


function checkPass(){

	for(let s=0;s<pass2.length; s++){
		var p = pass2[s].toString().split(",");
		for(let t=0;t<p.length;t++){
			var q = parseInt(p[t]);
			if(q==pass[s]){
				passF += q.toString();
				console.log(q);
			}
		}
	}
	console.log(pass.length,pass2.length,passF.length);
	if(pass == passF && pass.length == pass2.length){
		x.innerText=`You tipped the right password: ${pass} is = ${passF}`;
		x.style.color = "white";
		x.style.fontSize = "2em";
		let btn = document.querySelectorAll(".double, #compare");
		for(s=0;s<btn.length;s++){
			btn[s].disabled=true;
		}
	}else{
		window.alert("It's wrong! Try again!");
		x.innerText = "";
		pass2 = [];
		passF = "";
	}
}



valueButton(10);


/*
COMO COMPARAR AS SENHAS?
PEGO UM CARACTER DA SENHA
APERTO O BOTÃO: SE UM DOS VALORES FOR IGUAL, PEGO O QUE É IGUAL E INSIRO nA VARIÀVEL NOVA

*/

