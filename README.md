# Catálogo de Filmes

Projeto de estudo em **React para web**: um catálogo de filmes com filtros e favoritos, desenvolvido para praticar os conceitos básicos da biblioteca.

> **Status:** catálogo básico implementado. A página lista seis filmes com título, gênero e ano. Pôsteres, favoritos e filtros serão adicionados nas próximas etapas.

## Objetivo

Criar uma aplicação simples, com uma única página, que permita explorar filmes e marcar os preferidos. O projeto deve demonstrar JSX, componentes, props, Virtual DOM, listas e renderização condicional.

## Funcionalidades planejadas

- Exibir cards com pôster, título, gênero e ano de lançamento.
- Adicionar e remover filmes dos favoritos.
- Filtrar os filmes por gênero, incluindo a opção de exibir todos.
- Alternar entre o catálogo completo e apenas os favoritos.
- Exibir uma mensagem quando nenhum filme corresponder aos filtros.
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
| **Estado com `useState`** | Controlar os favoritos, o gênero selecionado e a opção de mostrar apenas favoritos. |

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
- [ ] Pôsteres dos filmes e apresentação visual dos cards.
- [ ] Adicionar e remover favoritos com `useState` e indicação condicional no botão.
- [ ] Filtrar por gênero e alternar a visualização de favoritos.
- [ ] Mensagens de lista vazia e revisão de acessibilidade e responsividade.

## Estrutura de pastas

```text
public/
  images/           # Imagens públicas, acessíveis por /images/nome-do-arquivo
src/
  assets/           # Imagens e outros arquivos importados pelos componentes
  components/
    CardFilme.jsx   # Dados e apresentação de cada filme
    CardFilme.css
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

As pastas de imagens ainda estão vazias. Os arquivos `.gitkeep` permitem que elas sejam versionadas pelo Git e podem ser removidos quando receberem conteúdo.

## Componentes planejados

| Componente | Responsabilidade |
| --- | --- |
| `App` | Manter o estado e reunir os componentes da página. |
| `FiltroGenero` | Permitir a seleção do gênero. |
| `FiltroFavoritos` | Controlar a exibição de apenas favoritos. |
| `ListaFilmes` | Renderizar os filmes filtrados ou a mensagem de lista vazia. |
| `CardFilme` | Exibir os dados de um filme e o botão de favoritar. |

Cada filme possui um identificador único, título, gênero e ano de lançamento. O caminho ou URL do pôster será adicionado na próxima etapa. Os favoritos serão controlados pelos identificadores dos filmes.

## Fluxo de uso planejado

1. Ao abrir a página, o usuário visualiza todos os filmes cadastrados.
2. Pode selecionar um gênero para filtrar o catálogo.
3. Pode marcar ou desmarcar um filme como favorito pelo card.
4. Ao ativar a opção de favoritos, a lista mostra apenas os filmes marcados que correspondem ao gênero selecionado.
5. Quando não houver resultados, a interface apresenta uma mensagem explicativa.

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
