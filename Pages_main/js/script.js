// script.js

// Lista simulada de livros
// Lista simulada de livros com 100 títulos
const booksDatabase = [
    { title: 'Sangue, Suor e Lágrimas' },
    { title: 'O Senhor dos Anéis' },
    { title: '1984' },
    { title: 'Orgulho e Preconceito' },
    { title: 'Dom Casmurro' },
    { title: 'O Hobbit' },
    { title: 'A Arte da Guerra' },
    { title: 'O Pequeno Príncipe' },
    { title: 'Harry Potter e a Pedra Filosofal' },
    { title: 'O Sol é para Todos' },
    { title: 'Matar um Rouxinol' },
    { title: 'A Menina que Roubava Livros' },
    { title: 'Cem Anos de Solidão' },
    { title: 'O Caçador de Pipas' },
    { title: 'O Alquimista' },
    { title: '1984' },
    { title: 'O Grande Gatsby' },
    { title: 'O Senhor das Moscas' },
    { title: 'O Código Da Vinci' },
    { title: 'A Insustentável Leveza do Ser' },
    { title: 'Os Miseráveis' },
    { title: 'A Culpa é das Estrelas' },
    { title: 'O Guia do Mochileiro das Galáxias' },
    { title: 'O Lobo das Estepes' },
    { title: 'O Estrangeiro' },
    { title: 'O Processo' },
    { title: 'A Revolução dos Bichos' },
    { title: 'A Casa dos Espíritos' },
    { title: 'O Poderoso Chefão' },
    { title: 'O Diário de Anne Frank' },
    { title: 'O Último Dos Moicanos' },
    { title: 'O Nome da Rosa' },
    { title: 'A Terra das Sombras' },
    { title: 'O Silêncio dos Inocentes' },
    { title: 'Os Homens que Não Amavam as Mulheres' },
    { title: 'A Guerra dos Tronos' },
    { title: 'O Labirinto dos Espíritos' },
    { title: 'A Cidade e as Serras' },
    { title: 'O Jardim Secreto' },
    { title: 'O Morro dos Ventos Uivantes' },
    { title: 'A Divina Comédia' },
    { title: 'Os 3 Mosqueteiros' },
    { title: 'O Príncipe' },
    { title: 'O Sol da Meia-Noite' },
    { title: 'O Segredo' },
    { title: 'A Pequena Sereia' },
    { title: 'O Circo da Noite' },
    { title: 'O Mistério do Cinco Estrelas' },
    { title: 'A Peste' },
    { title: 'A Rainha Vermelha' },
    { title: 'A Coisa' },
    { title: 'O Conto da Aia' },
    { title: 'A Arte de Pedir Demissão' },
    { title: 'A Vida Secreta das Abelhas' },
    { title: 'O Último dos Moicanos' },
    { title: 'A Cor Púrpura' },
    { title: 'O Diário de Bridget Jones' },
    { title: 'O Andarilho das Estrelas' },
    { title: 'O Rei Leão' },
    { title: 'O Poder do Hábito' },
    { title: 'O Príncipe das Sombras' },
    { title: 'O Labirinto do Fauno' },
    { title: 'O Herói das Eras' },
    { title: 'A Luz Entre Oceanos' },
    { title: 'A Cidade dos Ossos' },
    { title: 'A Busca de Um Amor' },
    { title: 'O Tempo Entre Costuras' },
    { title: 'A Última Ceia' },
    { title: 'A Dança da Morte' },
    { title: 'O Monge e o Executivo' },
    { title: 'A Casa de Hades' },
    { title: 'O Menino do Pijama Listrado' },
    { title: 'A Princesa Prometida' },
    { title: 'A Trilogia Millennium' },
    { title: 'O Senhor dos Anéis: As Duas Torres' },
    { title: 'O Senhor dos Anéis: O Retorno do Rei' },
    { title: 'A Voz do Fogo' },
    { title: 'O Mágico de Oz' },
    { title: 'O Grande Gatsby' },
    { title: 'A Menina do Vale' },
    { title: 'O Túnel' },
    { title: 'A Confissão' },
    { title: 'O Retorno do Jovem Príncipe' },
    { title: 'A Última Tentação de Cristo' },
    { title: 'O Senhor das Sombras' },
    { title: 'A História Sem Fim' },
    { title: 'O Enigma do Quatro' },
    { title: 'O Garoto dos Olhos Azuis' },
    { title: 'O Alquimista' },
    { title: 'O Pequeno Príncipe' },
    { title: 'O Diário de um Mago' },
    { title: 'A Menina que Roubava Livros' },
    { title: 'O Mestre e Margarida' },
    { title: 'O Conto da Aia' },
    { title: 'O Último Samurai' }
];

// Função para validar as datas de entrega
function validateDates(dataEntrega) {
    const today = normalizeDate(new Date(+1)); // Data atual zerada
    const entrega = normalizeDate(new Date(dataEntrega)); // Data de entrega zerada

    // Define o limite máximo para 10 dias à frente
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 10);

    // Verifica se a data de entrega é hoje ou dentro dos próximos 10 dias
    if (entrega < today) {
        return 'A data de entrega deve ser hoje ou dentro dos próximos 10 dias.';
    }

    if (entrega > maxDate) {
        return 'A data de entrega não pode ser superior a 10 dias a partir de hoje.';
    }

    return null; // Sem erros
}
// Função para formatar uma data no formato dia/mês/ano
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Função para definir a data de devolução
function setReturnDate() {
    const entregaInput = document.getElementById('dataEntrega');
    const entregaDate = new Date(entregaInput.value);
    const devolucaoLabel = document.getElementById('dataDevolucaoLabel');

    if (entregaInput.value) {
        const maxDevolucao = new Date(entregaDate);
        maxDevolucao.setDate(entregaDate.getDate() + 60);
        
        // Formata a data de devolução para o formato dia/mês/ano
        const formattedDate = formatDate(maxDevolucao);
        
        devolucaoLabel.textContent = `Data de devolução será automaticamente definida para ${formattedDate}.`;
    } else {
        devolucaoLabel.textContent = 'Data de devolução será automaticamente definida para 60 dias após a data de entrega.';
    }
}

// Função para verificar se o livro está na lista
function checkBook() {
    const bookTitle = document.getElementById('Name_book').value.trim();
    const resultElement = document.getElementById('result');
    const dataEntrega = document.getElementById('dataEntrega').value;

    // Valida datas
    const dateError = validateDates(dataEntrega);
    if (dateError) {
        resultElement.textContent = dateError;
        return;
    }

    // Verifica se o título do livro foi preenchido
    if (!bookTitle) {
        resultElement.textContent = 'Por favor, digite um título de livro.';
        return;
    }

    // Procura o livro na lista
    const bookFound = booksDatabase.some(book => book.title.toLowerCase() === bookTitle.toLowerCase());

    if (bookFound) {
        resultElement.textContent = `O livro "${bookTitle}" está disponível.`;
        // Redireciona para home.html após 1 segundo
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000); // 1000 milissegundos = 1 segundo
    } else {
        resultElement.textContent = `O livro "${bookTitle}" não foi encontrado.`;
    }
}

// Adiciona um evento ao campo de data de entrega para atualizar a data de devolução
document.getElementById('dataEntrega').addEventListener('change', setReturnDate);

// Adiciona um evento ao botão para verificar o livro
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    checkBook();
});


// Função para exibir sugestões
function showSuggestions() {
    const input = document.getElementById('Name_book');
    const suggestionsBox = document.getElementById('suggestions');
    const query = input.value.toLowerCase().trim();
    
    // Limpa sugestões antigas
    suggestionsBox.innerHTML = '';
    
    // Se não houver texto, não mostrar sugestões
    if (query.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }
    
    // Filtra os livros que correspondem à consulta
    const filteredBooks = booksDatabase.filter(book =>
        book.title.toLowerCase().includes(query)
    );
    
    // Se não houver livros correspondentes
    if (filteredBooks.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }
    
    // Adiciona sugestões à caixa de sugestões
    filteredBooks.forEach(book => {
        const div = document.createElement('div');
        div.textContent = book.title;
        div.className = 'suggestion-item';
        div.addEventListener('click', () => {
            input.value = book.title;
            suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(div);
    });
    
    // Exibe a caixa de sugestões
    suggestionsBox.style.display = 'block';
}

// Adiciona o evento de entrada para mostrar sugestões
document.getElementById('Name_book').addEventListener('input', showSuggestions);

// Fecha a caixa de sugestões quando o usuário clica fora
document.addEventListener('click', (e) => {
    if (!document.getElementById('Name_book').contains(e.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});


function validateDates(dataEntrega) {
    const today = new Date();
    const entrega = new Date(dataEntrega);

    // Define o limite máximo (hoje + 10 dias)
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 10);

    // Verifica se a data de entrega é hoje ou dentro dos próximos 10 dias
    if (entrega < today.setHours(0, 0, 0, 0) || entrega > maxDate.setHours(0, 0, 0, 0)) {
        return 'A data de entrega deve ser hoje ou dentro dos próximos 10 dias.';
    }

    return null; // Sem erros
}

// Atualiza a função para definir a data de devolução
function setReturnDate() {
    const entregaInput = document.getElementById('dataEntrega');
    const entregaDate = new Date(entregaInput.value);
    const devolucaoLabel = document.getElementById('dataDevolucaoLabel');

    if (entregaInput.value) {
        // Define o prazo de devolução para 60 dias após a data de entrega
        const maxDevolucao = new Date(entregaDate);
        maxDevolucao.setDate(entregaDate.getDate() + 60);
        
        // Formata a data de devolução para o formato dia/mês/ano
        const formattedDate = formatDate(maxDevolucao);
        
        devolucaoLabel.textContent = `Data de devolução será automaticamente definida para ${formattedDate}.`;
    } else {
        devolucaoLabel.textContent = 'Data de devolução será automaticamente definida para 60 dias após a data de entrega.';
    }
}

// Adiciona o evento de entrada para validação de data e configuração de data de devolução
document.getElementById('dataEntrega').addEventListener('change', () => {
    const entregaInput = document.getElementById('dataEntrega');
    const dateError = validateDates(entregaInput.value);
    const resultElement = document.getElementById('result');

    if (dateError) {
        resultElement.textContent = dateError;
        entregaInput.value = ''; // Limpa o campo de data
        setReturnDate(); // Atualiza a data de devolução
    } else {
        resultElement.textContent = '';
        setReturnDate(); // Atualiza a data de devolução
    }
});

// Função para verificar se o livro está na lista
function checkBook() {
    const bookTitle = document.getElementById('Name_book').value.trim();
    const resultElement = document.getElementById('result');
    const dataEntrega = document.getElementById('dataEntrega').value;

    // Valida datas
    const dateError = validateDates(dataEntrega);
    if (dateError) {
        resultElement.textContent = dateError;
        return;
    }

    // Verifica se o título do livro foi preenchido
    if (!bookTitle) {
        resultElement.textContent = 'Por favor, digite um título de livro.';
        return;
    }

    // Procura o livro na lista
    const bookFound = booksDatabase.some(book => book.title.toLowerCase() === bookTitle.toLowerCase());

    if (bookFound) {
        resultElement.textContent = `O livro "${bookTitle}" está disponível.`;
        // Redireciona para home.html após 1 segundo
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000); // 1000 milissegundos = 1 segundo
    } else {
        resultElement.textContent = `O livro "${bookTitle}" não foi encontrado.`;
    }
}

// Adiciona um evento ao botão para verificar o livro
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    checkBook();
});


// Função para validar se todos os campos estão preenchidos
function validateForm() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const bookTitle = document.getElementById('Name_book').value.trim();
    const dataEntrega = document.getElementById('dataEntrega').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !bookTitle || !dataEntrega) {
        return 'Todos os campos são obrigatórios.';
    }

    // Valida a data de entrega
    const dateError = validateDates(dataEntrega);
    if (dateError) {
        return dateError;
    }

    return null; // Sem erros
}

// Função para verificar se o livro está na lista
function checkBook() {
    const resultElement = document.getElementById('result');
    const errorMessage = validateForm();

    if (errorMessage) {
        resultElement.textContent = errorMessage;
        return;
    }

    const bookTitle = document.getElementById('Name_book').value.trim();

    // Procura o livro na lista
    const bookFound = booksDatabase.some(book => book.title.toLowerCase() === bookTitle.toLowerCase());

    if (bookFound) {
        resultElement.textContent = `O livro "${bookTitle}" está disponível.`;
        // Redireciona para home.html após 1 segundo
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000); // 1000 milissegundos = 1 segundo
    } else {
        resultElement.textContent = `O livro "${bookTitle}" não foi encontrado.`;
    }
}

// Adiciona um evento ao botão para verificar o livro
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    checkBook();
});