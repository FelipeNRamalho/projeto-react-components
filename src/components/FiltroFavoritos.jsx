import './Filtros.css'

export default function FiltroFavoritos({
  somenteFavoritos,
  onAlterarSomenteFavoritos,
}) {
  return (
    <label className="filtro-favoritos">
      <input
        className="filtro-favoritos__checkbox"
        type="checkbox"
        checked={somenteFavoritos}
        onChange={(event) => onAlterarSomenteFavoritos(event.target.checked)}
      />
      <span>Mostrar apenas favoritos</span>
    </label>
  )
}
