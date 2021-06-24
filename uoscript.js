
var styleTemplates = [
    function() {document.querySelector('body').style.background = '#FFDDFD',
                document.querySelector('nav').style.background = '#E56193',
                document.querySelector('footer, footer section').style.background = '#FFC300'},


    function() {document.querySelector('body').style.background = '#359C55',
                document.querySelector('nav').style.background = '#018CEB',
                document.querySelector('footer, footer section').style.background = '#FFC300'},
    
    function() {document.querySelector('body').style.background = '#ED503F',
                document.querySelector('nav').style.background = '#41AC80',
                document.querySelector('footer, footer section').style.background = '#F2D452'}
];

var changeStyle = function () {
    styleTemplates[Math.floor(Math.random() * styleTemplates.length)];
};

window.addEventListener("load", changeStyle());
