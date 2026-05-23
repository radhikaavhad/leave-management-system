const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){
    window.location.href = "login.html";
}

const employeeSection =
document.getElementById("employeeSection");

const adminSection =
document.getElementById("adminSection");

if(currentUser.role === "admin"){

    employeeSection.style.display = "none";

}
else{

    adminSection.style.display = "none";

}

function logout(){

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
}