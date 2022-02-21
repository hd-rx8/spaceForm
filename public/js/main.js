const button = document.getElementById("button");

button.addEventListener("click", () => {
  event.preventDefault();

  const user = document.getElementById("user");
  const password = document.getElementById("password");

  if (user.value == "" || user.value.length < 4) {
    user.classList.add("errorInput");
  } else {
    user.classList.remove("errorInput");
  }
  if (password.value == "" || password.value.length < 6) {
    password.classList.add("errorInput");
  } else {
    password.classList.remove("errorInput");
  }
});
