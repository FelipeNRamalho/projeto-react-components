import './BotaoFavorito.css'

export default function BotaoFavorito({
  filme,
  favorito,
  onAlternarFavorito,
  className = '',
}) {
  return (
    <button
      className={`botao-favorito ${className}`}
      type="button"
      aria-label={`Favorito: ${filme.titulo}`}
      aria-pressed={favorito}
      title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      onClick={() => onAlternarFavorito(filme.id)}
    >
      <span aria-hidden="true">{favorito ? '♥' : '♡'}</span>
      Favorito
    </button>
  )
}
