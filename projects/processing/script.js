document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        const state = document.getElementById('state').value;
        const age = document.getElementById('age').value;
        const agree = document.getElementById('terms').checked;

        if (!fullname || !email || !pass) {
            alert("Please fill in all required fields.");
            return;
        }
        if (pass.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        if (age < 18) {
            alert("You must be at least 18 years old.");
            return;
        }
        if (!agree) { 
            alert("You must accept the terms and conditions.");
            return;
        }

        const formData = {
            fullname: fullname,
            email: email,
            password: pass,
            age: age, 
            state: state,
            agree: agree,
        };

        console.log("Submitting Form Data:", formData);

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "response.json", true); 
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {  
                if (xhr.status === 200) {  
                    const response = JSON.parse(xhr.responseText); 
                    alert(response.message); 
                    document.getElementById('form').reset();  

                    document.getElementById('form').querySelectorAll('input, select').forEach(function (field) {
                        field.disabled = true;
                    });
                } else {
                    alert('Error submitting form. Please try again.');
                }
            }
        };

        xhr.send();  
    });
});
