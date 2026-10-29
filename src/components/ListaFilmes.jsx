import { Link } from 'react-router'
import CardFilme from './CardFilme.jsx'
import './ListaFilmes.css'

export default function ListaFilmes({
  filmes,
  favoritos,
  onAlternarFavorito,
  somenteFavoritos,
  generoSelecionado,
  termoBusca,
  onLimparFiltros,
}) {
  if (filmes.length === 0) {
    let titulo = 'Nenhum filme encontrado'
    let descricao = 'Tente outro gênero ou volte ao catálogo completo.'

    if (termoBusca) {
      titulo = somenteFavoritos
        ? 'Nenhum favorito encontrado para esta busca'
        : 'Nenhum filme encontrado para esta busca'
      descricao =
        'Tente outro título, ajuste os filtros ou volte ao catálogo completo.'
    } else if (somenteFavoritos) {
      titulo = generoSelecionado
        ? 'Nenhum favorito neste gênero'
        : 'Você ainda não tem favoritos'
      descricao = generoSelecionado
        ? 'Escolha outro gênero ou explore o catálogo para marcar mais favoritos.'
        : 'Explore o catálogo e marque o coração dos filmes que você quer guardar aqui.'
    }

    return (
      <div className="lista-filmes__vazia">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        {somenteFavoritos ? (
          <Link className="lista-filmes__retorno" to="/">
            Ver todos os filmes
          </Link>
        ) : (
          <button
            className="lista-filmes__retorno"
            type="button"
            onClick={onLimparFiltros}
          >
            Ver todos os filmes
          </button>
        )}
      </div>
    )
  }

  return (
    <ul className="lista-filmes" role="list">
      {filmes.map((filme) => (
        <li key={filme.id}>
          <CardFilme
            filme={filme}
            favorito={favoritos.includes(filme.id)}
            onAlternarFavorito={onAlternarFavorito}
          />
        </li>
      ))}
    </ul>
  )
}
