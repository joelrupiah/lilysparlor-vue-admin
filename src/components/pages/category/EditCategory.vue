<template>
<div class="content-wrapper">
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Update Category</h4>
          <form class="form-sample">

            <div class="row">
              <div class="col-md-8">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Category Name <span class="text-danger">*</span> </label>
                  <div class="col-sm-9">
                    <vs-input color="dark" label-placeholder="create users" size="small" style="width:100%" v-model="form.name" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Select Category Image <span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-6">
                    <vs-input class="mb-2" border success type="file" @change="loadCategoryImage($event)">
                    </vs-input>
                  </div>
                  <div class="col-md-3">
                    <span><img :src="form.image" alt="" style="width: 150px; height: 150px" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <el-button size="small" style="background:black;color:white">
                  Cancel
                </el-button>
                <el-button type="success" size="small" :loading="loading" @click.prevent="updateCategory">
                  {{ loading ? 'Updating category data.....' : 'Update Category' }}
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
  name: 'EditCategory',
  data() {
    return {
      loading: false,
      form: {
        id: '',
        name: '',
        image: ''
      }
    }
  },
  methods: {
    loadCategoryImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async getSingleCategoryMethod() {
      await this.$store.dispatch('category/getSingleCategoryAction', this.$route.params.id)
        .then((response) => {
          this.form.id = response.data.category.id
          this.form.name = response.data.category.name
          this.form.image = response.data.category.image
        })
    },

    async updateCategory() {
      this.loading = true
      await this.$store.dispatch('category/updateCategoryAction', this.form)
        .then(() => {

        })
      this.$router.push('/categories-list')
      this.loading = false
    }
  },
  mounted() {
    this.getSingleCategoryMethod()
  },
}
</script>
