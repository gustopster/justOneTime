//informações do fixas adicionadas manualmente pelo App;
const cordenadorSti = "Roberto Dias da Silva";
const matriculaSti = "MAT: 809528";
const enderecoSorocaba = [{
  "cidadeOrigem": "Sorocaba/SP",
  "rua": "Rua 28 de  Outubro",
  "numero": "691",
  "sala": "Informática",
  "andar": "Subsolo",
  "telefoneSorocaba": "(15) 2102-8423",
}];
const horario = new Date().toLocaleString();
//App function em executão
function justOneTime(numOb, numCo, idTec, idChamado, descMerc, patriMonio, quantiDade, vaLor) {
  let conteudoIdTec = document.getElementById('tecIt2b');
  conteudoIdTec.innerHTML = `Técnico IT2B: ${idTec}`;
  let conteudoNumOb = document.getElementById('correiosOb');
  conteudoNumOb.innerHTML = `Número do Objeto: ${numOb}`;
  let conteudoNumCo = document.getElementById('correiosCo');
  conteudoNumCo.innerHTML = `Número da Coleta: ${numCo}`;
  let tabela = document.getElementById('tabela');
  let totalLinhas = tabela.rows.length;
  let linhas = tabela.insertRow(totalLinhas);
  let conteudoIdChamado = linhas.insertCell(0);
  let conteudoDescMerc = linhas.insertCell(1);
  let conteudoPatriMonio = linhas.insertCell(2);
  let conteudoQuantiDade = linhas.insertCell(3);
  let conteudoVaLor = linhas.insertCell(4);
  conteudoIdChamado.innerHTML = idChamado;
  conteudoDescMerc.innerHTML = descMerc;
  conteudoPatriMonio.innerHTML = patriMonio;
  conteudoQuantiDade.innerHTML = quantiDade;
  conteudoVaLor.innerHTML = `R$ ${vaLor},00`;
  let stiDepartamento = document.getElementById("stiDepartamento").value;
  if (stiDepartamento === "") {
    stiDepartamento = `${document.getElementById("stiDepartamento").value}X.X`;
  };
  let interiorOuCapital = `${document.getElementById("interiorOuCapital").value}`;
  if (interiorOuCapital === "DO INTERIOR") {
    interiorOuCapital = `${document.getElementById("interiorOuCapital").value} - COMPLEXO ADMINISTRATIVO PATRIARCA`;
  };
  if (interiorOuCapital === "") {
    interiorOuCapital = `${document.getElementById("interiorOuCapital").value}[INFORMAR SE É CAPITAL OU INTERIOR]`;
  };
  let comarca = document.getElementById("comarca").value;
  if (comarca === "") {
    comarca = `<h3>Tribunal de Justiça de São Paulo – , N° ,  Sala : , Andar:  | }</h3>`;
  };
  if (comarca === "SOROCABA/SP") {
    let imprimir = document.getElementById("btnImprimir");
    imprimir.innerHTML = `<p class="text-success my-2">Sucesso, Clique em Imprimir!</p><button class="btn btn-lg bg-success text-light my-2" id="btnImprimir" onclick='window.print()'>Imprimir</button>`;
    let correios = document.getElementById("correios");
    correios.innerHTML = `<p>${enderecoSorocaba[0].cidadeOrigem} (Data e Hora: ${horario})</p>`;
    let informarComarca = document.getElementById("informarComarca");
    informarComarca.innerHTML = `<p>${enderecoSorocaba[0].cidadeOrigem}</p>`;
    let endereco = document.getElementById("endereco");
    endereco.innerHTML = `<h3>Tribunal de Justiça de São Paulo – ${enderecoSorocaba[0].rua} , N° ${enderecoSorocaba[0].numero},  Sala : ${enderecoSorocaba[0].sala}, Andar: ${enderecoSorocaba[0].andar} | ${enderecoSorocaba[0].cidadeOrigem}</h3>`;
    let telefone = document.getElementById("telefone");
    telefone.innerHTML = `<h3>Telefone: ${enderecoSorocaba[0].telefoneSorocaba}</h3>`;
    let sti = document.getElementById("sti");
    sti.innerHTML = `<h3>STI ${stiDepartamento} - SERVIÇO DE APOIO AOS USUÁRIOS ${interiorOuCapital}</h3>`;
    let cordenador = document.getElementById("cordenador");
    cordenador.innerHTML = `<h3>Cordenador: ${cordenadorSti} – ${matriculaSti}</h3>`;
  } else {
    let informarComarca = document.getElementById("informarComarca");
    informarComarca.innerHTML = `<p>!!!SELECIONE TODAS AS OPÇÕES ACIMA PARA CONTINUAR!!!</p>`;
    let endereco = document.getElementById("endereco");
    endereco.innerHTML = `<h3>!!!SELECIONE TODAS AS OPÇÕES ACIMA PARA CONTINUAR!!!</h3>`;
    let telefone = document.getElementById("telefone");
    telefone.innerHTML = `<h3>!!!SELECIONE TODAS AS OPÇÕES ACIMA PARA CONTINUAR!!!</h3>`;
    let sti = document.getElementById("sti");
    sti.innerHTML = `<h3>!!!SELECIONE TODAS AS OPÇÕES ACIMA PARA CONTINUAR!!!</h3>`;
    let cordenador = document.getElementById("cordenador");
    cordenador.innerHTML = `<h3>!!!SELECIONE TODAS AS OPÇÕES ACIMA PARA CONTINUAR!!!</h3>`;
  };
};
//Não deixar a página Carregar
function stopDefAction(evt) {
  evt.preventDefault();
}
document.getElementById("botao").addEventListener(
  'click', stopDefAction, false
);
//anexar foto da assinatura
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");
fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);
fileElem.addEventListener("change", handleFiles, false);
function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = ``;
      li.appendChild(info);
    }
  }
};
