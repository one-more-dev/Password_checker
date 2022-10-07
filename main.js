/*
UM PROGRAMA EM 	QUE O USUÁRIO ESCOLHE UMA SENHA NUMÉRICA
E DEPOIS CONFIRMA ESSA SENHA EM UM CONJUNTO DE BOTÕES COM DOIS NÚMEROS EM CADA
*/
passText = document.getElementById("showing");
part2 = document.querySelector("#secondpart");
part2.style.visibility = 'hidden';


function func(btn){
	b = document.getElementsByClassName("numbers")[btn].innerText;
	if(passText.innerText.length == 6){
		window.alert("FULL!");
	}else{
		passText.innerText += b;
	}
}


function erase(){	passText.innerText = "";}


function unable(){
	btn = document.querySelectorAll(".numbers, #reset, #confirm");
	for(b=0;b<btn.length;b++){
		btn[b].disabled = true;
	}
}


function newdoc(){
	ecma = document.createElement("script");
	ecma.type = "text/javascript";
	ecma.src = "bank.js";
	document.body.appendChild(ecma);
}


//window.location.href = "http://www.youtube.com";
function check(){
	password = passText.innerText;
	con = confirm(`Your password is ${password}`);
	if(con == true){
		part2.style.visibility = 'visible';
		passText.style.visibility = 'hidden';
		unable();
		return newdoc();
		}
	else{
		window.alert("Operation cancelled!")
	}
}


