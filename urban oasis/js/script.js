//jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true//

var navigation = document.querySelector('header > nav');
var menuButton = document.querySelector('header > button');

var open = function() {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('animated');

}

menuButton.addEventListener('click', open);