<template>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h4 class="card-title">Product Class List</h4>
                <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark" placeholder="Search" />
              </div>
    
              <p class="card-description">
                <RouterLink to="/create-classes">
                  <vs-button color="dark" type="filled" size="small">
                    Create Product Class
                  </vs-button>
                </RouterLink>
    
              </p>
    
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="productclasses" v-for="(productclass, index) in productclasses">
                      <td>{{ index + 1 }}</td>
                      <td>{{ productclass.name }}</td>
                      <td class="text-success">
                        {{ moment(productclass.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                      </td>
                      <td>
                        <RouterLink :to="`/edit-classes/${productclass.id}`">
                          <el-button size="small" style="background:orange;color:white">
                            Edit
                          </el-button>
                        </RouterLink>
                        <el-button size="small" style="background:red;color:white" @click.prevent="deleteProductClass(productclass)">
                          {{ loading ? 'Deleting data.....' : 'Delete' }}
                        </el-button>
                      </td>
                    </tr>
                    <tr v-else>
                      <p>No data available</p>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- <Page :total="pageInfo.total" size="small" :current="pageInfo.current_page" :page-size="parseInt(pageInfo.per_page)" v-if="pageInfo" @on-change="getAllCategories" /> -->
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
      GET_CLASSES_ACTION,
      GET_CLASSES_GETTER
    } from '../../../store/storeConstants'
    import moment from "moment"
    
    export default {
      name: 'ClassList',
      data() {
        return {
          // total: 6,
          // pageInfo: null,
          loading: false,
          toggleDeleteModal: false,
          moment: moment
        }
      },
      methods: {
        ...mapActions('proclass', {
          getAllProductClassesList: GET_CLASSES_ACTION
        }),
    
        async deleteProductClass(id) {
          this.loading = true
          await this.$store.dispatch('proclass/deleteProductClassAction', id)
            .then(() => {
              this.getAllProductClasses()
            })
          this.loading = false
        },
    
        getAllProductClasses() {
          this.getAllProductClassesList()
        }
      },
      computed: {
        ...mapGetters('proclass', {
            productclasses: GET_CLASSES_GETTER
        })
      },
      async mounted() {
        await this.getAllProductClasses()
      }
    }
    </script>
    