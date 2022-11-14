import Axios from "axios"
import Api from '../../../requests/Api'
import {
  CREATE_CATEGORY_ACTION,
  CREATE_CATEGORY,
  SET_CATEGORIES_MUTATION,
  GET_CATEGORIES_ACTION
} from "../../storeConstants"

export default {
  async [CREATE_CATEGORY_ACTION](context, payload) {
    return context.dispatch(CREATE_CATEGORY, {
      ...payload,
      url: 'http://127.0.0.1:8000/api/admin/create-category'
    })
  },

  async [GET_CATEGORIES_ACTION](context) {
    let response = ''
    try {
      response = await Api().get('/admin/get-categories')
      // console.log(response);
    } catch (error) {
      console.log(error.response.data.error[0])
    }
    if (response.status === 200) {
      // console.log(response);
      context.commit(SET_CATEGORIES_MUTATION, response.data.categories)
    }
  },

  async [CREATE_CATEGORY](context, payload) {
    // console.log(payload)
    let postData = {
      name: payload.name,
      image: payload.image
    }
    // console.log(postData)
    let response = ''
    try {
      response = await Api().post([payload.url], postData)
    } catch (error) {
      console.log(error.response.data.error[0])
    }

    if (response.status === 201) {
      let categoryData = {
        name: response.data.name,
        image: response.data.image
      }
      context.commit(SET_CATEGORIES_MUTATION, categoryData)
    }
  }
}
