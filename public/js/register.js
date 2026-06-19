document
.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value

    };

    const response =
    await fetch(
      "http://localhost:5000/users/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body:
        JSON.stringify(userData)
      }
    );

    const result =
    await response.json();

    alert("Registration Successful");

    console.log(result);

});
