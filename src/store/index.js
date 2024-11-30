import { createStore } from 'vuex'

import items from './items'
import weapons from './weapons'
import weaponClasses from './weaponClasses'

const state = () => ({
  weaponDetails: '',
  selectedStartingWeapon: '',
})

const actions = {
  openWeaponDetails: ({ state }, name) => {
    state.weaponDetails = name
  },
  closeWeaponDetails: ({ state }) => {
    state.weaponDetails = ''
  },
  setSelectedStartingWeapon: ({ state }, name) => {
    if (state.selectedStartingWeapon === name) {
      state.selectedStartingWeapon = ''
    } else {
      state.selectedStartingWeapon = name
    }
  },
}

const store = createStore({
  state,
  actions,
  modules: {
    items,
    weapons,
    weaponClasses,
  },
})

export default store
