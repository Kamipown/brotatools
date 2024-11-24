const getRangeText = (range, rangeScaling) =>
  `${range} (${rangeScaling === 'melee' ? 'Melee' : 'Ranged'})`

export default getRangeText
