<template>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Update Product Class</h4>
              <form class="form-sample">
    
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Product Class Name <span class="text-danger">*</span> </label>
                      <div class="col-sm-9">
                        <vs-input color="dark" label-placeholder="create users" size="small" style="width:100%" v-model="form.name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <el-button size="small" style="background:black;color:white">
                      Cancel
                    </el-button>
                    <el-button type="success" size="small" :loading="loading" @click.prevent="updateProductClass">
                      {{ loading ? 'Updating data.....' : 'Update Product Class' }}
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
      mapActions,
      mapGetters
    } from 'vuex';
    import Api from '../../../requests/Api'
    
    export default {
      name: 'EditClass',
      data() {
        return {
          loading: false,
          form: {
            id: '',
            name: ''
          }
        }
      },
      methods: {
        async getSingleProductClassMethod() {
          await this.$store.dispatch('proclass/getSingleProductClassAction', this.$route.params.id)
            .then((response) => {
              this.form.id = response.data.productclass.id
              this.form.name = response.data.productclass.name
            })
        },
    
        async updateProductClass() {
          this.loading = true
          await this.$store.dispatch('proclass/updateProductClassAction', this.form)
            .then(() => {
    
            })
          this.$router.push('/classes-list')
          this.loading = false
        }
      },
      mounted() {
        this.getSingleProductClassMethod()
      },
    }
    </script>
    