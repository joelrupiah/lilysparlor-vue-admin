import { GET_CATEGORIES_GETTER, GET_SINGLE_CATEGORY_GETTER } from "../../storeConstants";
// import { toRaw } from 'vue'

export default {
    [GET_CATEGORIES_GETTER]: (state) => {
      // console.log(toRaw(state.categories))
      // const categoriesState = JSON.stringify(state.categories)
      // console.log(JSON.parse(categoriesState))
      // return JSON.parse(categoriesState)
        return state.categories
    },

    [GET_SINGLE_CATEGORY_GETTER]: (state) => {
      return state.category
    }
}
