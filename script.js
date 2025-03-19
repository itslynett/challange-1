document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || email === "" || password === "" || phone === "" || address === "" || !gender) {
        alert("Please fill out all required fields correctly.");
        event.preventDefault();
    }
});
