

//variabel met array waar de kleuren in zitten
var colorsBody = ['#FFDDFD', '#E56193', '#EE3C4A'];
var colorsNav = ['#FFDDFD', '#E56193', '#EE3C4A'];
var colorsFooter = ['#FFDDFD', '#E56193', '#EE3C4A'];
//Kleurcombinaties
//['#FFDDFD', '#E56193', '#EE3C4A'] Rood en roze
//['#359C55', '#018CEB', '#FFC300'] Geel groen en blauw
//['#ED503F', '#41AC80', '#F2D452'] Rood geel en groen

//functies om de kleuren te veranderen bij het laden of refreshen van de website
var changeBackground = function () {
    document.querySelector('body').style.background = colorsBody[Math.floor(Math.random() * colorsBody.length)];
};

var changeNavBg = function () {
    document.querySelector('nav').style.background = colorsNav[Math.floor(Math.random() * colorsNav.length)];
};

var changeFooterBg = function () {
    document.querySelector('footer', 'footer section').style.background = colorsFooter[Math.floor(Math.random() * colorsFooter.length)];
};

//Als de pagina laad worden deze functies uitgevoerd
window.addEventListener("load", changeBackground(), changeNavBg(), changeFooterBg(), changeTekst());