$(function() {
				cbpFixedScrollLayout.init();
			});

$(function(){
						$(window).scroll(

							function () {//Au scroll dans la fenetre on d�clenche la fonction
								if ($(this).scrollTop() > 150) { //si on a d�fil� de plus de 150px du haut vers le bas
									$('#navigation').addClass("fixNavigation"); //on ajoute la classe "fixNavigation" � <div id="navigation">
								} else {
									$('#navigation').removeClass("fixNavigation");//sinon on retire la classe "fixNavigation" � <div id="navigation">
								}
							}

						);			 
					});

window.couleur = function(){


// recupere les elements a colorier
var colorlog = document.getElementById('log_link');
var coloriss = document.getElementById('iss_link');
var colormars = document.getElementById('mars_link');
var colornew = document.getElementById('new_link');
var colorearth = document.getElementById('earth_link');

// recupere la hauteur de chaque div, par rapport au top du DOC
var logDiv = document.getElementById('log_part');
var issDiv = document.getElementById('iss_part');
var marsDiv = document.getElementById('mars_part');
var newDiv = document.getElementById('new_part');
var earthDiv = document.getElementById('earth_part');

// recupere la somme hauteur+offsetTop
var logCal = logDiv.offsetHeight+logDiv.offsetTop;
var issCal = issDiv.offsetHeight+issDiv.offsetTop;
var marsCal = marsDiv.offsetHeight+marsDiv.offsetTop;
var newCal = newDiv.offsetHeight+newDiv.offsetTop;
var earthCal = earthDiv.offsetHeight+earthDiv.offsetTop;


var pos = window.scrollY; // recupere la position verticale au scroll
/*
if(pos>logCal){   
   colorlog.style.background = 'red';
} else
		colorlog.style.background = 'rgba(0,0,0,.15)';
*/
if(pos>logCal && pos<issCal){   
   coloriss.style.background = '#661AFF';
} else
		coloriss.style.background = 'rgba(0,0,0,.15)';


if (pos>issCal && pos<marsCal){
 colormars.style.background = '#661AFF';
} else
		colormars.style.background = 'rgba(0,0,0,.15)';


if (pos>marsCal && pos<earthCal){
 colorearth.style.background = '#661AFF';
} else
		colorearth.style.background = 'rgba(0,0,0,.15)';

if (pos>earthCal && pos<newCal){
 colornew.style.background = '#661AFF';
} else
		colornew.style.background = 'rgba(0,0,0,.15)';

}

// fin fonction couleur

//fait tourner la fonction au scroll
 window.addEventListener("scroll" , couleur);

 			function deplace(dx,dy){
			document.getElementById('calque').style.top
			  = parseInt(document.getElementById('calque').style.top)+dy+'px';
			document.getElementById('calque').style.left
			  = parseInt(document.getElementById('calque').style.left)+dx+'px';

			}
			function test(dx,dy) {
			document.getElementById('calque2').style.top
			  = parseInt(document.getElementById('calque2').style.top)+dy+'px';
			document.getElementById('calque2').style.left
			  = parseInt(document.getElementById('calque2').style.left)+dx+'px';

			}
