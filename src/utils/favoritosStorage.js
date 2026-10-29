import { filmes } from '../data/filmes.js'

const CHAVE_FAVORITOS = 'catalogo-filmes:favoritos'
const idsValidos = new Set(filmes.map((filme) => filme.id))

export function carregarFavoritos() {
  try {
    const dadosSalvos = window.localStorage.getItem(CHAVE_FAVORITOS)
    const favoritos = JSON.parse(dadosSalvos ?? '[]')

    if (!Array.isArray(favoritos)) {
      return []
    }

    return [...new Set(favoritos.filter((id) => idsValidos.has(id)))]
  } catch {
    // Dados inválidos ou acesso bloqueado não impedem o uso do catálogo.
    return []
  }
}

export function salvarFavoritos(favoritos) {
  try {
    window.localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
  } catch {
    // Sem acesso ou espaço disponível, os favoritos continuam em memória.
  }
}
