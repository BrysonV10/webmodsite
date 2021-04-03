document.getElementsByTagName("form")[0].onsubmit = (e) => {
  e.preventDefault()
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
  .then(() => {
    document.getElementsByTagName("form")[0].classList.add("animate__bounceOutUp")
    setTimeout(() => {
      document.getElementsByTagName("form")[0].style.display = "none";
    }, 350)
    setTimeout(() => {
      window.location.href = "/dashboard.html";
    }, 400)
    
  })
  .catch((error) => {
    document.getElementsByTagName("form")[0].classList.add("animate__jello")
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerHTML = errorMessage;
    setTimeout(() => {
      document.getElementsByTagName("form")[0].classList.remove("animate__jello")
    }, 500)
  });
  })
}

window.addEventListener("load", () => {
  console.log(firebase.auth().currentUser)
  if(firebase.auth().currentUser!=null){
    console.log("logged in")
    window.location.href = "/dashboard.html";
  }
})

 