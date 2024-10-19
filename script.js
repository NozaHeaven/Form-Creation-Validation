document.addEventListener('DOMContentLoaded', function() {
    // All validation code goes here
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add event listener for form submission
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle validation here
    });
});
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validation logic goes here
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];

    // Username Validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address.');
    }

    // Password Validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
    }

    // Display feedback
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];

    // Username Validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address.');
    }

    // Password Validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
    }

    // Feedback Display
    feedbackDiv.style.display = 'block';

    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';  // Green color for success
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';  // Red color for errors
    }
});

