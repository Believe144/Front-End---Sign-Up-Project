document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous errors
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // First Name validation
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First Name: กรุณากรอกข้อมูล.';
        isValid = false;
    }

    // Last Name validation
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last Name: กรุณากรอกข้อมูล.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email: กรุณากรอกข้อมูล.';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'กรุณากรอกที่อยู่อีเมล์ที่ถูกต้อง.';
        isValid = false;
    }

    // Password validation
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password: กรุณากรอกข้อมูล.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});