$(document).ready(function () {
    const arr = [];
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', '~', '\\', '-'];
    const btnSubmit = $("#submit");
    const messageContainer = $("#messageContainer");

    btnSubmit.click(function (e) {
        e.preventDefault();

        const email = $("#Email").val();
        const password = $("#pass").val();
        let containsSpecialCharacter = false;

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        messageContainer.empty(); // Clear any previous messages

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
                    // Display success message with red text color
                    messageContainer.html('<p style="color: green;">Login successful.</p>');
                } else {
                    // Display password error message with red text color
                    messageContainer.html('<p style="color: red;">Password must contain at least one special character.</p>');
                }
            } else {
                // Display password length error message with red text color
                messageContainer.html('<p style="color: red;">Password should be at least 8 characters.</p>');
            }
        } else {
            // Display email validation error message with red text color
            messageContainer.html('<p style="color: red;">Enter a valid email.</p>');
        }
    });
});
