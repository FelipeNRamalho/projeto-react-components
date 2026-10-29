import './Filtros.css'

export default function FiltroGenero({
  generos,
  generoSelecionado,
  onAlterarGenero,
}) {
  return (
    <div className="filtro-genero">
      <label htmlFor="filtro-genero">Gênero</label>
      <select
        id="filtro-genero"
        className="filtro-genero__select"
        value={generoSelecionado}
        onChange={(event) => onAlterarGenero(event.target.value)}
      >
        <option value="">Todos os gêneros</option>
        {generos.map((genero) => (
          <option key={genero} value={genero}>
            {genero}
          </option>
        ))}
      </select>
    </div>
  )
}
