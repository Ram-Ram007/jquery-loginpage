$(document).ready(function () {
    const arr = [];
    btnSubmit = $("#submit");
    btnSubmit.click(function (e) {
        e.preventDefault();  
      const email = $("#Email").val();
      const password = $("#pass").val();
      if(email){
        if(password.length>=8){
            const profile = {
                email: email,
                password: password,
              };
              arr.push(profile);
              console.log(JSON.stringify(arr));
        }else{
            alert(" password should be atleast 8 character")
        }
    }else{
        alert("enter valid email")
    }
  });
});