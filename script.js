const firstEntry = document.getElementById('password');
const secondEntry = document.getElementById('confirmPass');
const errorMsg = document.getElementById('password-error');

function checkPasswordMatch() {
    const password = secondEntry.value;

        if (firstEntry.value !== password) {
            errorMsg.textContent = "Passwords do not match";
            } else if (!/\d/.test(password) || !/[A-Z]/.test(password)) {
                errorMsg.textContent = "Password must contain at least one number and one capital letter";
            } else if (password.length < 10) {
                errorMsg.textContent = "Password must be at least 10 characters"
            }
            else {
                errorMsg.textContent = "";
            }
};


secondEntry.addEventListener('blur', checkPasswordMatch);
        