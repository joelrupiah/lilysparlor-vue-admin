<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create Category</h4>
            <form class="form-sample">

              <div class="row">
                <div class="col-md-8">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Category Name <span class="text-danger">*</span> </label>
                    <div class="col-sm-9">
                      <vs-input color="dark" label-placeholder="create users" size="small" style="width:100%"
                        v-model="form.name" />
                      <span class="text-danger text-sm" v-for="error in getErrors.name" v-if="getErrors">
                        {{ error }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Select Category Image <span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-6">
                      <vs-input class="mb-2" border success type="file" @change="loadCategoryImage($event)">
                      </vs-input>
                      <span class="text-danger text-sm" v-for="error in getErrors.image" v-if="getErrors">
                        {{ error }}
                      </span>
                    </div>
                    <div class="col-md-3">
                      <span><img :src="form.image" alt="" style="width: 150px; height: 150px" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <el-button size="small" style="background:black;color:white" @click.prevent="clearData">
                    Cancel
                  </el-button>
                  <el-button type="success" size="small" :loading="loading" @click.prevent="createCategory">
                    {{ loading ? 'Submitting category data.....' : 'Create Category' }}
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
import Api from '../../../requests/Api'
import {
  CREATE_CATEGORY_ACTION
} from '../../../store/storeConstants'
import {
  mapActions, mapState
} from 'vuex'
export default {
  name: 'CreateCategory',
  data() {
    return {
      loading: false,
      form: {
        name: '',
        image: ''
      },
      errors: []
    }
  },
  methods: {
    ...mapActions('category', {
      createCategoryAction: CREATE_CATEGORY_ACTION,
    }),

    clearData() {
      this.form.name = '',
        this.form.image = ''
    },

    loadCategoryImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async createCategory() {
      this.loading = true
      try {
        await this.createCategoryAction({
          name: this.form.name,
          image: this.form.image
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
    ...mapState('category', {
      getErrors: 'errors'
    }),
  }
}
</script>
