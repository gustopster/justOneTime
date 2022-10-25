//Não deixar a página Carregar (INICIO);
function stopDefAction(evt) {
  evt.preventDefault();
}
document.getElementById("botao").addEventListener(
  'click', stopDefAction, false
);
//Não deixar a página Carregar (FINAL);
//informações do fixas adicionadas manualmente pelo App (INICIO);
const cordenadorSti = "Roberto Dias da Silva";
const matriculaSti = "MAT: 809528";
const enderecoSorocaba = [{
  "cidadeOrigem": "Sorocaba/SP",
  "rua": "Rua 28 de  Outubro",
  "numero": "691",
  "sala": "Informática",
  "andar": "Subsolo",
  "telefoneSorocaba": "(15) 2102-8423",
  "bairro": "Alto da Boa Vista",
}];
const horario = new Date().toLocaleString();
//informações do fixas adicionadas manualmente pelo App (FINAL);
//App function em executão (INICIO);
function justOneTime(idTec,rgTec,numOb,numCo,idChamado,descMerc,patriMonio,serialNumber,descModelo,quantiDade,vaLor,userId,userMat,userTel,descProblema,descAtividade,descMauUso,fabricanteFornecedor) {
  //Inicio Inputs Tabela
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
  conteudoIdChamado.innerHTML = idChamado;
  let conteudoDescMerc = linhas.insertCell(1);
  conteudoDescMerc.innerHTML = descMerc;
  let conteudoPatriMonio = linhas.insertCell(2);
  conteudoPatriMonio.innerHTML = patriMonio;
  let conteudoQuantiDade = linhas.insertCell(3);
  conteudoQuantiDade.innerHTML = quantiDade;
  let conteudoVaLor = linhas.insertCell(4);
  conteudoVaLor.innerHTML = `R$ ${vaLor},00`;
  // Final dos Inputs Tabela
  // Inputs dos outros Textos e Condições para serem executados (INICIO)
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
    imprimir.innerHTML = `<p class="text-success">Sucesso! Basta Imprimir Agora!</p><button class="btn bg-success text-light" id="btnImprimir" onclick='window.print()'>IMPRIMIR</button>`;
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
    let ajustar = document.getElementById("tabelaRat");
    ajustar.innerHTML =
    `<div><br><br><br><br><br><br><br><br><br><br><br><br><br>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="4"><img src="css/it2bRat.png"></td>
          <td rowspan="2"> Relatório de Atendimento Técnico - RAT</td>
          <td>Nº CHAMADO CLIENTE: ${idChamado}</td>
      </tr>
      <tr>
          <td>Nº CHAMADO IT2B: ${idChamado}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="3">CLIENTE: ${userId}</td>
          <td rowspan="1"> TELEFONE / RAMAL: ${userTel}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="2">Endereço: ${enderecoSorocaba[0].rua}</td>
          <td rowspan="1"> Bairro: ${enderecoSorocaba[0].bairro}</td>
          <td rowspan="1"> Cidade: ${enderecoSorocaba[0].cidadeOrigem}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="1">FORNECEDOR/FABRICANTE:</td>
          <td rowspan="1">TIPO:</td>
          <td rowspan="1">PATRIMÔNIO:</td>
          <td rowspan="1">SERIE:</td>
          <td rowspan="1">MODELO:</td>
      </tr>
      <tr>
          <td rowspan="1">${fabricanteFornecedor}</td>
          <td rowspan="1">${descMerc}</td>
          <td rowspan="1">${patriMonio}</td>
          <td rowspan="1">${serialNumber}</td>
          <td rowspan="1">${descModelo}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td>MOTIVO DO CHAMADO:</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td>ANORMALIDADE CONSTATADA:</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
      <tr>
          <td>&nbsp;${descProblema}</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td>ATIVIDADES EXECUTADAS / OBSERVAÇÕES:</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
      <tr>
          <td>&nbsp;${descAtividade}</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td>CASOS DE MAU USO (DESCREVER ABAIXO):</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
      <tr>
          <td>&nbsp;${descMauUso}</td>
      </tr>
      <tr>
          <td>&nbsp;</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="1">
              CHAMADO FINALIZADO?S(&nbsp;)N(&nbsp;)
              TENSÃO A/C:F/N
              (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
              F/T
              (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
              N/T
              (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </td>
      </tr>
      <tr>
          <td rowspan="1">
              CONTADOR DE PÁGINAS - INICIAL:(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
              FINAL: (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
              FIRMWARE
              VERS.(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </td>
      </tr>
      <tr>
          <td rowspan="1">
              EQUIPAMENTO OPERACIONAL: SIM(&nbsp;) NÃO(&nbsp;)
              NÚMERO DO IP: (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </td>
      </tr>
      <tr>
          <td rowspan="1">
              NECESSÁRIO SUBSTITUIR PEÇAS: SIM(&nbsp;) NÃO(&nbsp;)
          </td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="1">PN:</td>
          <td rowspan="1">PN:</td>
          <td rowspan="1">PN:</td>
      </tr>
      <tr>
          <td rowspan="1">PN:</td>
          <td rowspan="1">PN:</td>
          <td rowspan="1">PN:</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="2">VISTO DO USUÁRIO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td rowspan="2">DATA E HORA: ${horario}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="1">NOME DO USUÁRIO:</td>
          <td rowspan="1">MATRÍCULA:</td>
      </tr>
      <tr>
        <td>&nbsp;${userId}</td>
        <td>&nbsp;${userMat}</td>
      </tr>
  </tbody>
</table>
<table id="" border="1" width="100%" class="">
  <tbody>
      <tr>
          <td rowspan="1">NOME DO TÉCNICO IT2B: ${idTec}</td>
          <td rowspan="1">RG DO TÉCNICO: ${rgTec}</td>
          <td rowspan="2">VISTO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
  </tbody>
</table>
</div>`;
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
  // Inputs dos outros Textos e Condições para serem executados (FINAL)
};
//App function em executão (FINAL);
