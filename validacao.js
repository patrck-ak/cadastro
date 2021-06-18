function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

addEventListener('keyup', function(event) {
  if (event.code === 'Enter') {auth()}
})

function auth() {
  var u = document.getElementById("usr").value;
  var p = document.getElementById("passwd").value;
  if (u == "admin" && p == "admin") {
    window.location = 'dashboard.html';
  } else {
    console.error('Senha inválida ou null')
    console.error('Senha inválida ou null')
    console.error('Senha inválida ou null')
    var x = document.getElementById("passwd")
    x.classList.add("shake");
    x.value = null
    setTimeout(() => {
      document.getElementById("passwd").classList.remove("shake");
    }, 2500);
  }
}
