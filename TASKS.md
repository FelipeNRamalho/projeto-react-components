# Próximas tarefas

Plano de evolução do catálogo de filmes. A primeira versão e T01 a T04 estão concluídas; T05 a T10 continuam pendentes.

Implementar uma tarefa por vez, mantendo a aplicação funcional e deixando cada entrega pronta para um commit separado. Atualizar o README e marcar a tarefa ao concluí-la. Os commits serão feitos pelo usuário.

O projeto já usa estado com `useState`. As próximas tarefas ampliam esse uso com formulários, persistência, efeitos, navegação e dados externos.

## Ordem de execução

- [x] T01 — Formulário de busca por título.
- [x] T02 — Persistência dos favoritos.
- [x] T03 — Navegação com React Router.
- [x] T04 — Página de detalhes com dados locais.
- [ ] T05 — Formulário de avaliação pessoal.
- [ ] T06 — Persistência das avaliações.
- [ ] T07 — Modelo de filmes preparado para API.
- [ ] T08 — Catálogo e busca com API.
- [ ] T09 — Detalhes de filmes pela API.
- [ ] T10 — Revisão integrada e documentação.

## T01 — Formulário de busca por título

**Entrega:** componente `BuscaFilmes` com campo controlado, botão **Buscar** e ação para limpar a busca. O texto digitado fica separado do termo aplicado; a pesquisa acontece ao enviar o formulário, inclusive com Enter.

**Conceitos:** `useState`, formulário, `onSubmit`, `preventDefault` e props.

**Critérios de conclusão:**

- Buscar no catálogo local ignorando maiúsculas, minúsculas e espaços nas extremidades.
- Combinar a pesquisa com gênero e favoritos, atualizando o contador e as mensagens de lista vazia.
- Uma busca vazia remove a restrição de título. Limpar todos os filtros também limpa a pesquisa.

**Commit sugerido:** `feat: adicionar formulario de busca por titulo`

## T02 — Persistência dos favoritos

**Entrega:** restaurar os favoritos do `localStorage` na inicialização e salvar as alterações com `useEffect`.

**Conceitos:** inicialização de estado, efeitos, dependências e serialização JSON.

**Critérios de conclusão:**

- Favoritar, recarregar e continuar vendo a seleção; desfavoritar e recarregar sem restaurar o item removido.
- Ler os dados antes da primeira gravação, evitando substituir os favoritos salvos por um array vazio.
- Validar os dados armazenados e manter a aplicação utilizável se o conteúdo estiver inválido ou o armazenamento estiver indisponível.

**Commit sugerido:** `feat: persistir favoritos no localStorage`

## T03 — Navegação com React Router

**Depende de:** T01 e T02.

**Entrega:** instalar React Router e criar páginas de catálogo (`/`) e favoritos (`/favoritos`), com cabeçalho compartilhado, links de navegação e página para endereço inexistente.

**Conceitos:** rotas, `Link`, `NavLink`, layout compartilhado e estado acima das páginas.

**Critérios de conclusão:**

- Navegar sem recarregar a aplicação e usar os botões voltar e avançar do navegador.
- Preservar favoritos entre páginas e reutilizar os componentes de listagem, busca e gênero.
- A página de favoritos substitui o checkbox atual de visualização de favoritos.
- Abrir ou recarregar uma rota diretamente no ambiente de desenvolvimento.

**Commit sugerido:** `feat: adicionar paginas de catalogo e favoritos`

## T04 — Página de detalhes com dados locais

**Depende de:** T03.

**Entrega:** rota `/filmes/:id` com pôster, título, gênero, ano, sinopse e ação de favorito. Acrescentar as sinopses ao conjunto local.

**Conceitos:** parâmetros de rota, `useParams` e reutilização do estado de favoritos.

**Critérios de conclusão:**

- Abrir os detalhes por um link no card, separado do botão de favorito.
- Refletir a mesma seleção de favorito nos detalhes, no catálogo e na página de favoritos.
- Exibir uma mensagem para filme inexistente e oferecer navegação de retorno.

**Commit sugerido:** `feat: adicionar pagina de detalhes dos filmes`

## T05 — Formulário de avaliação pessoal

**Depende de:** T04.

**Entrega:** componente `FormularioAvaliacao` na página de detalhes, com nota inteira de 1 a 5 e comentário opcional de até 500 caracteres. Manter uma avaliação pessoal por filme, inicialmente em memória.

**Conceitos:** inputs controlados, estado de objetos, validação e renderização condicional.

**Critérios de conclusão:**

- Impedir envio sem nota válida e apresentar o erro associado ao campo.
- Exibir a avaliação salva e permitir editá-la sem criar duplicatas.
- Manter avaliações independentes ao navegar entre filmes, sem perder o que já foi salvo durante a sessão.

**Commit sugerido:** `feat: adicionar formulario de avaliacao dos filmes`

## T06 — Persistência das avaliações

**Depende de:** T05.

**Entrega:** armazenar as avaliações no `localStorage`, separadas dos favoritos e identificadas por filme.

**Conceitos:** `useEffect`, restauração de estado e atualização imutável de objetos.

**Critérios de conclusão:**

- Restaurar nota e comentário depois de recarregar a página de detalhes.
- Salvar uma edição sem modificar avaliações de outros filmes.
- Tratar dados inválidos e indisponibilidade de armazenamento, reutilizando a estratégia da T02.

**Commit sugerido:** `feat: persistir avaliacoes dos filmes`

## T07 — Modelo de filmes preparado para API

**Depende de:** T06.

**Entrega:** separar o formato utilizado pelos componentes do formato retornado pela API. Preparar funções de normalização e o armazenamento de favoritos para filmes de origens diferentes.

**Critérios de conclusão:**

- Usar identificadores que incluam a origem, como `local:1` e `tmdb:27205`, evitando colisões.
- Guardar os dados necessários dos filmes favoritos, para exibi-los mesmo que não estejam no resultado atual da busca.
- Migrar favoritos e avaliações já persistidos, preservando as associações com os filmes locais e os links para seus detalhes.
- Manter a versão local funcional e tratar ausência de pôster, ano ou sinopse na normalização.

**Commit sugerido:** `refactor: preparar modelo de filmes para integracao com api`

## T08 — Catálogo e busca com API

**Depende de:** T07 e configuração do acesso à API.

**Entrega:** criar uma camada em `src/services/` para requisições com `fetch`, carregar filmes externos e pesquisar por título ao enviar o formulário. O TMDB é a proposta inicial de fornecedor; esta etapa depende de uma credencial de desenvolvimento.

**Conceitos:** `fetch`, `async/await`, `useEffect`, cancelamento de requisições e estados de carregamento e erro.

**Critérios de conclusão:**

- Documentar a configuração com `.env.example` sem valores reais. Definir o acesso à API e manter credenciais privadas em servidor/proxy, pois variáveis `VITE_*` são públicas no navegador.
- Oferecer um modo local explícito enquanto o acesso externo não estiver configurado.
- Diferenciar carregamento, falha e resultado vazio, com opção de tentar novamente após um erro.
- Cancelar ou ignorar respostas antigas ao trocar a busca, evitando substituir resultados novos.
- Aplicar os filtros aos filmes carregados e deixar esse alcance claro na interface. Paginação fica para uma evolução posterior.
- Manter favoritos visíveis e persistidos mesmo depois de uma nova pesquisa.

**Commit sugerido:** `feat: integrar catalogo e busca com api de filmes`

## T09 — Detalhes de filmes pela API

**Depende de:** T08.

**Entrega:** consultar os detalhes do filme externo a partir da rota, preservando o suporte aos filmes locais.

**Critérios de conclusão:**

- Abrir um filme externo diretamente pela URL, sem depender de uma busca anterior.
- Exibir carregamento, filme inexistente e falha de conexão como situações distintas.
- Cancelar ou ignorar a consulta anterior ao navegar rapidamente entre filmes.
- Permitir favoritar e avaliar o filme externo, mantendo os dados após recarregar.

**Commit sugerido:** `feat: carregar detalhes dos filmes pela api`

## T10 — Revisão integrada e documentação

**Depende de:** T09.

**Entrega:** revisar os fluxos completos e atualizar a documentação da nova versão.

**Critérios de conclusão:**

- Conferir busca combinada com gênero, navegação, favoritos, avaliações, recarregamento e tratamento de falhas da API.
- Verificar teclado, foco nas mudanças de página e mensagens de validação, além do layout em celular, tablet e desktop.
- Conferir acesso direto às rotas no build de produção e documentar a configuração de fallback para `index.html` no serviço de hospedagem escolhido.
- Atualizar o README com rotas, estrutura, configuração da API e conceitos estudados. Executar o build e verificações pertinentes a cada alteração.

**Commit sugerido:** `docs: documentar fluxos e configuracao da nova versao`

Se a revisão exigir correções de código, separá-las do commit de documentação em commits `fix:` que descrevam o problema resolvido.

## Referências

- [React: useState](https://react.dev/reference/react/useState).
- [React: useEffect](https://react.dev/reference/react/useEffect).
- [React Router: rotas declarativas](https://reactrouter.com/start/declarative/routing).
- [TMDB: configuração inicial](https://developer.themoviedb.org/docs/getting-started) e [autenticação da aplicação](https://developer.themoviedb.org/docs/authentication-application).
- [TMDB: busca de filmes](https://developer.themoviedb.org/reference/search-movie) e [detalhes de um filme](https://developer.themoviedb.org/reference/movie-details).
- [Vite: variáveis de ambiente e exposição no cliente](https://vite.dev/guide/env-and-mode).
