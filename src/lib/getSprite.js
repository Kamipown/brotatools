const spriteSheets = {
  characters: ['url(/characters.png)', 768, 768, 96, 96],
  stats: ['url(/stats.png)', 300, 240, 60, 60],
  weapons: ['url(/weapons.png)', 864, 864, 96, 96],
}

const getSprite = (spriteSheet, width, height, x, y) => {
  const v = spriteSheets[spriteSheet]
  const wRatio = width / v[3]
  const hRatio = height / v[4]
  return {
    backgroundImage: v[0],
    backgroundSize: `${v[1] * wRatio}px ${v[2] * hRatio}px`,
    backgroundPosition: `${-x * wRatio}px ${-y * hRatio}px`,
  }
}

export default getSprite
