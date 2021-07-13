addEventListener('submit', function(event) {
  const user = {
    name: document.getElementById('nam').value,
    mail: document.getElementById('mail').value,
    endereco: document.getElementById('end').value,
    bairro: document.getElementById('bairro').value,
    numero: document.getElementById('nm').value,
    celular: document.getElementById('tel').value,
    cpf: document.getElementById('cpf').value,
    nascimento: document.getElementById('date').value,
    suscode: document.getElementById('sus').value
  }
  console.log(user)
})
