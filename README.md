# Catálogo de Filmes

Projeto de estudo em **React para web**: um catálogo de filmes com filtros e favoritos, desenvolvido para praticar os conceitos básicos da biblioteca.

> **Status:** primeira versão e T01 a T04 concluídas, com catálogo, favoritos e detalhes dos filmes, busca por título, filtro de gênero e favoritos persistidos no navegador. A interface inclui mensagens de lista vazia, adaptação para telas pequenas e cuidados com navegação por teclado.

## Objetivo

Criar uma aplicação simples que permita explorar filmes e marcar os preferidos. O projeto demonstra JSX, componentes, props, Virtual DOM, listas, renderização condicional, estado, formulários, efeitos e navegação com React Router.

## Funcionalidades

- Exibir cards com pôster, título, gênero e ano de lançamento.
- Abrir os detalhes pelo título do card, com pôster, gênero, ano, sinopse e ação de favorito.
- Pesquisar por título ao enviar o formulário, inclusive com Enter, e limpar apenas a busca.
- Adicionar e remover filmes dos favoritos.
- Restaurar os favoritos ao recarregar a página usando `localStorage`.
- Filtrar os filmes por gênero, incluindo a opção de exibir todos.
- Navegar entre o catálogo completo e a página de favoritos sem recarregar a aplicação.
- Exibir uma página para endereços inexistentes, com link de retorno ao catálogo.
- Exibir uma mensagem quando nenhum filme corresponder aos filtros.
- Voltar ao catálogo completo pelo botão da lista vazia, preservando os favoritos.
- Adaptar a apresentação para telas de computador e celular.

Busca e filtro de gênero estão disponíveis nas duas páginas.

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
| **Efeitos com `useEffect`** | Sincronizar os favoritos com o `localStorage` quando a seleção muda. |
| **Formulários controlados** | Manter o campo de busca sincronizado com o estado e tratar o envio com `onSubmit` e `preventDefault`. |
| **React Router** | Usar `BrowserRouter`, `Routes` e `Route` para as páginas, `NavLink` no menu, `Link` para navegar e `useParams` para identificar o filme dos detalhes. |

## Tecnologias

- React
- React Router
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

T01 (busca por título), T02 (persistência dos favoritos), T03 (React Router) e T04 (detalhes com dados locais) estão concluídas. As próximas tarefas incluem avaliações por formulário e sua persistência. Depois, adicionam consumo de API, estados de carregamento e tratamento de erros. As tarefas restantes continuam pendentes.

## Estrutura de pastas

```text
public/
  images/           # Seis pôsteres locais, acessíveis por /images/nome-do-arquivo
src/
  assets/           # Imagens e outros arquivos importados pelos componentes
  components/
    BotaoFavorito.jsx # Ação compartilhada por cards e detalhes
    BotaoFavorito.css
    BuscaFilmes.jsx # Formulário controlado de busca por título
    BuscaFilmes.css
    CardFilme.jsx   # Dados e apresentação de cada filme
    CardFilme.css
    FiltroGenero.jsx    # Seleção de gênero
    Filtros.css         # Estilos dos controles de filtro
    ListaFilmes.jsx # Lista de cards renderizada com .map()
    ListaFilmes.css
    PaginaFilmes.jsx # Busca, gênero e listagem compartilhados pelas páginas
  data/
    filmes.js       # Array local com os dados dos filmes
  pages/
    Catalogo.jsx
    DetalhesFilme.jsx
    DetalhesFilme.css
    Favoritos.jsx
    PaginaNaoEncontrada.jsx
  styles/
    global.css      # Estilos globais da aplicação
  utils/
    favoritosStorage.js # Leitura, validação e gravação dos favoritos
  App.jsx           # Layout, rotas e estado compartilhado de favoritos
  main.jsx          # Entrada do React com BrowserRouter
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
| `App` | Manter os favoritos, o cabeçalho compartilhado, o menu e as rotas. |
| `PaginaFilmes` | Reunir busca, filtro de gênero e listagem para catálogo e favoritos. |
| `BuscaFilmes` | Controlar a entrada por props e oferecer envio e limpeza da busca. |
| `FiltroGenero` | Permitir a seleção do gênero. |
| `ListaFilmes` | Renderizar os filmes filtrados ou a mensagem de lista vazia. |
| `CardFilme` | Exibir os dados de um filme e o botão de favoritar. |
| `BotaoFavorito` | Alternar o favorito com o mesmo comportamento e indicação visual nos cards e nos detalhes. |

Cada filme possui um identificador único, título, gênero, ano de lançamento, sinopse e caminho do pôster local. Os favoritos são controlados pelos identificadores dos filmes.

## Páginas e navegação

| Endereço | Página |
| --- | --- |
| `/` | Catálogo completo, com busca e filtro de gênero. |
| `/favoritos` | Filmes marcados como favoritos, também com busca e gênero. |
| `/filmes/:id` | Detalhes do filme local identificado pelo parâmetro da rota. |
| Qualquer outro endereço | Página não encontrada, com link para o catálogo. |

O `BrowserRouter` envolve a aplicação em `main.jsx`, e o `App` associa os caminhos às páginas com `Routes` e `Route`. O cabeçalho permanece visível em todas as páginas. Os links `NavLink` destacam a página atual e informam sua seleção com `aria-current="page"`. A navegação não recarrega o documento e permite usar voltar e avançar do navegador. [Documentação do React Router](https://reactrouter.com/start/declarative/routing).

As páginas `Catalogo` e `Favoritos` reutilizam `PaginaFilmes`. O checkbox de mostrar apenas favoritos foi substituído pelo link **Favoritos** no menu. O estado dos favoritos permanece acima das rotas, no `App`; busca e gênero são locais a cada página e reiniciam ao trocar de página ou recarregar. O título do documento e o foco no título da página são atualizados ao entrar em cada uma.

## Detalhes dos filmes

O título de cada card é um `Link` para `/filmes/:id`, separado do botão de favorito. A página `DetalhesFilme` usa `useParams` para ler o identificador e localizar o filme no array local. Por exemplo, `/filmes/1` exibe **A Origem**.

A página apresenta o pôster, o título, o gênero, o ano e uma sinopse. O componente `BotaoFavorito` recebe o mesmo estado e a mesma ação usados pelos cards, permitindo marcar ou desmarcar o filme sem sair dos detalhes. O título do documento e o foco acompanham o filme exibido.

Um identificador sem filme correspondente, como `/filmes/999` ou `/filmes/abc`, mostra **Filme não encontrado**, sem renderizar os dados ou o botão de favorito. Tanto a página válida quanto essa mensagem oferecem um link para voltar ao catálogo.

## Favoritos

O `App` mantém os identificadores dos filmes favoritos em um estado criado com `useState`. A função `alternarFavorito` adiciona ou remove um identificador usando a atualização funcional do estado, sem modificar o array anterior.

O estado e a função são passados por props para as páginas e, por meio de `PaginaFilmes`, para `ListaFilmes` e `CardFilme`. Cards e detalhes reutilizam `BotaoFavorito`. Ao clicar no botão **Favorito**, o coração e as cores mudam conforme a seleção. O atributo `aria-pressed` informa o estado aos leitores de tela, e o botão pode ser acionado pelo teclado. A seleção é compartilhada entre catálogo, favoritos e detalhes.

Os favoritos são restaurados pelo inicializador do `useState`, passando a função `carregarFavoritos` sem executá-la a cada renderização. Um `useEffect` com a dependência `[favoritos]` grava a seleção sempre que ela muda. Assim, a leitura acontece antes da primeira gravação e evita substituir os favoritos salvos por um array vazio.

As funções de armazenamento estão em `src/utils/favoritosStorage.js`. A chave `catalogo-filmes:favoritos` contém um array JSON com os IDs, como `[1, 3]`. A leitura aceita apenas IDs presentes no catálogo e remove repetições. JSON inválido ou um valor que não seja um array resulta em uma seleção vazia.

Se o navegador bloquear o armazenamento ou não houver espaço para gravar, a aplicação continua permitindo marcar e desmarcar filmes em memória. Nesse caso, as mudanças podem não ser preservadas após recarregar. A persistência é local ao navegador e à origem da aplicação.

## Busca por título

O componente `BuscaFilmes` recebe o texto digitado e as ações por props. A `PaginaFilmes` mantém dois estados: `textoBusca`, atualizado enquanto o usuário digita, e `termoBusca`, aplicado somente ao enviar o formulário pelo botão **Buscar** ou pela tecla Enter. O `preventDefault` evita o recarregamento da página.

A busca encontra trechos do título, ignora maiúsculas, minúsculas e espaços nas extremidades e combina o termo aplicado com gênero e favoritos. O contador também informa o termo aplicado, mesmo se o usuário estiver digitando uma nova pesquisa.

Enviar uma busca vazia remove apenas a restrição por título. O botão **Limpar busca** apaga tanto o texto digitado quanto o termo aplicado, preserva o gênero e a página atual e devolve o foco ao campo de pesquisa.

## Filtros

A `PaginaFilmes` controla o gênero selecionado com `useState` e o passa para `FiltroGenero` por props. A página de favoritos informa `somenteFavoritos` à listagem compartilhada, sem precisar de um checkbox para alternar a visualização.

Os gêneros são extraídos do array de filmes, sem repetições e em ordem alfabética. A opção **Todos os gêneros** remove a restrição de gênero.

A lista exibida é calculada com `.filter()`, combinando gênero, favoritos e o termo de busca aplicado. Trocar os filtros preserva os favoritos já marcados. Ao desmarcar um filme na visualização de favoritos, ele sai imediatamente da lista.

O título identifica a visualização atual, e um contador informa a quantidade de resultados.

## Listas vazias e acessibilidade

A `ListaFilmes` usa renderização condicional para substituir a grade por uma mensagem quando não há resultados:

- **Você ainda não tem favoritos:** a visualização de favoritos está ativa, sem filmes marcados.
- **Nenhum favorito neste gênero:** não há favoritos que correspondam ao gênero selecionado.
- **Nenhum filme encontrado:** não há filmes para os demais critérios de exibição.
- **Nenhum filme encontrado para esta busca** ou **Nenhum favorito encontrado para esta busca:** o termo aplicado não tem resultados na combinação atual de filtros.

A ação **Ver todos os filmes** limpa gênero e busca quando acionada no catálogo. Na página de favoritos, ela é um `Link` para `/`, que abre o catálogo com os filtros iniciais. As duas ações preservam os favoritos e levam o foco ao título da página. Ao remover um filme na página de favoritos, o foco também vai para esse título, pois o botão do card sai da página. O `useRef` permite acessar esse elemento sem criar um novo estado.

Os controles possuem rótulos, foco visível e acionamento por teclado. O contador usa `role="status"` para anunciar alterações, os pôsteres possuem texto alternativo e cada card é identificado por seu título. A lista mantém seu papel semântico mesmo com os marcadores ocultos.

Em telas pequenas, os filtros ficam empilhados e ocupam a largura disponível. A grade possui uma, duas ou três colunas conforme a largura da tela, e os textos podem quebrar linha para acomodar a ampliação da fonte.

## Fluxo de uso

1. Ao abrir a página, o usuário visualiza todos os filmes cadastrados.
2. Pode enviar uma busca por título e selecionar um gênero para filtrar o catálogo.
3. Pode marcar ou desmarcar um filme como favorito pelo card.
4. Pelo link **Favoritos**, acessa uma página com os filmes marcados e pode pesquisar ou filtrar essa seleção.
5. O contador informa a quantidade de filmes que correspondem aos filtros.
6. Se a lista estiver vazia, uma mensagem explica a situação e oferece o botão para voltar ao catálogo completo.
7. Pelo título de um card, abre os detalhes e pode ler a sinopse ou alterar o favorito.

Os favoritos são persistidos no navegador. O gênero e a busca continuam apenas em memória e são reiniciados ao trocar de página ou recarregar.

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

O servidor de desenvolvimento permite abrir diretamente `http://localhost:5173/favoritos` ou `http://localhost:5173/filmes/1` e recarregar a rota. Ao publicar em hospedagem estática, configure o serviço para servir `index.html` nas rotas da aplicação, preservando o acesso aos arquivos de `assets/` e `images/`.

Referências: [documentação do React](https://react.dev/learn), [React Router](https://reactrouter.com/start/declarative/installation) e [guia do Vite](https://vite.dev/guide/).
