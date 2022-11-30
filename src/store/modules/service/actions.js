import Api from '../../../requests/Api'
import {
  CREATE_SERVICE_ACTION,
  SET_SERVICES_MUTATION,
  GET_SERVICES_ACTION,
  SET_SERVICES_ERRORS_MUTATION
} from "../../storeConstants"

export default {
  async [CREATE_SERVICE_ACTION](context, payload) {
    let response = ''
    try {
      response = await Api().post('/admin/create-service', payload)
    }
    catch (error) {
      context.commit(SET_SERVICES_ERRORS_MUTATION, error.response.data.errors)
    }
    if (response === 201) {
      context.commit(SET_SERVICES_MUTATION, payload)
    }

  },

  async getSingleServiceAction(_, payload) {
    let response = ''
    try {
      response = await Api().get(`/admin/get-single-service/${payload}`)
      // console.log(response)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async updateServiceAction(context, payload) {
    let response = ''
    try {
      response = await Api().post(`/admin/edit-service/${payload.id}`, payload)
      context.commit(SET_SERVICES_MUTATION, response.data.services)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async deleteServiceAction(_, payload) {
    // console.log(payload.id)
    let response = ''
    try {
      response = await Api().delete(`/admin/delete-service/${payload.id}`)
    } catch (error) {
      console.log(error)
    }
  },

  async [GET_SERVICES_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-services')
      context.commit(SET_SERVICES_MUTATION, response.data.services)
      return response
    } catch (error) {
      console.log(error)
    }
  },
}
