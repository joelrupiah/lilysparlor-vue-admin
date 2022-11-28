<template>
    <div class="content-wrapper">
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
                                                <p style="margin-left: 10px">Service Name<span
                                                        class="text-danger">*</span></p>
                                                <el-input v-model="form.name" class="w-100 m-2" size="small"
                                                    placeholder="Input Service Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Service Price<span
                                                        class="text-danger">*</span></p>
                                                <el-input v-model="form.price" class="w-100 m-2" size="small"
                                                    placeholder="Input Service Price" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Small Description<span
                                                        class="text-danger">*</span></p>
                                                <!-- <mavon-editor v-model="form.description"/> -->
                                                <ckeditor :editor="editor" v-model="form.description"
                                                    :config="editorConfig"></ckeditor>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Main Description<span
                                                        class="text-danger">*</span></p>
                                                <!-- <mavon-editor v-model="form.description"/> -->
                                                <ckeditor :editor="editor" v-model="form.mainDescription"
                                                    :config="editorConfig"></ckeditor>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Select Image One <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadServiceImageOne($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.image_one"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.image_one" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Select Image Two <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadServiceImageTwo($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.image_two"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.image_two" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Select Image Three <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadServiceImageThree($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.image_three"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.image_three" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <el-button size="small" style="background:black;color:white">
                                        Cancel
                                    </el-button>
                                    <el-button type="success" size="small" :loading="loading"
                                        @click.prevent="updateService">
                                        {{ loading ? 'Submitting service data.....' : 'Update Service' }}
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name: 'EditService',
    data() {
        return {
            loading: false,
            form: {
                id: '',
                name: '',
                price: '',
                description: '',
                mainDescription: '',
                image_one: '',
                image_two: '',
                image_three: ''
            },
            errors: [],
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    methods: {

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

        async getSingleServiceMethod() {
            await this.$store.dispatch('service/getSingleServiceAction', this.$route.params.id)
                .then((response) => {
                    this.form.id = response.data.service.id
                    this.form.name = response.data.service.name
                    this.form.price = response.data.service.price
                    this.form.description = response.data.service.description
                    this.form.mainDescription = response.data.service.mainDescription
                    this.form.image_one = response.data.service.image_one
                    this.form.image_two = response.data.service.image_two
                    this.form.image_three = response.data.service.image_three
                })
        },

        async updateService() {
            this.loading = true
            await this.$store.dispatch('service/updateServiceAction', this.form)
                .then(() => {

                })
            this.$router.push('/services-list')
            this.loading = false
        }
    },
    mounted() {
        this.getSingleServiceMethod()
    },
}
</script>

<style>
.ck-editor__editable {
    min-height: 100px;
}
</style>
