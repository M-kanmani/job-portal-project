document
.getElementById("loginForm")
.addEventListener("submit", async (e) => {

  e.preventDefault();

  const loginData = {

    email:
    document.getElementById("email").value,

    password:
    document.getElementById("password").value

  };

  const response =
  await fetch(
    "http://localhost:5000/users/login",
    {
      method: "POST",

      headers: {
        "Content-Type":
        "application/json"
      },

      body:
      JSON.stringify(loginData)
    }
  );

  const result =
  await response.json();

  if(response.ok){

      alert("Login Successful");

      window.location.href =
      "jobs.html";

  }else{

      alert(result.message);

  }

});