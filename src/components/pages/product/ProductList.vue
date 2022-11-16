<template>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h4 class="card-title">Product List</h4>
                <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark" placeholder="Search" />
              </div>
    
              <p class="card-description">
                <RouterLink to="/create-products">
                  <vs-button color="dark" type="filled" size="small">
                    Create Product
                  </vs-button>
                </RouterLink>
    
              </p>
    
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>SKU</th>
                      <th>Date Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="products" v-for="(product, index) in products">
                      <td>{{ index + 1 }}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.sku }}</td>
                      <td class="text-success">
                        {{ moment(product.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                      </td>
                      <td>
                        <RouterLink :to="`/edit-products/${product.id}`">
                          <el-button size="small" style="background:orange;color:white">
                            Edit
                          </el-button>
                        </RouterLink>
                        <el-button size="small" style="background:red;color:white" @click.prevent="deleteProduct(product)">
                          {{ loading ? 'Deleting data.....' : 'Delete' }}
                        </el-button>
                      </td>
                    </tr>
                    <!-- <tr v-else>
                      <p>No data available</p>
                    </tr> -->
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
      GET_PRODUCTS_ACTION,
      GET_PRODUCTS_GETTER
    } from '../../../store/storeConstants'
    import moment from "moment"
    
    export default {
      name: 'ProductList',
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
        ...mapActions('product', {
          getAllProductsList: GET_PRODUCTS_ACTION
        }),
    
        async deleteProduct(id) {
          this.loading = true
          await this.$store.dispatch('product/deleteProductAction', id)
            .then(() => {
              this.getAllProductsList()
            })
          this.loading = false
        },
    
        getAllProducts() {
          this.getAllProductsList()
        }
      },
      computed: {
        ...mapGetters('product', {
            products: GET_PRODUCTS_GETTER
        })
      },
      async mounted() {
        await this.getAllProducts()
      }
    }
    </script>
    