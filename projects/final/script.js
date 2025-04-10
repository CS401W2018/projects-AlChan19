document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(input => input.value);
  
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }
  
      phone = phone.replace(/\D/g, ''); 
      if (phone.length !== 10) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      phone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  
      const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        interests: interests
      };
  
      console.log("Submitting Form Data:", formData);
  
      setTimeout(() => {
        document.getElementById('successMsg').style.display = 'block'; 
        document.getElementById('contactForm').reset(); 
  
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function (field) {
          field.disabled = true;
        });
      }, 500); 
    });
  });
  