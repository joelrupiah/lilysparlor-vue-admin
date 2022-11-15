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
      // console.log(error.response.data.errors)
      // console.log(error.response.data.errors.name[0])
      // console.log(error.response.data.errors.name[0])
      context.commit(SET_CATEGORIES_ERRORS_MUTATION, error.response.data.errors)
    }
    if (response === 201) {
      context.commit(SET_CATEGORIES_MUTATION, payload)
    }

    // if (response === 422) {
    //   context.commit(SET_CATEGORIES_ERRORS_MUTATION, payload)
    // }
  },

  // async [GET_SINGLE_CATEGORY_ACTION](context, payload) {
  //   let response = ''
  //   try{
  //     response = await Api().get('/get-single-category/' + payload)
  //     context.commit(SET_SINGLE_CATEGORY_MUTATION, payload)
  //   }
  //   catch(error) {
  //     console.log(error)
  //   }
  // },

  async getSingleCategoryAction(context, payload){
    let response = ''
    try{
      response = await Api().get(`/admin/get-single-category/${payload}`)
      context.commit(SET_SINGLE_CATEGORY_MUTATION, response.data.category)
    }
    catch(error) {
      console.log(error)
    }
  },

  async [GET_CATEGORIES_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-categories')
      // console.log(response);
    } catch (error) {
      // console.log(error)
      // console.log(error.response.data.error[0])
    }
    if (response.status === 200) {
      // console.log(response);
      context.commit(SET_CATEGORIES_MUTATION, response.data.categories)
    }
  },
}
