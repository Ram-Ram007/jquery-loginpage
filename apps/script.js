$(document).ready(function () {
    const arr = [];
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', '~', '\\', '-'];
    const btnSubmit = $("#submit");

    btnSubmit.click(function (e) {
        e.preventDefault();

        const email = $("#Email").val();
        const password = $("#pass").val();
        let containsSpecialCharacter = false;

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && emailRegex.test(email)) {
            if (password.length >= 8) {
                
                for (let i = 0; i < password.length; i++) {
                    if (specialCharacters.includes(password[i])) {
                        containsSpecialCharacter = true;
                        break; 
                    }
                }

                if (containsSpecialCharacter) {
                    const profile = {
                        email: email,
                        password: password,
                    };
                    arr.push(profile);
                    console.log(JSON.stringify(arr));
                } else {
                    alert("Password must contain at least one special character");
                }
            } else {
                alert("Password should be at least 8 characters");
            }
        } else {
            alert("Enter a valid email");
        }
    });
});
