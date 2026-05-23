const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const users =
    JSON.parse(localStorage.getItem("users"));

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(user){

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        window.location.href = "dashboard.html";

    }
    else{
        alert("Invalid Credentials");
    }
});