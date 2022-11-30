<template>
    <div class="content-wrapper">
    <notifications position="top right" class="mt-3" group="delete_service" />
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h4 class="card-title">Service List</h4>
                <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark" placeholder="Search" />
              </div>

              <p class="card-description">
                <RouterLink to="/create-services">
                  <vs-button color="dark" type="filled" size="small">
                    Create Service
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
                    <tr v-if="services" v-for="(service, index) in services">
                      <td>{{ index + 1 }}</td>
                      <td>{{ service.name }}</td>
                      <td class="text-success">
                        {{ moment(service.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                      </td>
                      <td>
                        <RouterLink :to="`/edit-services/${service.id}`">
                          <el-button size="small" style="background:orange;color:white">
                            Edit
                          </el-button>
                        </RouterLink>
                        <el-button size="small" style="background:red;color:white" @click.prevent="deleteService(service)">
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
      GET_SERVICES_ACTION,
      GET_SERVICES_GETTER
    } from '../../../store/storeConstants'
    import moment from "moment"

    export default {
      name: 'ServiceList',
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
        ...mapActions('service', {
          getAllServicesList: GET_SERVICES_ACTION
        }),

        async deleteService(id) {
          this.loading = true
          await this.$store.dispatch('service/deleteServiceAction', id)
            .then(() => {
              this.getAllServicesList()
              this.$notify({
                group: 'delete_service',
                type: 'success',
                text: 'Service deleted successfully'
              });
            })
          this.loading = false
        },

        getAllServices() {
          this.getAllServicesList()
        }
      },
      computed: {
        ...mapGetters('service', {
            services: GET_SERVICES_GETTER
        })
      },
      async mounted() {
        await this.getAllServices()
      }
    }
    </script>
