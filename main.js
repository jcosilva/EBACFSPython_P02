const form = document.getElementById('form-contato');
const Agenda = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    AtualizaLista();
    GeraHTML();
    AtualizaTabela();
    AtualizaNumeroContatos();
});

function AtualizaLista() {
    const InputNomeContato = document.getElementById('NomeContato');
    const InputNumeroTelefone01 = document.getElementById('NumeroTelefone01');
    const InputNumeroTelefone02 = document.getElementById('NumeroTelefone02');

    // Verifica se o nome já existe
    if (Agenda.some(contato => contato.nome === InputNomeContato.value)) {
        alert(`O contato: ${InputNomeContato.value} já existe na agenda telefônica.`);
    } else {
        // Adiciona um novo contato
        const novoContato = {
            nome: InputNomeContato.value,
            letra: InputNomeContato.value.charAt(0).toUpperCase(),
            telefonePrincipal: InputNumeroTelefone01.value,
            telefoneSecundario: InputNumeroTelefone02.value
        };
        Agenda.push(novoContato);
    }

    console.log('Rodada 1');
    console.log(Agenda);

    if (Agenda.length >= 1) {
        // Ordena a agenda por nome
        Agenda.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log('Rodada 2');
        console.log(Agenda);    
    }

    // Limpa os campos após o envio
    InputNomeContato.value = '';
    InputNumeroTelefone01.value = '';
    InputNumeroTelefone02.value = '';
}

function GeraHTML () {
    linhas = '';

    for (let i = 0; i < Agenda.length; i++) {
        let linha = '<tr>';
        linha += `<td>${Agenda[i].letra}</td>`; // Primeira Letra do Contato
        linha += `<td>${Agenda[i].nome}</td>`; // Nome do Contato
        linha += `<td>${Agenda[i].telefonePrincipal}</td>`; // Telefone principal do Contato
        linha += `<td>${Agenda[i].telefoneSecundario}</td>`; // Telefone secundário do Contato
        linha += `</tr>`;
        
        linhas += linha;
    }
}

function AtualizaTabela() {
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}

function AtualizaNumeroContatos() {
    let NumeroContatos = Agenda.length;
    document.getElementById('total-contatos').textContent = NumeroContatos;
};
