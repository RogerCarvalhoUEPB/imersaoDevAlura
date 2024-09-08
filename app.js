<<<<<<< HEAD
function pesquisar() {

    
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa= document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);


  // Inicializa a variável para armazenar os resultados
  let resultados = "";
  let nome = "";
  let endereco = "";
  let descricao = "";
  let tags = "";
  if(!campoPesquisa){
    section.innerHTML = "Busca vazia"
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();
  
    // Itera sobre cada hemocentro na lista 'hemocentros'
    for (let dado of hemocentros) {
        nome = dado.nome.toLowerCase();
        endereco = dado.endereco.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
      // Constrói o HTML para cada resultado da pesquisa
        if(nome.includes(campoPesquisa) ||endereco.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2><a href="${dado.instagram}" target="_blank">${dado.nome}</a></h2>
              <p class="descricao-meta">
                ${dado.descricao} Localizado em ${dado.endereco}, telefone: ${dado.telefone} e funciona de ${dado.horarios}.
              </p>
            </div>
          `;  
        }
    }if(!resultados){
      resultados = "Nenhum resultado encontrado"
    // Atualiza o conteúdo da seção com os resultados da pesquisa
   
  } section.innerHTML = resultados;
}
function exibirDepoimento(){
let sectionDepoimentos = document.getElementById("depoimentos");
let indice = Math.floor(Math.random() * depoimentos.length);
let fala = depoimentos[indice];

let depoimento = `
<div class="card">
          <h2>Depoimentos...</h2>
          <p>${fala}</p>
        </div>
        `;
sectionDepoimentos.innerHTML = depoimento;
};
setTimeout(exibirDepoimento, 0);
setInterval(exibirDepoimento, 10000);
=======
function pesquisar() {

    
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa= document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);


  // Inicializa a variável para armazenar os resultados
  let resultados = "";
  let nome = "";
  let endereco = "";
  let descricao = "";
  let tags = "";
  if(!campoPesquisa){
    section.innerHTML = "Busca vazia"
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();
  
    // Itera sobre cada hemocentro na lista 'hemocentros'
    for (let dado of hemocentros) {
        nome = dado.nome.toLowerCase();
        endereco = dado.endereco.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
      // Constrói o HTML para cada resultado da pesquisa
        if(nome.includes(campoPesquisa) ||endereco.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2><a href="${dado.instagram}" target="_blank">${dado.nome}</a></h2>
              <p class="descricao-meta">
                ${dado.descricao} Localizado em ${dado.endereco}, telefone: ${dado.telefone} e funciona de ${dado.horarios}.
              </p>
            </div>
          `;  
        }
    }if(!resultados){
      resultados = "Nenhum resultado encontrado"
    // Atualiza o conteúdo da seção com os resultados da pesquisa
   
  } section.innerHTML = resultados;
}
  
  // Imprime o valor inicial da variável 'resultados' no console;
>>>>>>> c199742abe38ce9595e193905f05807c4a5dcd19
