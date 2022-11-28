import Api from '../../../requests/Api'

export default {
  async getAllAdmins(context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-all-admins')
      context.commit('getAllAdminsMutation', response.data.admins)
      return response
    } catch (error) {
      console.log(error)
    }
    
  },
}
