
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Reset previous error messages
            const errorElements = document.querySelectorAll('.has-error');
            errorElements.forEach(function (element) {
                element.classList.remove('has-error');
            });

            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            const email = form.email.value.trim();
            const country = form.country.value;
            const product = form.product.value.trim();
            const message = form.message.value.trim();

            let isValid = true;

            // Validate Name
            if (name === '') {
                isValid = false;
                showError(form.name, 'Please enter your name.');
            }

            // Validate Phone
            if (!isValidPhone(phone)) {
                isValid = false;
                showError(form.phone, 'Please enter a valid phone number.');
            }

            // Validate Email
            if (email !== '' && !isValidEmail(email)) {
                isValid = false;
                showError(form.email, 'Please enter a valid email address.');
            }

            // Validate Country
            if (country === '') {
                isValid = false;
                showError(form.country, 'Please select your country.');
            }

            // Validate Product
            if (product === '') {
                isValid = false;
                showError(form.product, 'Please select a product.');
            }

            // Validate Message
            if (message === '') {
                isValid = false;
                showError(form.message, 'Please enter your message.');
            }

            if (isValid) {
                // Form is valid, you can submit it
                form.submit();
            }
        });

        function isValidPhone(phone) {
            const phonePattern = /^[0-9]{10}$/;
            return phonePattern.test(phone);
        }

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function showError(input, errorMessage) {
            const formGroup = input.closest('.form-group');
            formGroup.classList.add('has-error');

            const errorText = formGroup.querySelector('.error-text');
            if (errorText) {
                errorText.textContent = errorMessage;
            }
        }
    });