document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  // Simple email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields are required.";
  } else if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Message sent successfully!";
    this.reset();
  }
});
