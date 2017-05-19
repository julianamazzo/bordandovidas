window.addEventListener('scroll', function(evento) {
	console.log(123);
	if(window.scrollY > 60) {
		document.querySelector("#cabecalho").classList.add('ativo');
	} else {
		document.querySelector("#cabecalho").classList.remove('ativo');
	}
})


document.querySelector(".queroBordar").onclick=function(){
	document.querySelector("#bordarHistorias").classList.add('ativo');
	document.querySelector("#contarHistorias").classList.remove('ativo');
}

document.querySelector(".fechar").onclick=function(){
	document.querySelector("#bordarHistorias").classList.remove('ativo');
}

document.querySelector(".queroContar").onclick=function(){
	document.querySelector("#contarHistorias").classList.add('ativo');
	document.querySelector("#bordarHistorias").classList.remove('ativo');
}

document.querySelector(".fechar2").onclick=function(){
	document.querySelector("#contarHistorias").classList.remove('ativo');
}


var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer"); //(".botao.menuHamburguer") = parâmetro

function abrirMenu(){
	// declarar uma variável. pegar navegacaoPrimaria:
	var menu = document.querySelector("#navegacaoPrimaria");

	//se estiver com o classname "menuHorizontal visivel", fechar o dropdown
	if(menu.className == "menuHorizontal visivel"){
		//Fechar o menuHorizontal

		//tornar a navegacaoPrimaria visível, adicionar a classe visivel
		menu.className = "menuHorizontal";
	}else{
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel"
	}
}

// botaoMenuHamburguer.onclick = abrirMenu;
botaoMenuHamburguer.addEventListener('click', abrirMenu);

botaoMenuHamburguer.addEventListener('click', function(){
	document.querySelector(".ladoEsquerdo.linha.espacoEntre.alinharVertical").classList.toggle('ativo'); //tooggle = se estiver desativo, ativa. Se já estiver ativo, desativa.//
})