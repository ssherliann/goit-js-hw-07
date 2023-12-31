const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const form = evt.target;  
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {  
        return alert("All form fields must be filled in");
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData); 
    form.reset();
});
