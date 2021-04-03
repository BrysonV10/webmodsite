window.addEventListener("load", () => {
  if(window.location.protocol != "https:"){
  window.location.href = "https://" + window.location.hostname + window.location.pathname
  }
})