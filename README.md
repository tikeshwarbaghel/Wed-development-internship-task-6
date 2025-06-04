# Web Development Internship - Task 6  
## ✉️ Create a Contact Form and Validate Inputs Using JavaScript

This project demonstrates how to create a functional contact form using HTML and CSS, with input validation using JavaScript.

---

## 🎯 Objective

Build a contact form that validates:
- Name field (non-empty)
- Email field (valid email format)
- Message field (non-empty)

---

## 🛠 Tools & Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- VS Code  
- Chrome Browser

---

## 📁 Project Structure

```
contact-form-task6/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 💡 Key Features

- User input validation on the client side.
- Feedback messages for missing/invalid input.
- Email format checked using regular expression.
- Clean and simple UI using modern CSS.

---

## 🧪 Example Validation Logic

```js
if (name === "" || email === "" || message === "") {
  feedback.textContent = "All fields are required.";
} else if (!emailPattern.test(email)) {
  feedback.textContent = "Please enter a valid email address.";
} else {
  feedback.textContent = "Message sent successfully!";
}
```

---

## ✅ Outcome

✔ Built a working contact form using front-end technologies.  
✔ Practiced form validation and DOM manipulation with JavaScript.  
✔ Improved user experience with instant feedback.

---
📌 *Client-side validation is essential for improving UX before server-side processing.*
