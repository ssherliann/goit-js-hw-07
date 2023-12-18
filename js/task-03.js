const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", (event) => {
    const enteredName = input.value.trim();

    if (enteredName !== "") {
        output.textContent = enteredName;
    } else {
        output.textContent = "Anonymous";
    }
});

