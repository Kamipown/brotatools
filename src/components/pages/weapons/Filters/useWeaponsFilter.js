const useWeaponsFilter = (section, field) => {
  const store = useStore()
  return computed({
    get: () => store.state.weapons[section][field],
    set: (value) =>
      store.dispatch('weapons/setFilter', { section, field, value }),
  })
}

export default useWeaponsFilter
