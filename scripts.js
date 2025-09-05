document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name !== "" && email !== "" && message !== "") {
        // Simple email format check (optional)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for reaching out, " + name + "! Your message has been sent.");
        this.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
