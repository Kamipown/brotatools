const green = (v) => `<span class="green">${v}</span>`
const purple = (v) => `<span class="purple">${v}</span>`
const red = (v) => `<span class="red">${v}</span>`
const stat = (v) => `<span class="stat ${v}"></span>`

// prettier-ignore
const characters = [
  {
    name: 'WellRounded',
    nameText: 'Well Rounded',
    texts: [
      `${green('+5')} Max HP`,
      `${green('+5%')} Speed`,
      `${green('+8')} Harvesting`,
    ],
    weapons: ['Knife', 'Stick', 'Fist', 'CactiClub', 'GhostFlint', 'Wrench', 'Lute', 'Pistol', 'Smg', 'DoubleBarrelShotgun', 'Slingshot', 'Taser', 'Wand', 'Icicle'],
    position: [384, 672],
  },
  {
    name: 'Brawler',
    nameText: 'Brawler',
    texts: [
      `${green('+50% Attack Speed')} with ${green('Unarmed')} weapons`,
      `You start with ${green('1 Fist')}`,
      `${green('+15%')} Dodge`,
      `${red('-50')} Range`,
      `${red('-50')} Ranged Damage`,
    ],
    weapons: ['Fist', 'Hand', 'Claw'],
    startWeapon: 'Fist',
    position: [384, 0],
  },
  {
    name: 'Crazy',
    nameText: 'Crazy',
    texts: [
      `${green('+100 Range')} with ${green('Precise')} weapons`,
      `${green('+25%')} Attack Speed`,
      `You start with ${green('1 Knife')}`,
      `${red('-30%')} Dodge`,
      `${red('-10')} Engineering`,
      `${red('-10')} Ranged Damage`,
    ],
    weapons: ['Knife', 'ThiefDagger', 'Scissors', 'LightningShiv', 'Claw', 'SharpTooth', 'Shuriken', 'Icicle'],
    startWeapon: 'Knife',
    position: [384, 96],
  },
  {
    name: 'Ranger',
    nameText: 'Ranger',
    texts: [
      `${green('+50')} Range`,
      `You start with ${green('1 Pistol')}`,
      `${green('Ranged Damage')} modifications are increased by ${green('50%')}`,
      `You can't equip melee weapons`,
      `${red('Max HP')} modifications are reduced by ${red('25%')}`,
    ],
    weapons: ['Pistol', 'Smg', 'Revolver', 'DoubleBarrelShotgun', 'LaserGun', 'Shredder', 'Crossbow', 'Slingshot'],
    startWeapon: 'Pistol',
    position: [576, 576],
  },
  {
    name: 'Mage',
    nameText: 'Mage',
    texts: [
      `${green('Elemental Damage')} modifications are increased by ${green('25%')}`,
      `You start with ${green('1 Snake')}`,
      `You start with ${green('1 Scared Sausage')}`,
      `${red('Melee Damage')} modifications are reduced by ${red('100%')}`,
      `${red('Ranged Damage')} modifications are reduced by ${red('100%')}`,
      `${red('Engineering')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Torch', 'Plank', 'LightningShiv', 'Wand', 'Taser', 'Icicle', 'Smg', 'DoubleBarrelShotgun'],
    position: [480, 480],
  },
  {
    name: 'Chunky',
    nameText: 'Chunky',
    texts: [
      `${green('Max HP')} modifications are increased by ${green('25%')}`,
      `${green('+1% Damage')} for every permanent ${green('3 Max HP')} you have`,
      `${green('+3')} HP recovered from consumables`,
      `${red('-100%')} Life Steal`,
      `${red('HP Regeneration')} modifications are reduced by ${red('50%')}`,
      `${red('% Dodge')} modifications are reduced by ${red('50%')}`,
      `${red('% Speed')} modifications are reduced by ${red('100%')}`,
    ],
    weapons: ['Fist', 'CactiClub', 'Rock', 'Stick', 'Torch', 'Plank', 'Chopper', 'Pruner', 'SpikyShield', 'Spoon', 'DoubleBarrelShotgun', 'Taser', 'GhostScepter', 'Shredder', 'Revolver'],
    position: [288, 96],
  },
  {
    name: 'Old',
    nameText: 'Old',
    texts: [
      `${green('-25%')} Enemy Speed`,
      `${green('+10')} Harvesting`,
      '-33% Map Size',
      '-10% Enemies',
      `${red('-10%')} Speed`,
    ],
    weapons: ['Scissors', 'Screwdriver', 'Wrench', 'Rock', 'Plank', 'Chopper', 'Pruner', 'Lute', 'Sickle', 'DoubleBarrelShotgun', 'Revolver', 'Taser', 'Wand', 'Icicle'],
    position: [288, 576],
  },
  {
    name: 'Lucky',
    nameText: 'Lucky',
    texts: [
      `${green('+100')} Luck`,
      `${green('Luck')} modifications are increased by ${green('25%')}`,
      `${green('75%')} chance to deal ${green('1')} (15%${stat('Luck')}) damage to a random enemy when you pick up a material`,
      `${red('-60%')} Attack Speed`,
      `${red('-50%')} XP Gain`,
    ],
    weapons: ['Stick', 'Rock', 'Fist', 'Chopper', 'Plank', 'Screwdriver', 'JoustingLance', 'Torch', 'Pruner', 'Lute', 'Slingshot', 'Wand', 'Icicle', 'Flute'],
    position: [384, 480],
  },
  {
    name: 'Mutant',
    nameText: 'Mutant',
    texts: [
      `${green('-66%')} XP required to level up`,
      `${red('+50%')} Items Price`,
    ],
    weapons: ['CactiClub', 'GhostAxe', 'Stick', 'Quarterstaff', 'Rock', 'Plank', 'LightningShiv', 'Brick', 'DoubleBarrelShotgun', 'Smg', 'Revolver', 'Shredder', 'Crossbow', 'Taser', 'Wand', 'Icicle'],
    position: [96, 576],
  },
  {
    name: 'Generalist',
    nameText: 'Generalist',
    texts: [
      `${green('+2 Melee Damage')} for every ${green('1 Ranged Damage')} you have`,
      `${green('+1 Ranged Damage')} for every ${green('2 Melee Damage')} you have`,
      `You can only equip ${green('3')} melee weapons and ${green('3')} ranged weapons at a time`,
    ],
    weapons: ['Fist', 'CactiClub', 'GhostAxe', 'GhostFlint', 'LightningShiv', 'Knife', 'Scissors', 'Spear', 'Shuriken', 'DoubleBarrelShotgun', 'Smg', 'Shredder', 'Revolver', 'LaserGun', 'Slingshot', 'GhostScepter', 'Javelin'],
    position: [576, 288],
  },
  {
    name: 'Loud',
    nameText: 'Loud',
    texts: [
      `${green('+30%')} Damage`,
      `+50% Enemies`,
      `${red('-3 Harvesting')} at the end of a wave`,
    ],
    weapons: ['CactiClub', 'GhostAxe', 'GhostFlint', 'LightningShiv', 'ThiefDagger', 'Claw', 'Spear', 'Torch', 'Rock', 'Hatchet', 'Plank', 'Wrench', 'JoustingLance', 'Quarterstaff', 'Pruner', 'Screwdriver', 'DoubleBarrelShotgun', 'Pistol', 'Smg', 'Shredder', 'Icicle', 'Shuriken', 'Slingshot', 'Crossbow', 'Javelin'],
    position: [288, 480],
  },
  {
    name: 'Multitasker',
    nameText: 'Multitasker',
    texts: [
      `${green('+20%')} Damage`,
      `You can equip up to ${green('12')} weapons at a time`,
      `${red('-5% Damage')} for every weapon you have`,
    ],
    weapons: ['CactiClub', 'Fist', 'Claw', 'Knife', 'Spear', 'Stick', 'Quarterstaff', 'LightningShiv', 'Screwdriver', 'Wrench', 'GhostFlint', 'GhostAxe', 'Plank', 'Chopper', 'Hatchet', 'JoustingLance', 'Pruner', 'Rock', 'SpikyShield', 'SharpTooth', 'HikingPole', 'Lute', 'DoubleBarrelShotgun', 'Smg', 'Revolver', 'LaserGun', 'Wand', 'Icicle', 'Slingshot', 'Taser', 'Shuriken', 'Crossbow'],
    position: [0, 576],
  },
  {
    name: 'Wildling',
    nameText: 'Wildling',
    texts: [
      `${red('+30% Life Steal')} with ${green('Primitive')} weapons`,
      `You start with ${green('1 Stick')}`,
      `You can't equip weapons above tier ${red('II')}`,
    ],
    weapons: ['Stick', 'Spear', 'Torch', 'Rock', 'CactiClub', 'Hatchet', 'Quarterstaff', 'SharpTooth', 'Slingshot', 'Javelin'],
    startWeapon: 'Stick',
    position: [480, 672],
  },
  {
    name: 'Pacifist',
    nameText: 'Pacifist',
    texts: [
      `Gain ${green('0.65')} material and XP for every living enemy at the end of a wave`,
      `You start with ${green('1 Lumberjack Shirt')}`,
      `${red('-100%')} Damage`,
      `${red('-100')} Engineering`,
    ],
    weapons: ['Hand', 'Pruner', 'Taser'],
    position: [480, 576],
  },
  {
    name: 'Gladiator',
    nameText: 'Gladiator',
    texts: [
      `${green('+20% Attack Speed')} for every weapon you have`,
      `${green('+5')} Melee Damage`,
      `You can't equip ranged weapons`,
      `${red('-40%')} Attack Speed`,
      `${red('-30')} Luck`,
    ],
    weapons: ['Spear', 'JoustingLance', 'CactiClub', 'Torch', 'ThiefDagger', 'Knife', 'Plank', 'GhostAxe', 'GhostFlint', 'SharpTooth', 'Fist', 'Claw', 'Quarterstaff', 'Hatchet', 'LightningShiv'],
    position:  [96, 384],
  },
  {
    name: 'Saver',
    nameText: 'Saver',
    texts: [
      `${green('+15')} Harvesting`,
      `${green('+1% Damage')} for every ${green('25 Materials')} you have`,
      `You start with ${green('1 Piggy Bank')}`,
      `${red('+50%')} Items Price`,
    ],
    weapons: ['Fist', 'Chopper', 'ThiefDagger', 'GhostFlint', 'Pruner', 'LightningShiv', 'CactiClub', 'Spear', 'Lute', 'Sickle', 'Pistol', 'Revolver', 'LaserGun', 'Taser', 'Wand', 'Icicle'],
    position: [672, 288],
  },
  {
    name: 'Sick',
    nameText: 'Sick',
    texts: [
      `${green('+12')} Max HP`,
      `${green('+25%')} Life Steal`,
      `You take ${red('1')} damage per second (does not fiv invulnerability time)`,
      `${red('-100')} HP Regeneration`,
    ],
    weapons: ['Fist', 'Scissors', 'Hatchet', 'GhostFlint', 'CactiClub', 'LightningShiv', 'SharpTooth', 'Pruner', 'Sickle', 'GhostScepter', 'Slingshot', 'Smg', 'MedicalGun'],
    position: [672, 384],
  },
  {
    name: 'Farmer',
    nameText: 'Farmer',
    texts: [
      `${green('+20')} Harvesting`,
      `Harvesting increases by an additional ${green('3%')} at the end of a wave`,
      `${green('+1 Harvesting')} when picking up a consumable while at maximum health`,
      `${red('-50%')} materials dropped`,
    ],
    weapons: ['Hand', 'Spear', 'Stick', 'Torch', 'Quarterstaff', 'Screwdriver', 'Pruner', 'ThiefDagger', 'Wrench', 'Lute', 'Sickle', 'LaserGun', 'Wand', 'DoubleBarrelShotgun', 'Slingshot', 'PotatoThrower'],
    position: [288, 288],
  },
  {
    name: 'Ghost',
    nameText: 'Ghost',
    texts: [
      `${green('+10 Damage')} with ${green('Ethereal')} weapons`,
      `${green('+30%')} Dodge`,
      `Dodge is capped at ${green('90%')}`,
      `${red('-100')} Armor`,
    ],
    weapons: ['GhostFlint', 'GhostAxe', 'GhostScepter'],
    position: [0, 384],
  },
  {
    name: 'Speedy',
    nameText: 'Speedy',
    texts: [
      `${green('+30%')} Speed`,
      `${green('+1 Melee Damage')} for every ${green('2% Speed')} you have`,
      `${red('-100 Armor')} while standing still`,
      `${red('-3')} Armor`,
    ],
    weapons: ['Fist', 'Claw', 'Knife', 'ThiefDagger', 'Stick', 'Spear', 'Quarterstaff', 'JoustingLance', 'Screwdriver', 'GhostFlint', 'Pruner', 'HikingPole', 'Shuriken', 'Javelin'],
    position: [672, 576],
  },
  {
    name: 'Entrepreneur',
    nameText: 'Entrepreneur',
    texts: [
      `${green('-25%')} Items Price`,
      `${green('Harvesting')} modifications are increased by ${green('50%')}`,
      `Gain ${green('25%')} more materials from recycling items`,
      `${red('-100%')} of your materials at the start of waves`,
      `${red('Damage')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Fist', 'Claw', 'Hand', 'Knife', 'ThiefDagger', 'Pruner', 'Quarterstaff', 'Hatchet', 'GhostFlint', 'Wrench', 'Plank', 'HikingPole', 'Lute', 'Sickle', 'Pistol', 'DoubleBarrelShotgun', 'Taser', 'Shuriken', 'Crossbow', 'Icicle'],
    position: [96, 288],
  },
  {
    name: 'Engineer',
    nameText: 'Engineer',
    texts: [
      `${green('+10')} Engineering`,
      `${green('Engineering')} modifications are increased by ${green('25%')}`,
      `You start with ${green('1 Wrench')}`,
      'Structures spawn close from each other',
      `${red('Damage')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Wrench', 'Screwdriver', 'Plank', 'Hammer'],
    startWeapon: 'Wrench',
    position: [0, 288],
  },
  {
    name: 'Explorer',
    nameText: 'Explorer',
    texts: [
      'More trees spawn',
      `You start with ${green('1 Lumberjack Shirt')}`,
      `${green('+10%')} Speed`,
      `${green('+50%')} pickup range`,
      '+33% Map Size',
      '+25% Enemies',
      `${red('-50%')} materials dropped from enemies`,
      `${red('+10%')} Enemy Speed`,
      `${red('-40%')} Damage`,
    ],
    weapons: ['Hand', 'CactiClub', 'Screwdriver', 'ThiefDagger', 'Wrench', 'Stick', 'Torch', 'Chopper', 'Plank', 'Hatchet', 'JoustingLance', 'GhostAxe', 'HikingPole', 'Spoon', 'Crossbow', 'Shredder', 'Taser', 'Wand'],
    position:  [192, 288],
  },
  {
    name: 'Doctor',
    nameText: 'Doctor',
    texts: [
      `${green('+200% Attack Speed')} with ${green('Medical')} weapons`,
      `${green('+5')} HP Regeneration`,
      `${green('+5')} Harvesting`,
      `${green('HP Regeneration')} modifications are increased by ${green('100%')}`,
      `${red('-100%')} Attack Speed`,
      `${red('Armor')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Scissors', 'MedicalGun'],
    position: [384, 192],
  },
  {
    name: 'Hunter',
    nameText: 'Hunter',
    texts: [
      `${green('+100')} Range`,
      `${green('+1% Damage')} for every ${green('10 Range')} you have`,
      `${green('% Crit Chance')} modifications are increased by ${green('25%')}`,
      `${red('Harvesting')} modifications are reduced by ${red('100%')}`,
      `${red('Max HP')} modifications are reduced by ${red('33%')}`,
    ],
    weapons: ['CactiClub', 'ThiefDagger', 'Spear', 'Claw', 'Scissors', 'HikingPole', 'Shuriken', 'DoubleBarrelShotgun', 'Crossbow', 'Icicle', 'Javelin'],
    position: [480, 384],
  },
  {
    name: 'Artificer',
    nameText: 'Artificer',
    texts: [
      `${green('+175%')} Explosion Damage`,
      `${green('+4% Explosion Size')} for every ${green('1 Elemental Damage')} you have`,
      `${green('+100% Damage')} with ${green('Tool')} weapons`,
      `${red('-100%')} Damage`,
      `${red('Armor')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Plank', 'Screwdriver', 'Wrench', 'Shredder'],
    position: [192, 0],
  },
  {
    name: 'ArmsDealer',
    nameText: 'Arms Dealer',
    texts: [
      `${green('-95%')} Weapons Price`,
      `${green('+30')} Harvesting`,
      `${green('Damage')} modifications are increased by ${green('33%')}`,
      `You start with ${green('1 Dangerous Bunny')}`,
      'Shops always sell at least one weapon',
      'All of your weapons are destroyed when entering a shop',
    ],
    weapons: ['Pistol'],
    position: [96, 0],
  },
  {
    name: 'Streamer',
    nameText: 'Streamer',
    texts: [
      `${green('+3%')} of your materials (${green('+25')} max) per second while standing still`,
      `${green('+40% Damage')} while moving`,
      `${green('+40% Attack Speed')} while moving`,
      `${green('+2 Armor')} for every ${green('1 Structure')} you have`,
      `${red('-50%')} materials dropped`,
      `${red('-1% Damage')} for every ${green('15 Materials')} you have`,
      `${red('-1% Speed')} for every ${green('30 Materials')} you have`,
    ],
    weapons: ['Hand', 'Stick', 'CactiClub', 'GhostFlint', 'GhostAxe', 'Scissors', 'Screwdriver', 'Wrench', 'Spear', 'Plank', 'Pruner', 'SpikyShield', 'Crossbow', 'DoubleBarrelShotgun', 'LaserGun', 'MedicalGun', 'Pistol', 'Shredder', 'Smg', 'Revolver', 'Slingshot', 'GhostScepter', 'Taser', 'Wand', 'Icicle', 'Javelin'],
    position: [0, 672],
  },
  {
    name: 'Cyborg',
    nameText: 'Cyborg',
    texts: [
      `You start with ${green('1 Minigun')}`,
      `${green('Ranged Damage')} modifications are increased by ${green('200%')}`,
      `${green('+100%')} of your ${green('Ranged Damage')} are temporarily converted into ${green('Engineering')} halfway through a wave (${green('1 Ranged Damage')} = ${green('2 Engineering')})`,
      `${red('Engineering')} modifications are reduced by ${red('75%')}`,
      `${red('Melee Damage')} modifications are reduced by ${red('100%')}`,
      `${red('Elemental Damage')} modifications are reduced by ${red('100%')}`,
    ],
    weapons: ['Wrench', 'Screwdriver', 'Plank', 'Brick', 'Pistol', 'Smg', 'Revolver', 'DoubleBarrelShotgun', 'Crossbow'],
    startWeapon: 'Minigun',
    position: [96, 192],
  },
  {
    name: 'Glutton',
    nameText: 'Glutton',
    texts: [
      `${green('+50')} Luck`,
      `${green('+1 Explosion Damage')} when picking up a consumable while at maximum health`,
      `Consumable have a ${green('100%')} chance to explode for ${green('10')} (+500% ${stat('MeleeDamage')}) damage when picked up`,
      `${red('+25%')} Items Price`,
      `${red('-25%')} XP Gain`,
    ],
    weapons: ['Pruner', 'Chopper', 'ThiefDagger', 'Fist', 'JoustingLance', 'Screwdriver', 'Plank', 'Lute', 'Spoon', 'Shredder', 'Flute'],
    position: [192, 384],
  },
  {
    name: 'Jack',
    nameText: 'Jack',
    texts: [
      `${green('+125%')} damage against bosses and elites`,
      `${green('+200%')} materials dropped`,
      '-70% Enemies',
      `${red('+175%')} Enemy health`,
      `${red('+35%')} Enemy damage`,
    ],
    weapons: ['Knife', 'JoustingLance', 'Wrench', 'Torch', 'Hatchet', 'Stick', 'Spear', 'SpikyShield', 'Brick', 'Lute', 'Spoon', 'Shuriken', 'LaserGun', 'Revolver', 'Crossbow', 'Taser', 'Wand', 'Icicle', 'Flute'],
    position: [576, 384],
  },
  {
    name: 'Lich',
    nameText: 'Lich',
    texts: [
      `${green('+10')} HP Regeneration`,
      `${green('+10%')} Life Steal`,
      `${green('100%')} chance to deal ${green('10')} (100% ${stat('MaxHP')}) damage to a random enemy when you heal`,
      `${red('Damage')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Scissors', 'Chopper', 'ThiefDagger', 'Stick', 'Knife', 'GhostFlint', 'SharpTooth', 'Pruner', 'Hatchet', 'Rock', 'SpikyShield', 'LightningShiv', 'Spoon', 'GhostScepter', 'MedicalGun', 'Smg', 'Wand', 'Icicle', 'Slingshot', 'Crossbow'],
    position: [192, 480],
  },
  {
    name: 'Apprentice',
    nameText: 'Apprentice',
    texts: [
      `${green('+2 Melee Damage')} when you level up`,
      `${green('+1 Ranged Damage')} when you level up`,
      `${green('+1 Elemental Damage')} when you level up`,
      `${green('+1 Engineering')} when you level up`,
      `${red('-2 Max HP')} when you level up`,
    ],
    weapons: ['Fist', 'Knife', 'LightningShiv', 'CactiClub', 'Quarterstaff', 'GhostFlint', 'GhostAxe', 'Hatchet', 'Torch', 'Plank', 'Pruner', 'Screwdriver', 'Wrench', 'Brick', 'MedicalGun', 'Smg', 'DoubleBarrelShotgun', 'Shredder', 'Slingshot', 'Taser', 'Icicle', 'Shuriken', 'GhostScepter'],
    position: [0, 0],
  },
  {
    name: 'Cryptid',
    nameText: 'Cryptid',
    texts: [
      'More trees spawn',
      `Gain ${green('12')} materials and XP for every living tree at the end of a wave`,
      `${green('+3 HP Regeneration')} for every current living tree`,
      `Dodge is capped at ${green('70%')}`,
      `${green('+3% Attack Speed')} until the end of the wave when you dodge an attack`,
      `${red('-100%')} Life Steal`,
      `${red('-100')} Range`,
      `${red('-50%')} materials dropped from enemies`,
    ],
    weapons: ['Fist', 'Hand', 'Claw', 'Knife', 'CactiClub', 'Pruner', 'Chopper', 'GhostAxe', 'ThiefDagger', 'LightningShiv', 'GhostFlint', 'Rock', 'Stick', 'Hatchet', 'JoustingLance', 'Screwdriver', 'Plank', 'Lute', 'Sickle', 'GhostScepter', 'Shredder', 'Pistol', 'Smg'],
    position: [576, 96],
  },
  {
    name: 'Fisherman',
    nameText: 'Fisherman',
    texts: [
      `${green('+5')} Max HP`,
      `${green('+20')} Harvesting`,
      `Shops always sell a ${green('Bait')}`,
      `${green('-100%')} Bait price`,
      `${green('+2 Harvesting')} for every ${green('1 Bait')} you have`,
      'Baits make some special enemies spawn throughout all future waves',
      `${red('-50%')} materials dropped from enemies`,
    ],
    weapons: ['Knife', 'Rock', 'Spear', 'Quarterstaff', 'SpikyShield', 'Torch', 'Stick', 'SharpTooth', 'Plank', 'Pruner', 'Scissors', 'Pistol', 'Smg', 'Crossbow', 'DoubleBarrelShotgun', 'LaserGun', 'Revolver', 'Shredder', 'Slingshot', 'Icicle', 'Javelin'],
    position: [384, 288],
  },
  {
    name: 'Golem',
    nameText: 'Golem',
    texts: [
      `${green('+20')} Max HP`,
      `${green('Max HP')} modifications are increased by ${green('33%')}`,
      `${green('Armor')} modifications are increased by ${green('33%')}`,
      `${green('+40% Attack Speed')} when you have less than 50% health`,
      `${green('+40% Speed')} when you have less than 50% health`,
      `You can't heal in any way`,
    ],
    weapons: ['CactiClub', 'Chopper', 'Fist', 'GhostAxe', 'Hatchet', 'Knife', 'Plank', 'Rock', 'SpikyShield', 'Stick', 'Torch', 'Brick', 'Spoon', 'Pistol', 'Revolver', 'Slingshot', 'Crossbow', 'GhostScepter', 'Flute'],
    position: [288, 384],
  },
  {
    name: 'King',
    nameText: 'King',
    texts: [
      `${green('+50')} Luck`,
      `${green('+25% Damage')} for every Tier IV weapon you have`,
      `${green('+25% Attack Speed')} for every Tier IV weapon you have`,
      `${green('+5 Max HP')} for every different Tier IV item you have`,
      `${red('-15% Damage')} for every Tier I weapon you have`,
      `${red('-15% Attack Speed')} for every Tier I weapon you have`,
      `${red('-2 Max HP')} for every different Tier I item you have`,
    ],
    weapons: ['Fist', 'CircularSaw', 'Knife', 'Hatchet', 'GhostAxe', 'LightningShiv', 'Torch', 'Plank', 'Spear', 'JoustingLance', 'Sword', 'Hammer', 'SpikyShield', 'Lute', 'Trident', 'Pistol', 'Smg', 'Crossbow', 'DoubleBarrelShotgun', 'RocketLauncher', 'Taser', 'Fireball', 'Flute', 'GrenadeLauncher', 'Javelin'],
    position: [0, 480],
  },
  {
    name: 'Renegade',
    nameText: 'Renegade',
    texts: [
      `${green('+2')} projectiles`,
      `Projectiles pierce through ${green('1')} additional target`,
      `${green('+10% Damage')} for every different Tier I item you have`,
      `You can't equip melee weapons`,
      `${red('-400%')} Damage`,
      `${red('-50%')} Accuracy`,
      `${red('% Damage')} modifications are reduced by ${red('80%')}`,
    ],
    weapons: ['Pistol', 'Revolver', 'Shredder', 'Smg', 'LaserGun', 'MedicalGun', 'DoubleBarrelShotgun', 'Taser', 'Wand', 'Icicle', 'GhostScepter', 'Crossbow', 'Shuriken', 'Slingshot', 'Flute', 'Javelin'],
    position: [672, 0],
  },
  {
    name: 'OneArmed',
    nameText: 'One-Armed',
    texts: [
      `${green('+200%')} Attack Speed`,
      `${green('Damage')} modifications are increased by ${green('100%')}`,
      'You can only equip one weapon at a time',
    ],
    weapons: ['Claw', 'ThiefDagger', 'GhostAxe', 'LightningShiv', 'Scissors', 'CactiClub', 'Torch', 'Plank', 'Hatchet', 'Pruner', 'JoustingLance', 'DoubleBarrelShotgun', 'Shredder', 'Smg', 'Taser', 'Revolver', 'Icicle', 'Shuriken', 'Javelin'],
    position: [384, 576],
  },
  {
    name: 'Bull',
    nameText: 'Bull',
    texts: [
      `${green('+20')} Max HP`,
      `${green('+15')} HP Regeneration`,
      `${green('+10')} Armor`,
      `${green('HP Regeneration')} modifications are increased by ${green('50%')}`,
      `You explode for ${green('30')} (+300% ${stat('MeleeDamage')} +300% ${stat('RangedDamage')} +300% ${stat('ElementalDamage')}) damage when you take damage`,
      `You can't equip weapons`,
    ],
    weapons: [],
    position: [0, 96],
  },
  {
    name: 'Soldier',
    nameText: 'Soldier',
    texts: [
      `${green('+50% Damage')} while standing still`,
      `${green('+50% Attack Speed')} while standing still`,
      `${green('+10%')} Speed`,
      `${green('+200%')} pickup range`,
      `${green('+15')} knockback`,
      `You can't attack while moving`,
    ],
    weapons: ['Knife', 'LightningShiv', 'Crossbow', 'DoubleBarrelShotgun', 'LaserGun', 'Pistol', 'Shredder', 'Revolver', 'Smg', 'Taser', 'Wand', 'Icicle', 'Flute', 'Javelin'],
    position: [672, 480],
  },
  {
    name: 'Masochist',
    nameText: 'Masochist',
    texts: [
      `${green('+5% Damage')} when you take damage until the end of the wave`,
      `${green('+10')} Max HP`,
      `${green('+20')} HP Regeneration`,
      `${green('+8')} Armor`,
      `${red('-100%')} Damage`,
    ],
    weapons: ['Rock', 'Scissors', 'CactiClub', 'GhostAxe', 'SpikyShield', 'SharpTooth', 'Torch', 'Brick', 'Lute', 'Sickle', 'DoubleBarrelShotgun', 'MedicalGun', 'Wand', 'Sickle'],
    position: [576, 480],
  },
  {
    name: 'Knight',
    nameText: 'Knight',
    texts: [
      `${green('+2 Melee Damage')} for every ${green('1 Armor')} you have`,
      `${green('+3')} Armor`,
      `You can't equip ranged weapons`,
      `You can only equip ${red('tier II')} weapons or above`,
      `${red('% Attack Speed')} modifications are reduced by ${red('50%')}`,
      `${red('Harvesting')} modifications are reduced by ${red('80%')}`,
    ],
    weapons: ['Sword', 'Hammer', 'Spear', 'Torch', 'JoustingLance', 'Quarterstaff', 'Plank', 'Rock', 'Fist', 'Knife', 'Scissors', 'CactiClub', 'Mace', 'Anchor'],
    position: [96, 480],
  },
  {
    name: 'Demon',
    nameText: 'Demon',
    texts: [
      `${green('50%')} of your ${green('Materials')} are converted into ${green('Max HP')} at the end of a wave (${green('13 Materials')} = ${green('1 Max HP')})`,
      'You buy items using Max HP instead of materials',
    ],
    weapons: ['ThiefDagger', 'LightningShiv', 'GhostAxe', 'GhostFlint', 'Torch', 'Chopper', 'SharpTooth', 'Wrench', 'Spoon', 'GhostScepter', 'Wand', 'Taser', 'Icicle', 'Flute'],
    position: [192, 192],
  },
  {
    name: 'Baby',
    nameText: 'Baby',
    texts: [
      `${green('+12')} Harvesting`,
      `${green('-20%')} Items Price`,
      `You gain a weapon slot when you level up instead of a stat upgrade (max: ${green('24')})`,
      'You start with one weapon slot',
      'Shop always sell at least one weapon',
      `${red('+130%')} XP required to level up`,
    ],
    weapons: ['Fist', 'Scissors', 'Screwdriver', 'Pruner', 'SharpTooth', 'Quarterstaff', 'Knife', 'Stick', 'Plank', 'Rock', 'Wrench', 'HikingPole', 'Spoon', 'Shuriken', 'Taser', 'Wand', 'Icicle', 'Slingshot', 'Pistol', 'Flute'],
    position: [288, 0],
  },
  {
    name: 'Vagabond',
    nameText: 'Vagabond',
    texts: [
      'Equipped weapons always contribute to the class bonuses of other equipped weapons',
      `You can't equip two of the same weapon at the same time`,
      `${red('-5')} Armor`,
      `${red('-5%')} Dodge`,
      `${red('Luck')} modifications are reduced by ${red('50%')}`,
      `${red('Harvesting')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['CactiClub', 'Chopper', 'ThiefDagger', 'Spear', 'SharpTooth', 'Hand', 'Claw', 'Quarterstaff', 'Hatchet', 'Plank', 'GhostFlint', 'SpikyShield', 'LightningShiv', 'Torch', 'Lute', 'Shuriken', 'Crossbow', 'Revolver', 'LaserGun'],
    position: [192, 672],
  },
  {
    name: 'Technomage',
    nameText: 'Technomage',
    texts: [
      `You start with ${green('2 Turret')}`,
      `${green('+5% Structure attack speed')} for every permanent ${green('1 Elemental Damage')} you have`,
      `${green('+2 Elemental Damage')} for every ${green('1 Structure')} you have`,
      `${red('+75%')} XP required to level up`,
      `${red('Melee Damage')} modifications are reduced by ${red('100%')}`,
      `${red('Ranged Damage')} modifications are reduced by ${red('100%')}`,
    ],
    weapons: ['Wrench', 'Screwdriver', 'Plank', 'Torch', 'LightningShiv', 'Pruner', 'Taser', 'Wand', 'Icicle'],
    position: [96, 672],
  },
  {
    name: 'Vampire',
    nameText: 'Vampire',
    texts: [
      `${green('+2% Damage')} for every ${green('1%')} of missing health`,
      `${green('+1% Life Steal')} for every ${green('3%')} of missing health`,
      `${green('+1 Armor')} for every ${green('5%')} of missing health`,
      `${red('Max HP')} modifications are reduced by ${red('25%')}`,
      `${red('-60%')} Damage`,
      `${red('-100')} HP Regeneration`,
      `${red('-100')} HP recovered from consumables`,
    ],
    weapons: ['Fist', 'Claw', 'SharpTooth', 'GhostFlint', 'Hatchet', 'Knife', 'ThiefDagger', 'LightningShiv', 'Scissors', 'SpikyShield', 'Stick', 'Torch', 'Screwdriver', 'Wrench', 'Sickle', 'Shuriken', 'Pistol', 'Smg', 'DoubleBarrelShotgun', 'MedicalGun', 'Revolver', 'Shredder', 'Crossbow'],
    position: [288, 672],
  },
  {
    name: 'Sailor',
    nameText: 'Sailor',
    texts: [
      `${green('+200%')} damage with ${green('Naval')} weapons against cursed enemies`,
      `${purple('+25')} Curse`,
      `${red('-25%')} Damage`,
      `You can only equip ${red('tier II')} weapons or above`,
      `Dodge is capped at ${red('20%')}`,
      `${red('Harvesting')} modifications are reduced by ${red('100%')}`,
    ],
    weapons: ['Anchor', 'Trident', 'Blunderbuss'],
    position: [672, 192],
  },
  {
    name: 'Curious',
    nameText: 'Curious',
    texts: [
      `You start with ${green('1 Spyglass')}`,
      `${green('2')} additional loot aliens appear every wave`,
      'All future loot aliens become stronger when you kill a loot alien',
      `${green('+2% XP Gain')} for every different ${green('Item')} you have`,
      `${red('-10% Damage')} for every duplicate item or weapon you have`,
      `${red('+25%')} Enemy health`,
    ],
    weapons: ['Brick', 'CactiClub', 'GhostAxe', 'Hatchet', 'Knife', 'Plank', 'Rock', 'Torch', 'LightningShiv', 'Lute', 'Pistol', 'DoubleBarrelShotgun', 'Icicle', 'Javelin', 'Slingshot'],
    position: [0, 192],
  },
  {
    name: 'Builder',
    nameText: 'Builder',
    texts: [
      `You start with ${green("1 Builder's Turret")}`,
      `Every ${green('5')} uncollected materials are converted into ${green('1% Structure attack speed')} and ${green('1 Structure range')} at the end of a wave`,
      `${green('Engineering')} modifications are increased by ${green('50%')}`,
      `${green('+20')} Harvesting`,
      `You can't have structures`,
      `${red('-30%')} pickup range`,
      `${red('Damage')} modifications are reduced by ${red('75%')}`,
    ],
    weapons: ['Brick', 'Plank', 'Javelin', 'DoubleBarrelShotgun', 'LaserGun', 'MedicalGun', 'Revolver', 'Shredder', 'Smg', 'Slingshot', 'GhostScepter', 'Flute', 'Taser', 'Wand'],
    position: [576, 0],
  },
  {
    name: 'Captain',
    nameText: 'Captain',
    texts: [
      `${green('+60% XP Gain')} for every free weapon slot you have`,
      `${green('+100% Stats Gained')} from level upgrades`,
      `${red('+200%')} XP required to level up`,
      `${red('+2% Enemy health')} at the end of a wave`,
      `${red('+2% Enemy damage')} at the end of a wave`,
    ],
    weapons: ['Fist', 'Knife', 'Hatchet', 'Spear', 'GhostAxe', 'GhostFlint', 'Chopper', 'Quarterstaff', 'Torch', 'Plank', 'LightningShiv', 'DoubleBarrelShotgun', 'Smg', 'Revolver', 'Slingshot', 'Shredder', 'Javelin'],
    position: [96, 96],
  },
  {
    name: 'Creature',
    nameText: 'Creature',
    texts: [
      `Weapon damage additionally scales with ${purple('35% Curse')}`,
      `You start with ${green('1')} cursed ${green('Fish Hook')}`,
      `${purple('+1 Curse')} when you level up`,
      `${red('-10 Range')} at the end of a wave`,
      `${red('-5% XP Gain')} at the end of a wave`,
    ],
    weapons: ['Fist', 'Claw', 'CactiClub', 'SharpTooth', 'Sickle', 'Hatchet', 'Rock', 'Stick', 'SpikyShield', 'Chopper', 'Torch', 'Plank', 'Smg', 'Shredder', 'Icicle', 'GhostScepter', 'Javelin'],
    position: [480, 96],
  },
  {
    name: 'Chef',
    nameText: 'Chef',
    texts: [
      `${green('+35')} Luck`,
      `${green('+200%')} damage from non elemental sources against burning targets`,
      `Consumables explodes for 5x${green('1')} (+100%${stat('ElementalDamage')}) burning damage when picked up`,
      `You start with ${green('1 Scared Sausage')}`,
      `${red('+100%')} Enemy health`,
      `${red('Elemental Damage')} modifications are reduced by ${red('75%')}`,
    ],
    weapons: ['Spoon', 'Chopper', 'Fist', 'Knife', 'Hatchet', 'Stick', 'Torch', 'Screwdriver', 'Wrench', 'Plank', 'Pruner', 'CactiClub', 'Wand'],
    position: [192, 96],
  },
  {
    name: 'Druid',
    nameText: 'Druid',
    texts: [
      `${green('+5')} Max HP`,
      `${green('+15')} Luck`,
      'Enemies have a higher chance of dropping fruits',
      `${green('33%')} chance to get ${green('+1 Luck')} when you pick up a fruit`,
      `${red('33%')} of fruits are poisoned and hurt you (ignores Dodge and Armor)`,
      `${red('-100')} HP Regeneration`,
      `${red('-100%')} Life Steal`,
      `${red('Engineering')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Fist', 'Claw', 'GhostFlint', 'CactiClub', 'Rock', 'Chopper', 'Quarterstaff', 'Pruner', 'Sickle', 'Lute', 'Stick', 'Spear', 'Torch', 'Flute', 'Slingshot', 'GhostScepter', 'Icicle', 'Wand', 'Javelin'],
    position: [480, 192],
  },
  {
    name: 'Dwarf',
    nameText: 'Dwarf',
    texts: [
      `${green('+1 Engineering')} when killing at least ${green('6')} enemies with a direct weapon hit`,
      `${green('+1 Melee Damage')} for every permanent ${green('2 Engineering')} you have`,
      `You can't equip ranged weapons`,
      `${red('-20%')} Dodge`,
      `${red('-100%')} Attack Speed`,
      `${red('% Attack Speed')} modifications are reduced by ${red('50%')}`,
    ],
    weapons: ['Hammer', 'Wrench', 'Brick', 'Mace'],
    position: [576, 192],
  },
  {
    name: 'Gangster',
    nameText: 'Gangster',
    texts: [
      `Can steal ${green('1')} item per shop`,
      'Stealing from the shop can spawn an elite',
      'All future elites and bosses become stronger when you kill an elite or a boss',
      `${red('+20%')} Items Price`,
      `Can't lock items`,
    ],
    weapons: ['Knife', 'ThiefDagger', 'LightningShiv', 'Pistol', 'Revolver', 'Smg', 'DoubleBarrelShotgun'],
    position: [480, 288],
  },
  {
    name: 'Diver',
    nameText: 'Diver',
    texts: [
      `You start with ${green('1 Harpoon Gun')}`,
      `${green('-100% Harpoon Gun')} price`,
      `${green('+200% Crit Damage')} with ${green('Precise')} weapons`,
      `${green('% Crit Chance')} modifications are increased by ${green('25%')}`,
      `${green('+1 HP Regeneration')} for every ${green('2 Melee Damage')} you have`,
      `Enemies take ${green('300%')} more damage for ${green('3')} seconds when hit by ${green('Ranged Damage')}`,
      `${red('-100')} Ranged Damage`,
      `${red('+250%')} Enemy health`,
    ],
    weapons: ['Claw', 'ThiefDagger', 'Knife', 'Scissors', 'SharpTooth', 'Shuriken'],
    startWeapon: 'HarpoonGun',
    position: [288, 192],
  },
  {
    name: 'Hiker',
    nameText: 'Hiker',
    texts: [
      `Earn ${green('5')} materials for every ${green('10')} steps you take during a wave`,
      `${green('+1 Max HP')} for every ${green('80')} steps you take during a wave`,
      `${green('$ Speed')} modifications are increased by ${green('10%')}`,
      `${red('-5%')} Speed`,
      `${red('-50%')} materials dropped`,
    ],
    weapons: ['HikingPole', 'Fist', 'Hand', 'Lute', 'ThiefDagger', 'JoustingLance', 'Stick', 'Flute', 'Pistol', 'Taser'],
    position: [384, 384],
  },
  {
    name: 'Buccaneer',
    nameText: 'Buccaneer',
    texts: [
      `Picked up materials have ${green('+100%')} value`,
      'Picking up a material resets the cooldown of all your weapons',
      `${red('-100%')} Attack Speed`,
      `${red('-50%')} materials dropped from enemies`,
    ],
    weapons: ['Brick', 'CactiClub', 'Rock', 'Spear', 'Torch', 'DoubleBarrelShotgun', 'LaserGun', 'Shredder', 'Icicle', 'Flute', 'Slingshot', 'Crossbow'],
    position: [480, 0],
  },
  {
    name: 'Ogre',
    nameText: 'Ogre',
    texts: [
      `Enemies taking double their max health as damage explode for ${green('15')} (+50%${stat('MaxHP')} ${red('-50%')}${stat('AttackSpeed')}) damage`,
      `${green('+10')} Melee Damage`,
      `You can't equip ranged weapons`,
      `${red('-50%')} Attack Speed`,
      `${red('-10%')} Speed`,
    ],
    weapons: ['Fist', 'Brick', 'Rock', 'Plank', 'CactiClub', 'Chopper', 'Spoon'],
    position: [192, 576],
  },
  {
    name: 'Romantic',
    nameText: 'Romantic',
    texts: [
      `Hitting an enemy that has less than ${green('25%')} health has a ${green('5%')} (50%${stat('MaxHP')}) chance to charm it for ${green('8')} seconds`,
      `${green('+50 Range')} with melee weapons`,
      `${red('-3% Damage')} for every ${purple('5 Curse')} you have`,
      `${red('-1 Armor')} for every ${purple('5 Curse')} you have`,
      `${purple('+1 Curse')} at the end of a wave`,
    ],
    weapons: ['Lute', 'Chopper', 'Fist', 'Spoon', 'Scissors', 'SharpTooth', 'Hatchet', 'CactiClub', 'Claw', 'Flute', 'DoubleBarrelShotgun', 'Shuriken', 'Slingshot', 'MedicalGun', 'Smg', 'Taser'],
    position: [672, 96],
  },
]

export default characters