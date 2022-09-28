/*
UM PROGRAMA EM 	QUE O USUÁRIO ESCOLHE UMA SENHA NUMÉRICA
E DEPOIS CONFIRMA ESSA SENHA EM UM CONJUNTO DE BOTÕES COM DOIS NÚMEROS EM CADA
*/

document.querySelector("h2").style.color = 'blue';
passText = document.getElementById("showing");
part2 = document.getElementById("secondpart");
part2.style.visibility = 'hidden';


function func(btn){
	b = document.getElementsByClassName("numbers")[btn].innerText;
	if(passText.innerText.length == 6){
		window.alert("FULL!");
	}else{
		passText.innerText += b;
	}
}


function erase(){
	passText.innerText = "";
}


function check(){
	password = passText.innerText;
	con = confirm(`Your password is ${password}`);
	if(con == true){
		//window.location.href = "http://www.youtube.com";
		part2.style.visibility = 'visible';
		return password;
	}else{
		window.alert("Operation cancelled!")
	}
}
