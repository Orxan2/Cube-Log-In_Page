window.addEventListener('load',function(params) {
    let signUpbtn = document.querySelectorAll('#sign-up');
    let logInbtn = document.querySelectorAll('#logIn');
    let homebtn = document.querySelector('#home');
    let cube = document.querySelector('.cube');

    signUpbtn.forEach(function(element) {
        element.addEventListener('click',function(params) {
            cube.style.transform = 'rotateY(90deg)';
        });
    }
    );

    logInbtn.forEach(function(element) {
        element.addEventListener('click',function(params) {
            cube.style.transform = 'rotateY(-90deg)';
        });
    }
    );
    // cube.style.transform = 'rotateY(0deg)';

    // signUpbtn.addEventListener('click',function(params) {
    //     cube.style.transform = 'rotateY(-90deg)';
    // });
    homebtn.addEventListener('click',function(params) {
        cube.style.transform = 'rotateY(180deg)';
    });
});