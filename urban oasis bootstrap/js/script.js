var palletRoodRoze = ['#FFDDFD', '#E56193', '#EE3C4A'];
var palletGeelGroenBlauw = ['#359C55', '#018CEB', '#FFC300'];
var palletRoodGeelGroen = ['#ED503F', '#41AC80', '#F2D452'];

//set 1
var palletEenKleurEen = function () {
    document.querySelector('body').style.background = palletRoodRoze[0];
};

var palletEenKleurTwee = function () {
    document.querySelector('nav').style.background = palletRoodRoze[1];
};

var palletEenKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletRoodRoze[2];
};

//set 2
var palletTweeKleurEen = function () {
    document.querySelector('body').style.background = palletGeelGroenBlauw[0];
};

var palletTweeKleurTwee = function () {
    document.querySelector('nav').style.background = palletGeelGroenBlauw[1];
};

var palletTweeKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletGeelGroenBlauw[2];
};

//set 3
var palletDrieKleurEen = function () {
    document.querySelector('body').style.background = palletRoodGeelGroen[0];
};

var palletDrieKleurTwee = function () {
    document.querySelector('nav').style.background = palletRoodGeelGroen[1];
};

var palletDrieKleurDrie = function () {
    document.querySelector('footer, footer section').style.background = palletRoodGeelGroen[2];
};

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

var kleurPalletten = [palletEen, palletTwee, palletDrie];

var laadPallet = function () {
    kleurPalletten[Math.floor(Math.random() * kleurPalletten.length)]();
};

window.addEventListener("load", laadPallet());