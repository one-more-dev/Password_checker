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


function erase(){
	passText.innerText = "";
}


function unable(){
	part2.style.visibility = 'visible';
	passText.style.visibility = 'hidden';
	document.getElementById("numbers").style.visibility = 'hidden';
}


function check(){
	password = passText.innerText;
	con = confirm(`Your password is ${password}`);
	if(con == true){
		//window.location.href = "http://www.youtube.com";
		unable();
		return password;
	}else{
		window.alert("Operation cancelled!")
	}
}