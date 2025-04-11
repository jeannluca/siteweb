document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o recarregamento da página
  
      // Captura os valores dos campos
      const nome = document.getElementById("nome").value;
      const numero = document.getElementById("numero").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("password").value;
  
      // Verifica se todos os campos estão preenchidos
      if (!nome || !numero || !email || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
  
      // Criando um objeto usuário
      const usuario = {
        nome: nome,
        numero: numero,
        email: email,
        senha: senha,
      };
  
      // Recupera os usuários cadastrados do localStorage
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      // Adiciona o novo usuário ao array
      usuarios.push(usuario);
  
      
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
   
      mensagemSucesso.style.display = "block";
  
      
      console.log("Usuário cadastrado com sucesso!");
      console.table(usuarios); 
  
     
      form.reset();
  
      
      setTimeout(() => {
        mensagemSucesso.style.display = "none";
      }, 3000);
    });
  });
  