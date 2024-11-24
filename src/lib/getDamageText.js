import getSpan from './getSpan'

const getDamageText = (
  damageBase,
  projectiles,
  damageMultipliers,
  damageScalings
) => {
  const p2 = projectiles > 1 ? getSpan('small', `x${projectiles}`) : ''
  const p3 = damageMultipliers
    .map((v, i) => {
      const stat = getSpan(`stat ${damageScalings[i]}`, '')
      if (v < 0) {
        return getSpan('red', `${v}%`) + stat
      } else {
        return getSpan('', `+${v}%`) + stat
      }
    })
    .join(' ')
  return `${damageBase}${p2} (${p3})`
}

export default getDamageText
