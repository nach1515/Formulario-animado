const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp= document.querySelector('.sign-up-btn'),
      $signup = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle('active');
        $signup.classList.toggle('active');
    }
});

