import Axios from "axios"
import Api from '../../../requests/Api'
import {
  CREATE_CATEGORY_ACTION,
  CREATE_CATEGORY,
  SET_CATEGORIES_MUTATION,
  GET_CATEGORIES_ACTION,
  SET_CATEGORIES_ERRORS_MUTATION,
  GET_SINGLE_CATEGORY_ACTION,
  SET_SINGLE_CATEGORY_MUTATION
} from "../../storeConstants"

export default {
  async [CREATE_CATEGORY_ACTION](context, payload) {
    let response = ''
    try {
      response = await Api().post('/admin/create-category', payload)
    }
    catch (error) {
      context.commit(SET_CATEGORIES_ERRORS_MUTATION, error.response.data.errors)
    }
    if (response === 201) {
      context.commit(SET_CATEGORIES_MUTATION, payload)
    }

  },

  async getSingleCategoryAction(context, payload) {
    let response = ''
    try {
      response = await Api().get(`/admin/get-single-category/${payload}`)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async updateCategoryAction(context, payload) {
    let response = ''
    try {
      response = await Api().post(`/admin/edit-category/${payload.id}`, payload)
      context.commit(SET_CATEGORIES_MUTATION, response.data.categories)
      return response
    }
    catch (error) {
      console.log(error)
    }
  },

  async deleteCategoryAction(context, payload) {
    // console.log(payload.id)
    let response = ''
    try {
      response = await Api().delete(`/admin/delete-category/${payload.id}`)
    } catch (error) {
      console.log(error)
    }
  },

  async [GET_CATEGORIES_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-categories')
      return response
    } catch (error) {
      console.log(error)
    }
    if (response.status === 200) {
      context.commit(SET_CATEGORIES_MUTATION, response.data.categories)
    }
  },
}
