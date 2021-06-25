//Om een kleurenpallet toe te voegen maak je een array aan met de losse kleuren in HEX waarden.
//Per kleur maak je een functie aan die de nav, footer en body de juiste kleur geven.
//Je maakt een functie aan die die drie functies van kleuren tegelijk uitvoert.
//Die functie stop je in de kleurPalletten array

//Arrays met losse kleuren in de juiste pallet
var palletRoodRoze = ['#FFDDFD', '#E56193', '#EE3C4A'];
var palletGeelGroenBlauw = ['#359C55', '#018CEB', '#FFC300'];
var palletRoodGeelGroen = ['#ED503F', '#41AC80', '#F2D452'];
var palletLilaPaarsGroen = ['#8EE0B2', '#FFDDFE', '#9D7DC0'];
var palletOranjeTealGroen = ['#FD5F08', '#3FAD86', '#44B8B5'];

//Kleurensets met welke kleuren de body, nav en footer krijgen
//set 1 rood roze
var palletEenKleurEen = function () {
    document.querySelector('body').style.background = palletRoodRoze[0];
};

var palletEenKleurTwee = function () {
    document.querySelector('nav').style.background = palletRoodRoze[1];
};

var palletEenKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletRoodRoze[2];
};

//set 2 geel groen blauw
var palletTweeKleurEen = function () {
    document.querySelector('body').style.background = palletGeelGroenBlauw[0];
};

var palletTweeKleurTwee = function () {
    document.querySelector('nav').style.background = palletGeelGroenBlauw[1];
};

var palletTweeKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletGeelGroenBlauw[2];
};

//set 3 rood geel groen
var palletDrieKleurEen = function () {
    document.querySelector('body').style.background = palletRoodGeelGroen[0];
};

var palletDrieKleurTwee = function () {
    document.querySelector('nav').style.background = palletRoodGeelGroen[1];
};

var palletDrieKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletRoodGeelGroen[2];
};

//set 4 lila paars groen
var palletVierKleurEen = function () {
    document.querySelector('body').style.background = palletLilaPaarsGroen[0];
};

var palletVierKleurTwee = function () {
    document.querySelector('nav').style.background = palletLilaPaarsGroen[1];
};

var palletVierKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletLilaPaarsGroen[2];
};

//set 5 oranje teal groen
var palletVijfKleurEen = function () {
    document.querySelector('body').style.background = palletOranjeTealGroen[0]; 
};

var palletVijfKleurTwee = function () {
    document.querySelector('nav').style.background = palletOranjeTealGroen[1];
};

var palletVijfKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletOranjeTealGroen[2];
}

//palletsets in een functie per pallet
var palletEen = function () {
    palletEenKleurEen();
    palletEenKleurTwee();
    palletEenKleurDrie();
};

var palletTwee = function () {
    palletTweeKleurEen();
    palletTweeKleurTwee();
    palletTweeKleurDrie();
};

var palletDrie = function () {
    palletDrieKleurEen();
    palletDrieKleurTwee();
    palletDrieKleurDrie();
};

var palletVier = function () {
    palletVierKleurEen();
    palletVierKleurTwee();
    palletVierKleurDrie();
};

var palletVijf = function () {
    palletVijfKleurEen();
    palletVijfKleurTwee();
    palletVijfKleurDrie();
};

//De palletsets in een array zodat die met een functie aangeroepen worden
var kleurPalletten = [palletEen, palletTwee, palletDrie, palletVier, palletVijf];

var laadPallet = function () {
    kleurPalletten[Math.floor(Math.random() * kleurPalletten.length)]();
};

window.addEventListener("load", laadPallet());