<template>
<div class="content-wrapper">
  <notifications position="top right" class="mt-3" group="create_service" />
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Create Service</h4>
          <form class="form-sample">

            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <div class="col-md-6">
                    <div class="centerx labelx">
                      <p style="margin-left: 10px">Service Name<span class="text-danger">*</span></p>
                      <el-input v-model="form.name" class="w-100 m-2" size="small" placeholder="Input Service Name" />
                      <small class="text-danger text-sm" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="centerx labelx">
                      <p style="margin-left: 10px">Service Price<span class="text-danger">*</span></p>
                      <el-input v-model="form.price" class="w-100 m-2" size="small" placeholder="Input Service Price" />
                      <small class="text-danger text-sm" v-if="errors.price">{{ errors.price[0] }}</small>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <div class="centerx labelx">
                      <p style="margin-left: 10px">Small Description<span class="text-danger">*</span></p>
                      <!-- <mavon-editor v-model="form.description"/> -->
                      <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                      <small class="text-danger text-sm" v-if="errors.description">{{ errors.description[0] }}</small>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <div class="centerx labelx">
                      <p style="margin-left: 10px">Main Description<span class="text-danger">*</span></p>
                      <!-- <mavon-editor v-model="form.description"/> -->
                      <ckeditor :editor="editor" v-model="form.mainDescription" :config="editorConfig"></ckeditor>
                      <small class="text-danger text-sm" v-if="errors.mainDescription">{{ errors.mainDescription[0] }}</small>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Select Image One <span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-6">
                    <vs-input class="mb-2" border success type="file" @change="loadServiceImageOne($event)">
                    </vs-input>
                    <small class="text-danger text-sm" v-if="errors.image_one">{{ errors.image_one[0] }}</small>
                  </div>
                  <div class="col-md-3">
                    <span><img :src="form.image_one" alt="" style="width: 150px; height: 150px" /></span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Select Image Two <span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-6">
                    <vs-input class="mb-2" border success type="file" @change="loadServiceImageTwo($event)">
                    </vs-input>
                    <small class="text-danger text-sm" v-if="errors.image_two">{{ errors.image_two[0] }}</small>
                  </div>
                  <div class="col-md-3">
                    <span><img :src="form.image_two" alt="" style="width: 150px; height: 150px" /></span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Select Image Three <span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-6">
                    <vs-input class="mb-2" border success type="file" @change="loadServiceImageThree($event)">
                    </vs-input>
                    <small class="text-danger text-sm" v-if="errors.image_three">{{ errors.image_three[0] }}</small>
                  </div>
                  <div class="col-md-3">
                    <span><img :src="form.image_three" alt="" style="width: 150px; height: 150px" /></span>
                  </div>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <el-button size="small" style="background:black;color:white">
                  Cancel
                </el-button>
                <el-button type="success" size="small" :loading="loading" @click.prevent="createService">
                  {{ loading ? 'Submitting service data.....' : 'Create Service' }}
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
  CREATE_SERVICE_ACTION
} from '../../../store/storeConstants'
import {
  mapActions,
  mapState
} from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: 'createService',
  data() {
    return {
      loading: false,
      categories: [],
      form: {
        name: '',
        price: '',
        description: '',
        mainDescription: '',
        image_one: '',
        image_two: '',
        image_three: ''
      },
      errors: {},
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    ...mapActions('service', {
      createServiceAction: CREATE_SERVICE_ACTION,
    }),

    loadServiceImageOne(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_one = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    loadServiceImageTwo(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_two = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    loadServiceImageThree(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_three = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async createService() {
      this.loading = true
      await Api().post('admin/create-service', this.form)
        .then(() => {
          this.loading = false

          this.$notify({
            group: 'create_service',
            type: 'success',
            title: 'Request complete',
            text: 'Service created'
          });
          this.loading = false
          this.errors = {}
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
            this.$notify({
              group: 'create_service',
              type: 'error',
              title: 'Request failed',
              text: 'Please fill the missing field (s) to continue'
            });
          }
          if (error.response.status === 500) {
            this.errors = error.response.data.errors
            this.$notify({
              group: 'create_service',
              type: 'error',
              title: 'Request failed',
              text: 'Please fill the missing field (s) to continue'
            });
          }
          this.loading = false
        })
    }

  },
  computed: {
    ...mapState('service', {
      getErrors: 'errors'
    }),
  },
}
</script>

<style>
.ck-editor__editable {
  min-height: 100px;
}
</style>
