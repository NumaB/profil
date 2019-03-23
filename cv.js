document.addEventListener("DOMContentLoaded", init);
//Il y a très probablement un moyen plus "intelligent" de faire ce que j'ai voulu faire
//Par manque de temps, on se contentera de ce qui est bête mais fonctionnel

function init(){
// On récupère modal & elements
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var caption = document.getElementById("caption");

//Création de l'arborescence Fastercom
var fasterLogo = document.getElementById('faster-logo');                        //logo fastercom

var containerTitleFaster = document.createElement("h5");                        //titre qui apparaîtra sous l'image. Création de "l'espace-titre"
var titleAttributeFaster = document.createAttribute("style");
titleAttributeFaster.value = "text-align: center; font-size: 2em;";
containerTitleFaster.setAttributeNode(titleAttributeFaster);                    //On créée un style partiulier au titre, puis on lui attache
var modalTitleFaster = document.getElementById("faster-title");                 //On récupère le contenu du titre sur la page html
var titleFaster = document.createTextNode(modalTitleFaster.innerHTML);
containerTitleFaster.appendChild(titleFaster);                                  //On remplit l'espace avec le contenu récupéré

var containerTextFaster = document.createElement("p");                          //On répète l'opération pour le texte.
var textFaster = document.getElementById("faster-text");                        //Moins compliqué car pas de style à ajouter.
var vraiTextFaster = document.createTextNode(textFaster.innerHTML);
containerTextFaster.appendChild(vraiTextFaster);

fasterLogo.onclick = function(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};                           //On bloque la fenêtre. A défaut d'avoir une solution pour le scroll
  modal.style.display = "block";
  modalImg.src = this.src;                                                      //On renseigne la source de l'image
  caption.appendChild(containerTitleFaster);                                    //On ajoute le titre à l'arborescence
  caption.appendChild(containerTextFaster);                                     //On ajoute le texte à l'arborescence
}

//Création de l'arborescence BDE - analogue à Fastercom, avec les variables BDE
var tresoLogo = document.getElementById('treso-logo');

var containerTitleTreso = document.createElement("h5");
var titleAttributeTreso = document.createAttribute("style");
titleAttributeTreso.value = "text-align: center; font-size: 2em;";
containerTitleTreso.setAttributeNode(titleAttributeTreso);
var modalTitleTreso = document.getElementById("treso-title");
var titleTreso = document.createTextNode(modalTitleTreso.innerHTML);
containerTitleTreso.appendChild(titleTreso);

var containerTextTreso = document.createElement("p");
var textTreso = document.getElementById("treso-text");
var vraiTextTreso = document.createTextNode(textTreso.innerHTML);
containerTextTreso.appendChild(vraiTextTreso);

tresoLogo.onclick = function(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.appendChild(containerTitleTreso);
  caption.appendChild(containerTextTreso);
}

//Création de l'arborescence ASF
var asfLogo = document.getElementById('asf-logo');

var containerTitleAsf = document.createElement("h5");
var titleAttributeAsf = document.createAttribute("style");
titleAttributeAsf.value = "text-align: center; font-size: 2em;";
containerTitleAsf.setAttributeNode(titleAttributeAsf);
var modalTitleAsf = document.getElementById("asf-title");
var titleAsf = document.createTextNode(modalTitleAsf.innerHTML);
containerTitleAsf.appendChild(titleAsf);

var containerTextAsf = document.createElement("p");
var textAsf = document.getElementById("asf-text");
var vraiTextAsf = document.createTextNode(textAsf.innerHTML);
containerTextAsf.appendChild(vraiTextAsf);

asfLogo.onclick = function(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.appendChild(containerTitleAsf);
  caption.appendChild(containerTextAsf);
}

//Création de l'arborescence La Poste
var laPosteLogo = document.getElementById('LP-logo');

var containerTitleLaPoste = document.createElement("h5");
var titleAttributeLaPoste = document.createAttribute("style");
titleAttributeLaPoste.value = "text-align: center; font-size: 2em;";
containerTitleLaPoste.setAttributeNode(titleAttributeLaPoste);
var modalTitleLaPoste = document.getElementById("LP-title");
var titleLaPoste = document.createTextNode(modalTitleLaPoste.innerHTML);
containerTitleLaPoste.appendChild(titleLaPoste);

var containerTextLaPoste = document.createElement("p");
var textLaPoste = document.getElementById("LP-text");
var vraiTextLaPoste = document.createTextNode(textLaPoste.innerHTML);
containerTextLaPoste.appendChild(vraiTextLaPoste);

var containerTextLaPoste2 = document.createElement("p");
var textLaPoste2 = document.getElementById("LP-text-2");
var vraiTextLaPoste2 = document.createTextNode(textLaPoste2.innerHTML);
containerTextLaPoste2.appendChild(vraiTextLaPoste2);

laPosteLogo.onclick = function(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.appendChild(containerTitleLaPoste);
  caption.appendChild(containerTextLaPoste);
  caption.appendChild(containerTextLaPoste2);
}








// Fermer la fenêtre
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  while(caption.firstChild) {
    caption.removeChild(caption.firstChild);
  }
  window.onscroll=function(){};
}
}
