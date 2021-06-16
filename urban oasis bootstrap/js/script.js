//variabel met array waar de kleuren in zitten
var colorsBody = ['#008CEE', '#359C55', '#FEC305'];
var colorsNav = ['#FA3E92', '#5CCB91', '#9F67CE'];
var colorsFooter = ['#008CEE', '#359C55', '#FEC305'];
var colorsTekst = ['#000000', '#FFFFFF'];

//functies om de kleur te laten veranderen bij het refreshen
var changeBackground = function () {
    document.querySelector('body').style.background = colorsBody[Math.floor(Math.random() * colorsBody.length)];
}

var changeNavBg = function () {
    document.querySelector('nav').style.background = colorsNav[Math.floor(Math.random() * colorsNav.length)];
}

var changeFooterBg = function () {
    document.querySelector('footer', 'footer section').style.background = colorsFooter[Math.floor(Math.random() * colorsFooter.length)];
}

var changeTekst = function () {
    document.querySelector('h1', 'h2', 'p', 'main p').style.color = colorsTekst[Math.floor(Math.random() * colorsTekst.length)];
}

//Als de pagina laad worden deze functies uitgevoerd
window.addEventListener("load", changeBackground(), changeNavBg(), changeFooterBg(), changeTekst());