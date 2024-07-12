const botoes = document.querySelectorAll('.btn')
//const elementoValorTotal = querySelectorBy('.btn') valor_total_livros_disponiveis

botoes.forEach(btn => btn.addEventListener('click', filtrarLivro));

function filtrarLivro() {
    
    const elementoBtn = document.getElementById(this.id)

    const categoria = elementoBtn.value
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponivel() : filtrarCategoria(categoria)    
    
    exibirOsLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        
        const valorTotal = calcularTotal(livrosFiltrados)
       
        exibirValorTotal(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal){

    elementoValorTotal.innerHTML = ` <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}