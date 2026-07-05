const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const lowerRule = document.getElementById("lower");
const numberRule = document.getElementById("number");
const specialRule = document.getElementById("special");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁";
    }
});

password.addEventListener("input", checkPassword);

function checkPassword() {
    const value = password.value;
    let score = 0;

    const hasLength = value.length >= 8;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    updateRule(lengthRule, hasLength);
    updateRule(upperRule, hasUpper);
    updateRule(lowerRule, hasLower);
    updateRule(numberRule, hasNumber);
    updateRule(specialRule, hasSpecial);

    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (value.length === 0) {
        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "#000";
        strengthFill.style.width = "0%";
        strengthFill.style.background = "transparent";
        return;
    }

    if (score <= 2) {
        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "red";
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";
    } else if (score <= 4) {
        strengthText.textContent = "Strength: Medium";
        strengthText.style.color = "orange";
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";
    } else {
        strengthText.textContent = "Strength: Strong";
        strengthText.style.color = "green";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
    }
}

function updateRule(element, valid) {
    if (valid) {
        element.style.opacity = "0.5";
    } else {
        element.style.opacity = "1";
    }
}