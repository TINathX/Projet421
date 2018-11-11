function ChoixChampion(id) {
	//Recupere la taille de la chaine
	var taille_str = id.length;
	//Recupere le nom du champion
	var champion = id.substr(0,taille_str-3);
	//Recupere le numero du joueur
	var joueur = id.substr(taille_str-2,2);
	//Creer la chaine de caractère bannière en fonction du joueur
	var banniere = "banniere_"+joueur;
	if(VerifChampion(champion,joueur)=="dejaprit")
	{
		alert("Veuillez changer de champion, il est déjà prit.");
	}
	else
	{
	//Ecriture de l'image dans la div associé au joueur
	document.getElementById(banniere).innerHTML="<img src='img/"+champion+"_skin.png' alt='"+champion+"' id='img_"+joueur+"' class='img_banniere'>";
	//Appel de la fonction qui supprime la transparence	de toutes les autres icones du joueur
	SupprimerTransparence(joueur);
	//Rendre l'image transparente
	document.getElementById(id).style.opacity = "0.7";
	}
}

function VerifChampion(champion,joueur) {
	var nbre_player = document.getElementById('nbre_joueurs').value;
	var numero_joueur = Number(joueur.substr(1,1));
	nbre_player = Number(nbre_player);		
	switch(numero_joueur)
	{
		case 1:
		switch(nbre_player)
		{
			case 2:
			var champion_j2 = document.getElementById("img_j2").alt;
			if(champion == champion_j2)
			{
				return "dejaprit";
			}
			break;
			
			case 3:
			var champion_j2 = document.getElementById("img_j2").alt;
			var champion_j3 = document.getElementById("img_j3").alt;
			if((champion == champion_j2)||(champion == champion_j3))
			{
				return "dejaprit";
			}
			break;
			
			case 4:
			var champion_j2 = document.getElementById("img_j2").alt;
			var champion_j3 = document.getElementById("img_j3").alt;
			var champion_j4 = document.getElementById("img_j4").alt;
			if((champion == champion_j2)||(champion == champion_j3)||(champion == champion_j4))
			{
				return "dejaprit";
			}
			break;
		}
		break;
		
		case 2:
		switch(nbre_player)
		{
			case 2:
			var champion_j1 = document.getElementById("img_j1").alt;
			if(champion == champion_j1)
			{
				return "dejaprit";
			}
			break;
			
			case 3:
			var champion_j1 = document.getElementById("img_j1").alt;
			var champion_j3 = document.getElementById("img_j3").alt;
			if((champion == champion_j1)||(champion == champion_j3))
			{
				return "dejaprit";
			}
			break;
			
			case 4:
			var champion_j1 = document.getElementById("img_j1").alt;
			var champion_j3 = document.getElementById("img_j3").alt;
			var champion_j4 = document.getElementById("img_j4").alt;
			if((champion == champion_j1)||(champion == champion_j3)||(champion == champion_j4))
			{
				return "dejaprit";
			}
			break;
		}
		break;
		
		case 3:
		switch(nbre_player)
		{
			case 3:
			var champion_j1 = document.getElementById("img_j1").alt;
			var champion_j2 = document.getElementById("img_j3").alt;
			if((champion == champion_j1)||(champion == champion_j2))
			{
				return "dejaprit";
			}
			break;
			
			case 4:
			var champion_j1 = document.getElementById("img_j1").alt;
			var champion_j2 = document.getElementById("img_j2").alt;
			var champion_j4 = document.getElementById("img_j4").alt;
			if((champion == champion_j1)||(champion == champion_j2)||(champion == champion_j4))
			{
				return "dejaprit";
			}
			break;
		}
		break;
		
		case 4:
		switch(nbre_player)
		{
			case 4:
			var champion_j1 = document.getElementById("img_j1").alt;
			var champion_j3 = document.getElementById("img_j3").alt;
			var champion_j2 = document.getElementById("img_j2").alt;
			if((champion == champion_j1)||(champion == champion_j3)||(champion == champion_j2))
			{
				return "dejaprit";
			}
			break;
		}
		break;
}
}


function SupprimerTransparence(joueur) {
	document.getElementById("irelia_"+joueur).style.opacity = "1";
	document.getElementById("ahri_"+joueur).style.opacity = "1";
	document.getElementById("kassa_"+joueur).style.opacity = "1";
	document.getElementById("kindred_"+joueur).style.opacity = "1";
	document.getElementById("lee_"+joueur).style.opacity = "1";
	document.getElementById("lucian_"+joueur).style.opacity = "1";
	document.getElementById("thresh_"+joueur).style.opacity = "1";
	document.getElementById("yi_"+joueur).style.opacity = "1";
	document.getElementById("corki_"+joueur).style.opacity = "1";
}

function creer_input(){
	//Recupère le nbre de joueur via le selecteur
	var x = document.getElementById('nbre_joueurs').value;
	//Convertit le résultat en INT pour pouvoir faire le switch
	x = Number(x);		
	switch(x)
	{
		case 2:
		document.getElementById('div_pseudo').innerHTML = "<div id='div_j1' class='div_joueur'><div id='banniere_j1'><img src='img/defaut_skin.jpg' id='img_j1' class='img_banniere'></div><br><span>Joueur 1 : </span><input type='text' name='pseudo_j1'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j1' onclick='ChoixChampion(this.id)'>"	
		+"</div></div>" 
		+"<div id='div_j2' class='div_joueur'><div id='banniere_j2'><img src='img/defaut_skin.jpg' id='img_j2' class='img_banniere'></div><br>"
		+"<span>Joueur 2 : </span><input type='text' name='pseudo_j2'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j2' onclick='ChoixChampion(this.id)'>"
		+"</div></div>";
		document.getElementById('div_j1').style.width = "50%";
		document.getElementById('div_j2').style.width = "50%";
		break;
		
		case 3:
		document.getElementById('div_pseudo').innerHTML = "<div id='div_j1' class='div_joueur'><div id='banniere_j1'><img src='img/defaut_skin.jpg' id='img_j1' class='img_banniere'></div><br><span>Joueur 1 : </span><input type='text' name='pseudo_j1'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j1' onclick='ChoixChampion(this.id)'>"	
		+"</div></div>" 
		+"<div id='div_j2' class='div_joueur'><div id='banniere_j2'><img src='img/defaut_skin.jpg' id='img_j2' class='img_banniere'></div><br>"
		+"<span>Joueur 2 : </span><input type='text' name='pseudo_j2'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j2' onclick='ChoixChampion(this.id)'>"
		+"</div></div>"
		+"<div id='div_j3' class='div_joueur'><div id='banniere_j3'><img src='img/defaut_skin.jpg' id='img_j3' class='img_banniere'></div><br>"
		+"<span>Joueur 3 : </span><input type='text' name='pseudo_j3'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j3' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j3' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j3' onclick='ChoixChampion(this.id)'>"
		+"</div></div>";
		document.getElementById('div_j1').style.width = "33%";
		document.getElementById('div_j2').style.width = "33%";
		document.getElementById('div_j3').style.width = "33%";
		break;
		
		case 4:
		document.getElementById('div_pseudo').innerHTML = "<div id='div_j1' class='div_joueur'><div id='banniere_j1'><img src='img/defaut_skin.jpg' id='img_j1' class='img_banniere'></div><br><span>Joueur 1 : </span><input type='text' name='pseudo_j1'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j1' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j1' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j1' onclick='ChoixChampion(this.id)'>"	
		+"</div></div>" 
		+"<div id='div_j2' class='div_joueur'><div id='banniere_j2'><img src='img/defaut_skin.jpg' id='img_j2' class='img_banniere'></div><br>"
		+"<span>Joueur 2 : </span><input type='text' name='pseudo_j2'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j2' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j2' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j2' onclick='ChoixChampion(this.id)'>"
		+"</div></div>"
		+"<div id='div_j3' class='div_joueur'><div id='banniere_j3'><img src='img/defaut_skin.jpg' id='img_j3' class='img_banniere'></div><br>"
		+"<span>Joueur 3 : </span><input type='text' name='pseudo_j3'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j3' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j3' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j3' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j3' onclick='ChoixChampion(this.id)'>"
		+"</div></div>"
		+"<div id='div_j4' class='div_joueur'><div id='banniere_j4'><img src='img/defaut_skin.jpg' id='img_j4' class='img_banniere'></div><br>"
		+"<span>Joueur 4 : </span><input type='text' name='pseudo_j4'><br><br>"
		+"<div class='select_champ'>"
			+"<img src='img/irelia_icon.png' id='irelia_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/ahri_icon.png' id='ahri_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/kassa_icon.png' id='kassa_j4' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/kindred_icon.png' id='kindred_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lee_icon.png' id='lee_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/lucian_icon.png' id='lucian_j4' onclick='ChoixChampion(this.id)'><br>"
			+"<img src='img/thresh_icon.png' id='thresh_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/yi_icon.png' id='yi_j4' onclick='ChoixChampion(this.id)'>"
			+"<img src='img/corki_icon.png' id='corki_j4' onclick='ChoixChampion(this.id)'>"
		+"</div></div>";
		document.getElementById('div_j1').style.width = "25%";
		document.getElementById('div_j2').style.width = "25%";
		document.getElementById('div_j3').style.width = "25%";
		document.getElementById('div_j4').style.width = "25%";
		break;
		
		default:
		document.getElementById('div_pseudo').innerHTML = "";
	}
}	