// importar funções da livraria  do code.org para serem usadas na aplicação
import {
    onEvent, 
    showElement, 
  setContent,
    setScreen} from './code.org.js';
  
  // definir abaixo quais as variáveis que serão usadas
  
  
  // perguntar ao usuário quanto ele possui na carteira
  let carteira = prompt("QUANTO VOCÊ POSSUI NA CARTEIRA?"); 
  
  
  // perguntar ao usuario quanto ele quer economizar 
  const ECONOMIA = prompt("QUANTO VOCÊ QUER ECONOMIZAR?");
  
  
  // a variavel extrato irá emitir uma listagem do que  foi gasto
  // ela deve iniciar vazia para elecar os gastos executaods
  let extrato = " ";
  let listExtrato = [];
  
  
  // definir o valor que cada item custa
  const Alimentação = 18.00; 
  const Programação = 15.00; 
  const Diversão = 13.00; 
  
  
  // incluir o valor informado para gastos na carteira
  document.querySelector("#wallet").innerHTML = carteira;
  
  
  // cada vez que o botão for clicado ele deve: 
  onEvent("comida","click", () => {
    carteira -= Alimentação; // reduzir o valor que foi declarado na variável
     // informar ao usuário que ouve uma transação
    extrato += "R$" + Alimentação + " gastos com comida \n"; // armazenar em extrato o que está sendo gasto
    atualizaCarteiraEalertaUsuario(); 
    let transacao = {
      nome: "comida",
      valor: 18,
      data: new Date(),
    };
    listExtrato.push(transacao);
    console.log(listExtrato)
  });
  
  onEvent("brinquedo","click", () => {
    carteira -= Diversão;
    extrato += "R$" + Diversão + " gastos com brinquedo \n"; 
    atualizaCarteiraEalertaUsuario();
    let transacao = {
      nome: "brinquedo",
      valor: 13,
      data: new Date(),
    };
    listExtrato.push(transacao);    
  });
  
  
  onEvent("circo","click", () => {
    carteira -= Programação; 
    extrato += "R$" + Programação + " gastos com circo \n"; 
    atualizaCarteiraEalertaUsuario();
    let transacao = {
      nome: "circo",
      valor: 15,
      data: new Date(),
    };
    listExtrato.push(transacao); 
  });
  
  
  // quando clicar no botão EXTRATO ele vai abrir uma caixa de alerta listando os gastos e informando quando tem de saldo e qual o valor definido como economia.
  onEvent("go-extrato", "click", () => {   
    printExtract(listExtrato)
  });
  
  
  // criar a variavel que altera o background do BODY para vermelho
  const walletColorRed = () => {
   document.querySelector("body").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)"; 
   document.querySelector("#go-extrato").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";
   document.querySelector("#reset").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";
   document.querySelector("#comida").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";  
   document.querySelector("#circo").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";  
   document.querySelector("#brinquedo").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)"; 
   
  }
  
  function atualizaCarteiraEalertaUsuario() {
    document.querySelector("#wallet").innerHTML = carteira; // apresentar o valor restante em cateria deduzido do gasto
    if (carteira <= ECONOMIA) { // se o valor em carteira for inferior que a economia pretendida ele vai avisar com a msg e mudar o fundo da tela para vermelho
      walletColorRed();
      alert("ATENÇAO! Você atingiu seu limite de gastos");
    }
  }
  
  function printExtract(lista) {
    let conteudo = `<table>`;
    lista.forEach(item => {
      conteudo += `<tr>
         <td>${item.nome}</td>
         <td>${item.valor}</td>
         <td>${item.data.toLocaleDateString()}</td>
         </tr>`;

    });
    conteudo += `</table>`
    setContent("extrato",conteudo)
        
  }
  /*
   output +=`<tr>
    <td>${item.nome}</td>
    <td>${item.valor}</td>
    <td>${item.data}</td>
  </tr>`


const table = `<table> 
${output}
</table>`	*/
  
 
