export default {
    getOrders(state, payload) {
        return state.orders = payload
    },
    getAllOrders(state, payload) {
        return state.orders = payload
    },
    getSpecificUserOrder(state, payload) {
        return state.order = payload
    }
}