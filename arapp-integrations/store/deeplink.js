export const state = () => ({
  method: 'no method found',
  details: 'no details found'
})

export const mutations = {
  setMethod (state, data) {
    state.method = data
  },
  setDetails (state, data) {
    state.details = data
  }
}
