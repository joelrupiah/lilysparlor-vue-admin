import Api from '../../../requests/Api'
export default {
    getAuthUserOrders(context) {
        Api().get('user-order')
            .then(response => {
                context.commit('getOrders', response.data.orders)
            })
    },
    getAllUserOrders(context) {
        Api().get('/admin/all-user-order')
            .then(response => {
                context.commit('getAllOrders', response.data.orders)
            })
    },
    getSpecificUserOrder(context, payload) {
        console.log(payload)
        Api().get(`/admin/get-specific-user-order/${payload}`)
            .then(response => {
                context.commit('getSpecificUserOrder', response.data.order)
            })
    }
}