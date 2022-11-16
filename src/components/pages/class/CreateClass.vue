<template>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Create Product Class</h4>
              <form class="form-sample">
  
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Product Class Name <span class="text-danger">*</span> </label>
                      <div class="col-sm-9">
                        <vs-input color="dark" label-placeholder="create users" size="small" style="width:100%"
                          v-model="form.name" />
                        <span class="text-danger text-sm" v-for="error in getErrors.name" v-if="getErrors">
                          {{ error }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <el-button size="small" style="background:black;color:white" @click.prevent="clearData">
                      Cancel
                    </el-button>
                    <el-button type="success" size="small" :loading="loading" @click.prevent="createProductClass">
                      {{ loading ? 'Creating data.....' : 'Create Product Class' }}
                    </el-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {
    CREATE_CLASS_ACTION
  } from '../../../store/storeConstants'
  import {
    mapActions, mapState
  } from 'vuex'
  export default {
    name: 'CreateClass',
    data() {
      return {
        loading: false,
        form: {
          name: ''
        },
        errors: []
      }
    },
    methods: {
      ...mapActions('proclass', {
        createProductClassAction: CREATE_CLASS_ACTION,
      }),
  
      clearData() {
        this.form.name = ''
      },
  
      async createProductClass() {
        this.loading = true
        try {
          await this.createProductClassAction({
            name: this.form.name
          })
          this.loading = false
          this.clearData()
        } catch (error) {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
          this.loading = false
        }
      }
  
    },
    computed: {
      ...mapState('proclass', {
        getErrors: 'errors'
      }),
    }
  }
  </script>
  