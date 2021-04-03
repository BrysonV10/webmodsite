var load_contain = document.getElementById("fb_load");
window.addEventListener("load", () => {
  let base = document.createElement("script")
  base.src = "https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js";
  load_contain.appendChild(base);
  let ana = document.createElement("script")
  base.src = "https://www.gstatic.com/firebasejs/8.2.10/firebase-analytics.js";
  load_contain.appendChild(base);
  load_contain.appendChild(document.createElement("script").src = "/firebase/init.js");
})
function load_auth(){
  let auth = document.createElement("script");
  auth.src = "https://www.gstatic.com/firebasejs/8.2.10/firebase-auth.js";
  load_contain.appendChild(auth);
}
function load_firestore(){
  let fb_fire = document.createElement("script");
  fb_fire.src = "https://www.gstatic.com/firebasejs/8.2.10/firebase-auth.js";
  load_contain.appendChild(fb_fire);
}