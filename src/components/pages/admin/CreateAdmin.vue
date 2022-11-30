<template>
<div id="create-admin">
  <notifications position="top right" class="mt-3" group="create_admin" />
  <div id="edit-booking">
    <div class="content-wrapper">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Create Admin</h4>
              <form class="form-sample">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group row">
                      <div class="col-md-4">
                        <div class="centerx labelx">
                          <p style="margin-left: 10px">
                            Admin Name<span class="text-danger"></span>
                          </p>
                          <el-input class="w-100 m-2" v-model="form.name" placeholder="Enter name" size="small" />
                          <small class="text-danger text-sm" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="centerx labelx">
                          <p style="margin-left: 10px">
                            Admin Email<span class="text-danger">*</span>
                          </p>
                          <el-input class="w-100 m-2" v-model="form.email" placeholder="Enter Email" size="small" />
                          <small class="text-danger text-sm" v-if="errors.email">{{ errors.email[0] }}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="centerx labelx">
                          <p style="margin-left: 10px">
                            Admin Password<span class="text-danger">*</span>
                          </p>
                          <el-input class="w-100 m-2" v-model="form.password" placeholder="Enter Password" size="small" />
                          <small class="text-danger text-sm" v-if="errors.password">{{ errors.password[0] }}</small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-md-6">
                        <div class="centerx labelx">
                          <p style="margin-left: 10px">
                            Assign Role to Admin<span class="text-danger">*</span>
                          </p>
                          <el-select class="w-100 m-2" v-model="form.role" placeholder="Select Role" size="small">
                            <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.id" />
                          </el-select>
                          <small class="text-danger text-sm" v-if="errors.role">{{ errors.role[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-12 col-form-label">Assign Permissions<span class="text-danger">*</span>
                      </label>
                      <div class="col-sm-12">
                        <label class="ml-5" v-for="permission in permissions" :key="permission.id">
                          <input type="checkbox" v-model="form.permissions" :value="permission.name"> {{ permission.name }}
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <el-button size="small" style="background: black; color: white">
                      Cancel
                    </el-button>
                    <el-button type="success" size="small" :loading="loading" @click.prevent="createAdmin">
                      {{ loading ? 'Submitting admin data.....' : 'Create Admin' }}
                    </el-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Api from '../../../requests/Api'
export default {
  name: 'CreateAdmin',
  data() {
    return {
      loading: false,
      permissions: [],
      roles: [],
      form: {
        name: '',
        email: '',
        password: '',
        permissions: [],
        role: ''
      },
      errors: {}
    }
  },
  methods: {
    getAllPermissions: async function() {
      await Api().get('admin/get-permissions')
        .then(response => {
          this.permissions = response.data.permissions
        })
    },
    getAllRoles: async function() {
      await Api().get('admin/get-roles')
        .then(response => {
          this.roles = response.data.roles
        })
    },
    createAdmin: async function() {
      this.loading = true
      await Api().post('admin/create-admin', this.form)
        .then(() => {
          this.loading = false
          this.$notify({
            group: 'create_admin',
            type: 'success',
            title: 'Request complete',
            text: 'Admin created, email Sent'
          });
          this.loading = false
          this.errors = {}
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
          if (error.response.status === 404) {
            // this.errors = error.response.data.errors
            this.$notify({
              group: 'create_admin',
              type: 'error',
              title: 'An error occured',
              text: 'Please contact Admin for support'
            });
          }
          if (error.response.status === 500) {
            // this.errors = error.response.data.errors
            this.$notify({
              group: 'create_admin',
              type: 'error',
              title: 'An error occured',
              text: 'Please contact Admin for support'
            });
          }
          this.loading = false
        })
    },
  },
  mounted() {
    this.getAllRoles()
    this.getAllPermissions()
  }
}
</script>
