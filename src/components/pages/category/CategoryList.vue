<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h4 class="card-title">Categories List</h4>
              <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark" placeholder="Search" />
            </div>

            <p class="card-description">
              <RouterLink to="/create-categories">
                <vs-button color="dark" type="filled" size="small">
                  Create Category
                </vs-button>
              </RouterLink>

            </p>

            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Date Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(category, index) in categories">
                    <td>{{ index + 1 }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                      <img :src="category.image" alt="" style="width:40px;height:40px" />
                    </td>
                    <td class="text-success">
                      {{ moment(category.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                    </td>
                    <td>
                      <RouterLink :to="`/edit-categories/${category.id}`">
                        <el-button size="small" style="background:orange;color:white">
                          Edit
                        </el-button>
                      </RouterLink>
                      <el-button size="small" style="background:red;color:white"
                        @click.prevent="deleteCategory(category)">
                        {{ loading ? 'Deleting data.....' : 'Delete' }}
                      </el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4 ms-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../../../requests/Api'
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  GET_CATEGORIES_ACTION,
  GET_CATEGORIES_GETTER
} from '../../../store/storeConstants'
import moment from "moment"

export default {
  name: 'CategoryList',
  data() {
    return {
      loading: false,
      toggleDeleteModal: false,
      moment: moment
    }
  },
  methods: {
    ...mapActions('category', {
      getAllCategoriesList: GET_CATEGORIES_ACTION
    }),

    async deleteCategory(id) {
      this.loading = true
      await this.$store.dispatch('category/deleteCategoryAction', id)
        .then(() => {
          this.getAllCategories()
        })
      this.loading = false
    },

    getAllCategories() {
      this.getAllCategoriesList()
    }
  },
  computed: {
    ...mapGetters('category', {
      categories: GET_CATEGORIES_GETTER
    })
  },
  async mounted() {
    await this.getAllCategories()
  }
}
</script>
