let a = document.getElementsByClassName('green')[0];

a.hover = function() {
    if (a.classList.contains('green')) {
        a.classList.remove('green');
        a.classList.add('simple');
    } else {
        a.classList.remove('simple');
        a.classList.add('green');
    }
};
