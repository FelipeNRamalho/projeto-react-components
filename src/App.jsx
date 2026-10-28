import ListaFilmes from './components/ListaFilmes.jsx'
import { filmes } from './data/filmes.js'

export default function App() {
  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1>Catálogo de Filmes</h1>
        <p>Descubra histórias para a sua próxima sessão de cinema.</p>
      </header>

      <section aria-labelledby="titulo-catalogo">
        <h2 id="titulo-catalogo">Todos os filmes</h2>
        <ListaFilmes filmes={filmes} />
      </section>
    </main>
  )
}
