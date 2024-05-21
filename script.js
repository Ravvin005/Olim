// script.js

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Process form data (e.g., send it to a server)
    console.log('Form data:', { name, email, message });
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  
  // Add event listener to the form
  document.getElementById('contact-form').addEventListener('submit', submitForm);