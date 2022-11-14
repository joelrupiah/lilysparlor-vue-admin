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
                  <td>{{index+1}}</td>
                  <td>{{category.name}}</td>
                  <td class="text-success">
                    <!-- {{ moment(category.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }} -->
                  </td>
                  <td>
                    <RouterLink :to="`/edit-categorys/${category.id}`">
                      <vs-button color="warning" type="filled" size="small">
                        Edit
                      </vs-button>
                    </RouterLink>

                    <vs-button class="ms-1" color="danger" type="filled" size="small">
                      Delete
                    </vs-button>
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
      // categories: []
    }
  },
  methods: {
    ...mapActions('category', {
      getAllCategoriesList: GET_CATEGORIES_ACTION
    }),

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
