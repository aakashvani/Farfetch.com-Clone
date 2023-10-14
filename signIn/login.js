document.querySelector("form").addEventListener("submit", signin);

let regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
console.log(regdUsers);

function signin(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email");
  let passInput = document.querySelector("#pass");
  let email = emailInput.value;
  let pass = passInput.value;
  // console.log(name, email, pass);

  for (let i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i].emailAddress, regdUsers[i].password);
    if (regdUsers[i].emailAddress === email && regdUsers[i].password === pass) {
      window.location.href = "/index.html";
    } else {
      alert("User Not Register");
      return;
    }
  }
}
