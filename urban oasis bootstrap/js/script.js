//variabel met array waar de kleuren in zitten
var colors = ['#008CEE', '#359C55', '#FEC305'];

//functie om de kleur te laten veranderen
var changeBackground = function () {
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
}
