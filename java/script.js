document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'admin';
    const validPassword = 'komputerku1234';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        errorMessage.style.display = 'none';
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
