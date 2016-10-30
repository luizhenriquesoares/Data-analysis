
$('#searchNotify').click(function() {
  $.notify("Entre: Com uma zona e uma seção eleitoral para gerar o gráfico", {
    animate: {
  		enter: 'animated rollIn',
  		exit: 'animated rollOut'
  	},

  });
});

$('#searchSubmit').click(function() {
  $.notify("Gráfico gerado com sucesso", {
    animate: {
  		enter: 'animated rollIn',
  		exit: 'animated rollOut'
  	},

  });
});
