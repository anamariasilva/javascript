    var d = 0;
    var m = 0;
    var a = 0;
    
    function exibeDescricao(dia,mes,ano){
    d = dia;
    m = mes;  
    a = ano;    
  
      /* A função exibirá o texto de acordo com o a data do sistema */
  
      if ((d == 23) && (m == 06) && (a == 2021)){
        document.getElementById("descricao_mensagem").innerHTML = "Exibe texto referente ao dia passado como parâmetro na div com o evento de click do botão.";
      }
      
      if ((d == 24) && (m == 06) && (a == 2021)){
        document.getElementById("descricao_mensagem").innerHTML = "<img src='https://www.anamaria.dev.br/images/anamaria-github.png' alt='Descrição da imagem' >";
      }      
    }
    
  data = new Date();
  diaAtual = data.getDate();
  mesAtual = data.getMonth() + 1;
  anoAtual = data.getFullYear();

  if (mesAtual == 01){
    mesAtualDescricao = "janeiro";
  } else if (mesAtual == 02){
    mesAtualDescricao = "fevereiro";
  } else if (mesAtual == 03){
    mesAtualDescricao = "março";
  } else if (mesAtual == 04){
    mesAtualDescricao = "abril";
  } else if (mesAtual == 05){
    mesAtualDescricao = "maio";
  } else if (mesAtual == 06){
    mesAtualDescricao = "junho";
  } else if (mesAtual == 07){
    mesAtualDescricao = "julho";
  } else if (mesAtual == 08){
    mesAtualDescricao = "agosto";
  } else if (mesAtual == 09){
    mesAtualDescricao = "setembro";
  } else if (mesAtual == 10){
    mesAtualDescricao = "outubro";
  } else if (mesAtual == 11){
    mesAtualDescricao = "novembro";
  } else if (mesAtual == 12){
    mesAtualDescricao = "dezembro";
  }
  
if ((diaAtual) && (mesAtual) && (anoAtual)){
    document.getElementById("descricao_default").innerHTML = "Hoje é dia " + diaAtual + " de " + mesAtualDescricao + " de " + anoAtual + ".";
}
  
if ((diaAtual == 23) && (mesAtual == 06) && (anoAtual == 2021)){    
    document.getElementById("descricao_mensagem").innerHTML = "Exibe automaticamente texto referente ao dia 24/06 na div devido a date.";
}

if ((diaAtual == 24) && (mesAtual == 06) && (anoAtual == 2021)){    
    document.getElementById("descricao_mensagem").innerHTML = "<img src='https://www.anamaria.dev.br/images/anamaria-github.png' alt='Descrição da imagem' >";
}
