const botao1 = document.getElementById('1');
const texto1 = document.getElementById('text1');
const botao2 = document.getElementById('2');
const texto2 = document.getElementById('text2');
const botao3 = document.getElementById('3');
const texto3 = document.getElementById('text3');
const botao4 = document.getElementById('4');
const texto4 = document.getElementById('text4');

botao1.addEventListener('click', () => {
    texto.textContent = 'Estudar cursos na alura';
});
botao2.addEventListener('click', () => {
    texto.textContent = 'Criar projetos em Javascript';
});
botao3.addEventListener('click', () => {
    texto.textContent = 'Criar um portfolio';
});
botao4.addEventListener('click', () => {
    texto.textContent = 'Atualizar meu currículo';
});