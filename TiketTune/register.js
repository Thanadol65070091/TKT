document.addEventListener('DOMContentLoaded', function () {
            
    var registrationForm = document.getElementById('registration-form');
    var signupButton = document.getElementById('signup-button');
    var passwordError = document.getElementById('password-error');

    
    function redirectToSignIn() {
        
        var firstname = document.getElementById('firstname');
        var lastname = document.getElementById('lastname');
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        var confirmPassword = document.getElementById('confirm-password');

        
        if (password.value !== confirmPassword.value) {
            passwordError.innerText = "Password and Confirm Password do not match";
        } else {
            passwordError.innerText = "";

            
            if (
                firstname.value &&
                lastname.value &&
                email.value &&
                password.value &&
                confirmPassword.value
            ) {
                
                window.location.href = 'signin.html';
            } else {
                
                alert('Please fill in all the required fields.');
            }
        }
    }
    signupButton.addEventListener('click', redirectToSignIn);
});
