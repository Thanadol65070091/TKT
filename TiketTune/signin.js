document.addEventListener('DOMContentLoaded', function () {
    var signinForm = document.querySelector('.registration-form');
    var signinButton = document.getElementById('signin-button');

    function redirectToHome() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username && password) {
            window.location.href = 'home.html';
        } else {
            alert('Please fill in both email and password.');
        }
    }

    signinButton.addEventListener('click', redirectToHome);

    signinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        redirectToHome();
    });
});
