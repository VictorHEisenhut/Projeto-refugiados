async function enviarValidacaoDeEmail() {
    
    var email = document.getElementById("email").value

    const ref = await fetch(`http://localhost:5145/api/Refugiados/Email/${email}`, {
              method: "GET",
              headers: {'Content-Type': 'application/json'},
          });
    if (!ref.ok) {
        throw new Error(`Email inválido: ${ref.status}`)
    }
    const data = await ref.json()
    var token = data.tokenVerificacao
    console.log(data)

    var body = `<a href='http://localhost:5145/api/Refugiados/Verificar?token=${token}'> <h3>Verifique sua conta clicando neste link.</h3> </a>`
    var subject = "Link para confirmação de conta"

    const response = await fetch(`http://localhost:5145/api/Email?toEmail=${email}&subject=${subject}`, {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(body)
          });
  
          if (await response.ok) {
              console.log("Email enviado com sucesso.");
            } else {
              console.log("Erro ao enviar email:", await response.text());
          }
    
    
}