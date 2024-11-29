const useItemsFilter = (section, field) => {
  const store = useStore()
  return computed({
    get: () => store.state.items[section][field],
    set: (value) =>
      store.dispatch('items/setFilter', { section, field, value }),
  })
}

export default useItemsFilter
