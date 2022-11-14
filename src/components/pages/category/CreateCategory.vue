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
                    <vs-input color="dark" label-placeholder="create users" size="small" style="width:100%" v-model="form.name" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Select Category Image <span class="text-danger">*</span> </label>
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
                <vs-button color="dark" type="filled" size="small" @click.prevent="createCategory">
                  Create Category
                </vs-button>
                <vs-button class="ms-2" color="warning" type="filled" size="small">
                  Cancel
                </vs-button>
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
  mapActions
} from 'vuex'
export default {
  name: 'CreateCategory',
  data() {
    return {
      form: {
        name: '',
        image: ''
      }
    }
  },
  methods: {
    ...mapActions('category', {
      createCategoryAction: CREATE_CATEGORY_ACTION
    }),
    loadCategoryImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async createCategory() {
      try {
        await this.createCategoryAction({
          name: this.form.name,
          image: this.form.image
        })
      } catch (error) {
        // console.log(error)
      }
      this.$router.push('/categories-list')
    }
  }
}
</script>
