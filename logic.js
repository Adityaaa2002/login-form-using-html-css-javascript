function login() {
    const name = document.getElementById("name").value;
    const classInput = document.getElementById("class").value;
    const roll = document.getElementById("roll").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Get selected subjects
    const selectedSubjects = Array.from(document.querySelectorAll('input[name="subject"]:checked'))
        .map(subject => subject.value);
    
    // Basic validation for empty fields
    if (!name || !classInput || !roll || !selectedSubjects.length || !password) {
        error.textContent = "Please fill all fields and select at least one subject";
        return;
    }

    // Simple password check (example only)
    if (password === "12345") {
        alert(`Welcome, ${name}!\nClass: ${classInput}\nRoll: ${roll}\nSubjects: ${selectedSubjects.join(", ")}`);
        error.textContent = "";
    } else {
        error.textContent = "Incorrect password";
    }
}
