document.querySelector("form").addEventListener("submit", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
console.log(regdUsers);

function signin(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  // console.log(name, email, pass);

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i].emailAddress, regdUsers[i].password);
    if (regdUsers[i].emailAddress == email && regdUsers[i].password == pass) {
      window.location.href = "/home/home.html";
    }
    // else{
    //     alert("Wrong Details")
    // }
  }
}
