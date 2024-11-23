import { stringSimilarity } from 'string-similarity-js'
import { characters } from '@/constants'

const list = characters.map(({ name, nameText }) => [
  name,
  nameText.toLowerCase(),
])

const bestMatch = (_list, search) => {
  let match = null
  let bestScore = -1
  let score
  for (let character of _list) {
    score = stringSimilarity(character[1], search)
    if (score > bestScore) {
      bestScore = score
      match = character[0]
    }
  }
  return match
}

const searchInCharacters = (_search) => {
  if (_search.length < 2) return
  const search = _search.toLowerCase()

  // Exact match
  const exactMatch = list.find((character) => search === character[1])
  if (exactMatch) return exactMatch[0]

  // Exact start
  const exactStart = list.filter((character) => character[1].startsWith(search))
  if (exactStart.length === 1) return exactStart[0][0]
  if (exactStart.length > 1) return bestMatch(exactStart, search)

  // Exact include
  const exactInclude = list.filter((character) => character[1].includes(search))
  if (exactInclude.length === 1) return exactInclude[0][0]
  if (exactInclude.length > 1) return bestMatch(exactInclude, search)

  return bestMatch(list, search)
}

export default searchInCharacters
