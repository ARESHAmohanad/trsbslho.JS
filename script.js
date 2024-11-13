// quadrados inicio
const quadrado1 = document.querySelector('.quadrado1');
const quadrado2 = document.querySelector('.quadrado2');

if (quadrado1 && quadrado2) {
  quadrado1.addEventListener('mouseover', () => {
    quadrado2.style.backgroundImage = 'url(1.png)';
    quadrado2.style.backgroundSize = 'cover';
  });

  quadrado1.addEventListener('mouseout', () => {
    quadrado2.style.backgroundImage = 'url(parado.png)'; 
    quadrado2.style.backgroundSize = 'cover';
  });

  quadrado1.addEventListener('click', () => {
    quadrado2.style.backgroundImage = 'url(movimento.gif)';
    quadrado2.style.backgroundSize = 'cover';

    
    const totalTime = 3000;
    let elapsed = 0; 

    
    const interval = setInterval(() => {
        elapsed += 100; 
        if (elapsed >= totalTime) {
            
            quadrado2.style.backgroundImage = '';
            clearInterval(interval);
        }
    }, 100); 
});
}


// Funções da calculadora
const tela = document.getElementById('tela');

function adicionarNumero(numero) {
  if (tela) tela.value += numero;
}

function adicionarOperador(operador) {
  if (tela) tela.value += ' ' + operador + ' ';
}

function limparTela() {
  if (tela) tela.value = '';
}

function calcular() {
  try {
    if (tela) tela.value = eval(tela.value);
  } catch (e) {
    if (tela) tela.value = 'Erro';
    setTimeout(() => {
      limparTela();
    }, 1000); 
  }
}

// livro
 
        const livros = [
            { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
            { titulo: "1984", autor: "George Orwell" },
            { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling" },
            
        ];

       
        function exibirLivros() {
            const listaLivros = document.getElementById("livros-lista");
            listaLivros.innerHTML = ""; 

            
            livros.forEach((livro, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${livro.titulo}</strong><br>Autor: ${livro.autor}`;

                
                const botaoRemover = document.createElement("button");
                botaoRemover.textContent = "Remover";
                botaoRemover.classList.add("remove-btn");
                botaoRemover.onclick = () => removerLivro(index);

                li.appendChild(botaoRemover);
                listaLivros.appendChild(li);
            });
        }

        
        function adicionarLivro(event) {
            event.preventDefault(); 

            
            const titulo = document.getElementById("titulo").value;
            const autor = document.getElementById("autor").value;

            
            livros.push({ titulo, autor });

            
            exibirLivros();

           
            document.getElementById("titulo").value = "";
            document.getElementById("autor").value = "";
        }

        
        function removerLivro(index) {
           
            livros.splice(index, 1);

            
            exibirLivros();
        }

        
        window.onload = exibirLivros;

        
        document.getElementById("form-livro").addEventListener("submit", adicionarLivro);
        


//scroll
function adicionarMensagem() {
  
  const novaMensagem = document.createElement('div');
  novaMensagem.classList.add('message');
  novaMensagem.textContent = "Nova mensagem adicionada!";
  
  
  const container = document.getElementById('scrollContainer');
  container.appendChild(novaMensagem);

 
  container.scrollTop = container.scrollHeight;
}
// teste

function maior() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const resultado = num1 > num2;
  alert("Resultado da Soma: " + resultado);
}

function menor() {
  const num3 = parseInt(document.getElementById('num3').value);
  const num4 = parseInt(document.getElementById('num4').value);
  const resultado = num3 <= num4;
  alert("Resultado da Subtração: " + resultado);
}