import Api from '../../../requests/Api'
import {
  CREATE_PRODUCT_ACTION,
  SET_PRODUCTS_MUTATION,
  GET_PRODUCTS_ACTION,
  SET_PRODUCTS_ERRORS_MUTATION
} from "../../storeConstants"

export default {
  async [CREATE_PRODUCT_ACTION](context, payload) {
    let response = ''
    try {
      response = await Api().post('/admin/create-product', payload)
    }
    catch (error) {
      context.commit(SET_PRODUCTS_ERRORS_MUTATION, error.response.data.errors)
    }
    if (response === 201) {
      context.commit(SET_PRODUCTS_MUTATION, payload)
    }

  },

  async getSingleProductAction(_, payload) {
    let response = ''
    try {
      response = await Api().get(`/admin/get-single-product/${payload}`)
      console.log(response)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async updateProductAction(context, payload) {
    let response = ''
    try {
      response = await Api().post(`/admin/edit-product/${payload.id}`, payload)
      context.commit(SET_PRODUCTS_MUTATION, response.data.products)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async deleteProductAction(_, payload) {
    // console.log(payload.id)
    let response = ''
    try {
      response = await Api().delete(`/admin/delete-product/${payload.id}`)
    } catch (error) {
      console.log(error)
    }
  },

  async [GET_PRODUCTS_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-products')
      context.commit(SET_PRODUCTS_MUTATION, response.data.products)
      return response
    } catch (error) {
      console.log(error)
    }
  },
}
