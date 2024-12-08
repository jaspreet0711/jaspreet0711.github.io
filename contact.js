
function showAlert() {
    alert("Your message has been sent successfully!");
    // Clear all form fields
    const form = document.getElementById("contactForm");
    form.reset();
    return false; // Prevent actual form submission for demonstration purposes
}
