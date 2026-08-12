const botao = document.querySelector(botao);
const texto = document.getElementById('texto');

const frases = {
    '1': 'Estudar cursos na Alura',
    '2': 'Criar projetos em Javascript',
    '3': 'Criar um portfolio',
    '4': 'Atualizar meu currículo'
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Busca a frase correspondente ao ID ou usa uma mensagem padrão
        texto.textContent = frases[botao.id] || 'Nenhuma opção selecionada';
    });
});