# Books

## Descrição

O Books é uma aplicação web que permite aos usuários visualizar e filtrar livros por categorias, disponibilidade e preço. A aplicação é construída com HTML, CSS e JavaScript, utilizando métodos de array para manipulação dos dados dos livros.

## Funcionalidades

- **Filtragem de Livros por Categoria**: Front-end, Back-end, Dados.
- **Filtragem de Livros Disponíveis**: Exibir apenas os livros que estão em estoque.
- **Ordenação de Livros por Preço**: Ordenar os livros em ordem crescente de preço.
- **Exibição do Valor Total dos Livros Disponíveis**: Calcular e exibir o valor total dos livros que estão disponíveis em estoque.

## Estrutura de Arquivos

- `index.html`: Estrutura HTML da aplicação.
- `style.css`: Estilos CSS para a aplicação.
- `app/main.js`: Script principal para gerenciar eventos e manipular o DOM.
- `app/metodoMap.js`: Implementação do método map para aplicar descontos nos preços dos livros.
- `app/metodoForEach.js`: Implementação do método forEach para iterar sobre a lista de livros e exibi-los na tela.
- `app/metodoFilter.js`: Implementação do método filter para filtrar livros por categoria e disponibilidade.
- `app/metodoSort.js`: Implementação do método sort para ordenar os livros por preço.
- `app/metodoReduce.js`: Implementação do método reduce para calcular o valor total dos livros disponíveis.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/books.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd books
   ```

## Uso

1. Abra o arquivo `index.html` em um navegador web.

2. Use os botões na navegação para filtrar e ordenar os livros conforme desejado.

## Scripts JavaScript

### `main.js`

- Seleciona todos os botões e adiciona event listeners para o evento de clique.
- Define a função `filtrarLivro` que filtra os livros com base na categoria ou disponibilidade e exibe os livros filtrados na tela.
- Define a função `exibirValorTotal` para exibir o valor total dos livros disponíveis.

### `metodoMap.js`

- Define a função `aplicarDesconto` que aplica um desconto de 30% no preço dos livros.

### `metodoForEach.js`

- Define a função `exibirOsLivrosNaTela` que itera sobre a lista de livros e os exibe na tela.

### `metodoFilter.js`

- Define a função `filtrarCategoria` que filtra os livros com base na categoria.
- Define a função `filtrarDisponivel` que filtra os livros que estão disponíveis em estoque.

### `metodoSort.js`

- Define a função `ordenarLivrosPorPreco` que ordena os livros em ordem crescente de preço.

### `metodoReduce.js`

- Define a função `calcularTotal` que calcula o valor total dos livros disponíveis.
