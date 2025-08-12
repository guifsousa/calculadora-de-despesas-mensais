//Declaração das variáveis contadora e acumuladora
var numeroContas = 0
var valorTotal = 0
var resposta ='';

//Criação da função e dos elementos da página HTML
function calcularContas(){
    var inDescricao = document.getElementById('inDescricao');
    var inValor = document.getElementById('inValor');
    var outListaCompras = document.getElementById('outListaCompras')
    var outTotal = document.getElementById('outTotal'); 

    
    //Obtenção do conteúdo dos campos preenchidos
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    //Verificação do preenchimento dos dados 
    if( descricao == ''|| valor == 0 || isNaN(valor)){
        alert('Informe os dados corretamente!')
        inDescricao.focus();
        return;
    }

    //Chama e adiciona valores ao contador e o acumulador
    numeroContas = numeroContas + 1;
    valorTotal = valorTotal + valor
    resposta = `${resposta} ${descricao} - R$ = ${valor.toFixed(2)}\n`

    //Altera o conteúdo das respostas
    outListaCompras.textContent = resposta + '\n------------------------------------------';
    outTotal.textContent = numeroContas +' Conta(s) - Total(R$)= ' + valorTotal.toFixed(2);
    
    //Campos <input> são apagados automaticamente após cada registro de conta
    inDescricao.value = '';
    inValor.value = '';
    inDescricao.focus();  

     // Mostra a o output presente na div de saída após inserir dados
    document.getElementById('divOutput').style.display = 'block'
}

//Atribui a variável botão e associa a função ao evento click
var botao = document.getElementById('btn');
botao.addEventListener('click', calcularContas);

//Criação da função para limpar os dados preenchidos
function limpaFormulario(){
    document.getElementById('inDescricao').value = '';
    document.getElementById('inValor').value = '';
    document.getElementById('outListaCompras').textContent ='';
    document.getElementById('outTotal').textContent = '';
    inDescricao.focus();
    
    // Limpa a saída de dados referente ao contador e ao acumulador.
    numeroContas = 0;
    valorTotal = 0;
    resposta ='';
    
    document.getElementById('divOutput').style.display = 'none';
}

//Criação da função para limpar os dados preenchidos
var botao2 = document.getElementById('btn2');
botao2.addEventListener('click',limpaFormulario);

 