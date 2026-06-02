document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        // Зупиняємо стандартну дефолтну відправку форми на сервер
        event.preventDefault();

        // Отримуємо значення полів
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Елементи для виводу помилок
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        const successMessage = document.getElementById('successMessage');

        // Очищаємо старі помилки перед новою перевіркою
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        // Перевірка імені
        if (username === '') {
            usernameError.textContent = "Ім'я не може бути порожнім";
            isValid = false;
        }

        // Перевірка Email за допомогою регулярного виразу
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Введіть коректну адресу пошти';
            isValid = false;
        }

        // Перевірка довжини пароля
        if (password.length < 6) {
            passwordError.textContent = 'Пароль має містити щонайменше 6 символів';
            isValid = false;
        }

        // Перевірка збігу паролів
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Паролі не збігаються';
            isValid = false;
        }

        // Якщо все успішно пройшло валідацію
        if (isValid) {
            successMessage.textContent = 'Реєстрація пройшла успішно!';
            form.reset(); // Очищаємо поля форми після успіху
        }
    });
});
