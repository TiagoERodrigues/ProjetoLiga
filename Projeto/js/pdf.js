function PDF(){

  var doc = new jsPDF();                         // novo documento

  doc.setFontSize(18);

  doc.text("Bastante simples o jsPDF!", 35, 25); // algum texto

  doc.save('verifica.pdf');                      // download

}

/*

//Tão simples
var doc = new jsPDF();

// definir o tamanho da fonte...
doc.setFontSize(22);

// Adicionar texto
doc.text(20, 20, 'Meu PDF');

// adicionar outra pagina
doc.addPage();

// selecionar outro tamanho de fonte
doc.setFontSize(16);

// adicionar texto
doc.text(20, 30, 'Olá eu sou um texto!');


var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});

/*
