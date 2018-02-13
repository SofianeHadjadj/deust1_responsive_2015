window.couleur = function(){


// tu recuperes les elements a colorier
var colorInfo = document.getElementById('hist_link');
var colorMoi = document.getElementById('mars_link');
var colorContact = document.getElementById('news_link');

// tu recuperes la hauteur de chaque div, par rapport au top du DOC
var infosDiv = document.getElementById('history');
var moiDiv = document.getElementById('mars');
var contactDiv = document.getElementById('news');

// tu recuperes la somme hauteur+offsetTop
var infosCal = infosDiv.offsetHeight+infosDiv.offsetTop;
var moiCal = moiDiv.offsetHeight+moiDiv.offsetTop;
var contactCal = contactDiv.offsetHeight+contactDiv.offsetTop;

var pos = window.scrollY; // tu recuperes ta position verticale au scroll


if(pos<infosCal){   
   colorInfo.style.background = 'red';
} else
		colorInfo.style.background = 'rgba(0,0,0,.15)';


if (pos>infosCal && pos<moiCal){
 colorMoi.style.background = 'red';
} else
		colorMoi.style.background = 'rgba(0,0,0,.15)';


if (pos>moiCal && pos<contactCal){
 colorContact.style.background = 'red';
} else
		colorContact.style.background = 'rgba(0,0,0,.15)';

} // fin fonction couleur

// tu fais tourner ta fonction au scroll
 window.addEventListener("scroll" , couleur);

