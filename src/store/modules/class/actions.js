import Api from '../../../requests/Api'
import {
  CREATE_CLASS_ACTION,
  SET_CLASSES_MUTATION,
  GET_CLASSES_ACTION,
  SET_CLASSES_ERRORS_MUTATION
} from "../../storeConstants"

export default {
  async [CREATE_CLASS_ACTION](context, payload) {
    let response = ''
    try {
      response = await Api().post('/admin/create-class', payload)
    }
    catch (error) {
      context.commit(SET_CLASSES_ERRORS_MUTATION, error.response.data.errors)
    }
    if (response === 201) {
      context.commit(SET_CLASSES_MUTATION, payload)
    }

  },

  async getSingleProductClassAction(_, payload) {
    let response = ''
    try {
      response = await Api().get(`/admin/get-single-class/${payload}`)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async updateProductClassAction(context, payload) {
    let response = ''
    try {
      response = await Api().post(`/admin/edit-class/${payload.id}`, payload)
      context.commit(SET_CLASSES_MUTATION, response.data.proclasses)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async deleteProductClassAction(_, payload) {
    // console.log(payload.id)
    let response = ''
    try {
      response = await Api().delete(`/admin/delete-class/${payload.id}`)
    } catch (error) {
      console.log(error)
    }
  },

  async [GET_CLASSES_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-classes')
    } catch (error) {
      console.log(error)
    }
    if (response.status === 200) {
      context.commit(SET_CLASSES_MUTATION, response.data.productclasses)
    }
  },
}
