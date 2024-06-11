document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.isLoggedIn) {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("signup-link").style.display = "none";
        document.getElementById("user-info").style.display = "block";
        document.getElementById("username-display").textContent = user.name;

        document.getElementById("logout-link").addEventListener("click", function() {
            localStorage.removeItem("user");
            location.reload();
        });
    }
});
