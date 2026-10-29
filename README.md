# Catálogo de Filmes

Projeto de estudo em **React para web**: um catálogo de filmes com filtros e favoritos, desenvolvido para praticar os conceitos básicos da biblioteca.

> **Status:** primeira versão implementada e T01 concluída, com formulário de busca por título combinado aos filtros de gênero e favoritos. A interface inclui mensagens de lista vazia, adaptação para telas pequenas e cuidados com navegação por teclado.

## Objetivo

Criar uma aplicação simples, com uma única página, que permita explorar filmes e marcar os preferidos. O projeto deve demonstrar JSX, componentes, props, Virtual DOM, listas e renderização condicional.

## Funcionalidades

- Exibir cards com pôster, título, gênero e ano de lançamento.
- Pesquisar por título ao enviar o formulário, inclusive com Enter, e limpar apenas a busca.
- Adicionar e remover filmes dos favoritos.
- Filtrar os filmes por gênero, incluindo a opção de exibir todos.
- Alternar entre o catálogo completo e apenas os favoritos.
- Exibir uma mensagem quando nenhum filme corresponder aos filtros.
- Voltar ao catálogo completo pelo botão da lista vazia, preservando os favoritos.
- Adaptar a apresentação para telas de computador e celular.

O filtro de gênero também será aplicado à visualização de favoritos.

## Conceitos de React

| Conceito | Aplicação no projeto |
| --- | --- |
| **JSX** | Descrever a estrutura da página, dos filtros e dos cards. |
| **Componentes** | Dividir a interface em partes reutilizáveis, como cards e filtros. |
| **Props** | Passar os dados de cada filme, o estado de favorito e as funções de interação para os componentes. |
| **Virtual DOM e reconciliação** | Entender como o React compara as representações da interface e aplica as alterações necessárias ao DOM quando o estado muda. |
| **Listas** | Renderizar os filmes com `.map()`, usando o identificador de cada filme como `key`. |
| **Renderização condicional** | Alterar a indicação de favorito e mostrar mensagens quando a lista estiver vazia. |
| **Estado com `useState`** | Controlar os favoritos, os filtros, o texto digitado e o termo de busca aplicado. |
| **Formulários controlados** | Manter o campo de busca sincronizado com o estado e tratar o envio com `onSubmit` e `preventDefault`. |

## Tecnologias

- React
- JavaScript com JSX
- HTML e CSS
- Vite para desenvolvimento e build

Os filmes são definidos em um array local. A primeira versão não terá API, banco de dados ou login.

## Etapas de implementação

Cada etapa reúne uma mudança que pode ser revisada e commitada separadamente.

- [x] Estrutura inicial com React e Vite.
- [x] Dados locais e listagem com `CardFilme` e `ListaFilmes` — JSX, componentes, props e `.map()`.
- [x] Pôsteres dos filmes e apresentação visual dos cards.
- [x] Adicionar e remover favoritos com `useState` e indicação condicional no botão.
- [x] Filtrar por gênero e alternar a visualização de favoritos.
- [x] Mensagens de lista vazia e revisão de acessibilidade e responsividade.

## Próximas etapas

O planejamento da próxima versão está em [TASKS.md](./TASKS.md), com tarefas em ordem de execução, critérios de conclusão e uma sugestão de commit para cada entrega.

A T01, busca por título, está concluída. As próximas tarefas incluem persistência local, páginas com React Router e avaliações por formulário. Depois, adicionam consumo de API, estados de carregamento e tratamento de erros. As tarefas restantes continuam pendentes.

## Estrutura de pastas

```text
public/
  images/           # Seis pôsteres locais, acessíveis por /images/nome-do-arquivo
src/
  assets/           # Imagens e outros arquivos importados pelos componentes
  components/
    BuscaFilmes.jsx # Formulário controlado de busca por título
    BuscaFilmes.css
    CardFilme.jsx   # Dados e apresentação de cada filme
    CardFilme.css
    FiltroGenero.jsx    # Seleção de gênero
    FiltroFavoritos.jsx # Opção de mostrar apenas favoritos
    Filtros.css         # Estilos dos controles de filtro
    ListaFilmes.jsx # Lista de cards renderizada com .map()
    ListaFilmes.css
  data/
    filmes.js       # Array local com os dados dos filmes
  styles/
    global.css      # Estilos globais da aplicação
  App.jsx           # Componente principal
  main.jsx          # Entrada do React e montagem no DOM
.gitignore
index.html          # Documento HTML que recebe a aplicação
package-lock.json   # Versões das dependências instaladas
package.json        # Dependências e comandos do projeto
vite.config.js      # Configuração do Vite com suporte a React
```

A pasta `src/assets/` continua reservada para arquivos importados pelos componentes. Seu `.gitkeep` permite versioná-la enquanto estiver vazia.

## Pôsteres dos filmes

As imagens estão salvas em `public/images/`, com resolução de 500 × 750 pixels. O campo `poster` de cada filme aponta para seu arquivo local, sem consultas a uma API durante o uso da aplicação.

Os cards apresentam texto alternativo, carregamento de imagens sob demanda (`loading="lazy"`) e proporção reservada de 2:3. A grade exibe três colunas em telas grandes, duas em telas intermediárias e uma em telas pequenas.

Fontes das imagens, obtidas do servidor de imagens do TMDB:

| Filme | Imagem original |
| --- | --- |
| A Origem | [Pôster](https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg) |
| Interestelar | [Pôster](https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg) |
| Toy Story | [Pôster](https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg) |
| Shrek | [Pôster](https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg) |
| De Volta para o Futuro | [Pôster](https://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg) |
| Jurassic Park | [Pôster](https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg) |

## Componentes

| Componente | Responsabilidade |
| --- | --- |
| `App` | Manter o estado e reunir os componentes da página. |
| `BuscaFilmes` | Controlar a entrada por props e oferecer envio e limpeza da busca. |
| `FiltroGenero` | Permitir a seleção do gênero. |
| `FiltroFavoritos` | Controlar a exibição de apenas favoritos. |
| `ListaFilmes` | Renderizar os filmes filtrados ou a mensagem de lista vazia. |
| `CardFilme` | Exibir os dados de um filme e o botão de favoritar. |

Cada filme possui um identificador único, título, gênero, ano de lançamento e caminho do pôster local. Os favoritos são controlados pelos identificadores dos filmes.

## Favoritos

O `App` mantém os identificadores dos filmes favoritos em um estado criado com `useState`. A função `alternarFavorito` adiciona ou remove um identificador usando a atualização funcional do estado, sem modificar o array anterior.

O estado e a função são passados por props para `ListaFilmes` e `CardFilme`. Ao clicar no botão **Favorito**, o coração e as cores do botão mudam conforme a seleção. O atributo `aria-pressed` informa o estado aos leitores de tela, e o botão pode ser acionado pelo teclado.

Os favoritos ficam apenas na memória e são reiniciados ao recarregar a página.

## Busca por título

O componente `BuscaFilmes` recebe o texto digitado e as ações por props. O `App` mantém dois estados: `textoBusca`, atualizado enquanto o usuário digita, e `termoBusca`, aplicado somente ao enviar o formulário pelo botão **Buscar** ou pela tecla Enter. O `preventDefault` evita o recarregamento da página.

A busca encontra trechos do título, ignora maiúsculas, minúsculas e espaços nas extremidades e combina o termo aplicado com gênero e favoritos. O contador também informa o termo aplicado, mesmo se o usuário estiver digitando uma nova pesquisa.

Enviar uma busca vazia remove apenas a restrição por título. O botão **Limpar busca** apaga tanto o texto digitado quanto o termo aplicado, preserva gênero e favoritos e devolve o foco ao campo de pesquisa.

## Filtros

O `App` controla o gênero selecionado e a opção de mostrar apenas favoritos com `useState`. Os componentes `FiltroGenero` e `FiltroFavoritos` recebem os valores e as funções de atualização por props, mantendo os controles sincronizados com o estado.

Os gêneros são extraídos do array de filmes, sem repetições e em ordem alfabética. A opção **Todos os gêneros** remove a restrição de gênero.

A lista exibida é calculada com `.filter()`, combinando gênero, favoritos e o termo de busca aplicado. Trocar os filtros preserva os favoritos já marcados. Ao desmarcar um filme na visualização de favoritos, ele sai imediatamente da lista.

O título identifica a visualização atual, e um contador informa a quantidade de resultados.

## Listas vazias e acessibilidade

A `ListaFilmes` usa renderização condicional para substituir a grade por uma mensagem quando não há resultados:

- **Você ainda não tem favoritos:** a visualização de favoritos está ativa, sem filmes marcados.
- **Nenhum favorito neste gênero:** não há favoritos que correspondam ao gênero selecionado.
- **Nenhum filme encontrado:** não há filmes para os demais critérios de exibição.
- **Nenhum filme encontrado para esta busca** ou **Nenhum favorito encontrado para esta busca:** o termo aplicado não tem resultados na combinação atual de filtros.

O botão **Ver todos os filmes** limpa gênero, visualização de favoritos e busca (texto digitado e termo aplicado), preserva os favoritos e leva o foco ao título do catálogo. Ao remover um filme na visualização de favoritos, o foco também vai para esse título, pois o botão do card sai da página. O `useRef` permite acessar esse elemento sem criar um novo estado.

Os controles possuem rótulos, foco visível e acionamento por teclado. O contador usa `role="status"` para anunciar alterações, os pôsteres possuem texto alternativo e cada card é identificado por seu título. A lista mantém seu papel semântico mesmo com os marcadores ocultos.

Em telas pequenas, os filtros ficam empilhados e ocupam a largura disponível. A grade possui uma, duas ou três colunas conforme a largura da tela, e os textos podem quebrar linha para acomodar a ampliação da fonte.

## Fluxo de uso

1. Ao abrir a página, o usuário visualiza todos os filmes cadastrados.
2. Pode enviar uma busca por título e selecionar um gênero para filtrar o catálogo.
3. Pode marcar ou desmarcar um filme como favorito pelo card.
4. Ao ativar a opção de favoritos, a lista mostra apenas os filmes marcados que correspondem ao gênero selecionado.
5. O contador informa a quantidade de filmes que correspondem aos filtros.
6. Se a lista estiver vazia, uma mensagem explica a situação e oferece o botão para voltar ao catálogo completo.

Na primeira versão, os favoritos e filtros ficarão apenas na memória da aplicação e serão reiniciados ao recarregar a página.

## Como executar

Pré-requisitos: Node.js 22.12 ou superior e npm.

Na raiz do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal, normalmente `http://localhost:5173`.

Para gerar a versão de produção na pasta `dist/`:

```bash
npm run build
```

Para visualizar a versão de produção localmente, após o build:

```bash
npm run preview
```

Referências: [documentação do React](https://react.dev/learn) e [guia do Vite](https://vite.dev/guide/).
