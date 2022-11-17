<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Product</h4>
                        <form class="form-sample">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Product Name<span
                                                        class="text-danger">*</span></p>
                                                <el-input v-model="form.name" class="w-100 m-2" size="small"
                                                    placeholder="Input Product Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Product Price<span
                                                        class="text-danger">*</span></p>
                                                <el-input v-model="form.price" class="w-100 m-2" size="small"
                                                    placeholder="Input Product Price" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Select Category<span
                                                        class="text-danger">*</span></p>
                                                <el-select v-model="form.category_id" class="w-100 m-2"
                                                    placeholder="Select Category" size="small">
                                                    <el-option v-for="category in categories" :key="category.id"
                                                        :label="category.name" :value="category.id" />
                                                </el-select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Select Brand</p>
                                                <!-- <el-select v-model="form.category_id" class="w-100 m-2"
                                                    placeholder="Select Category" size="small">
                                                    <el-option v-for="brand in brands" :key="brand.id"
                                                        :label="brand.name" :value="brand.id" />
                                                </el-select> -->
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
                                                @change="loadProductImageOne($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.imageone"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.imageOne" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Select Image Two <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadProductImageTwo($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.imageTwo"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.imageTwo" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Select Image Three <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadProductImageThree($event)">
                                            </vs-input>
                                            <!-- <span class="text-danger text-sm" v-for="error in getErrors.imageThree"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span> -->
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.imageThree" alt=""
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
                                        @click.prevent="updateProduct">
                                        {{ loading ? 'Submitting product data.....' : 'Update Product' }}
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
import { GET_CATEGORIES_ACTION } from '../../../store/storeConstants';
export default {
    name: 'EditCategory',
    data() {
        return {
            loading: false,
            form: {
                id: '',
                name: '',
                price: '',
                category_id: '',
                description: '',
                mainDescription: '',
                imageOne: '',
                imageTwo: '',
                imageThree: ''
            },
            categories: [],
            errors: [],
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    methods: {
        ...mapActions('category', {
            getAllCategoriesList: GET_CATEGORIES_ACTION
        }),

        loadProductImageOne(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.form.imageOne = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        loadProductImageTwo(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.form.imageTwo = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        loadProductImageThree(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.form.imageThree = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        getAllCategories() {
            this.getAllCategoriesList()
                .then((response) => {
                    // console.log(response)
                    this.categories = response.data.categories
                })
        },

        async getSingleProductMethod() {
            await this.$store.dispatch('product/getSingleProductAction', this.$route.params.id)
                .then((response) => {
                    this.form.id = response.data.product.id
                    this.form.name = response.data.product.name
                    this.form.price = response.data.product.price
                    this.form.category_id = response.data.product.category_id
                    this.form.description = response.data.product.description
                    this.form.mainDescription = response.data.product.mainDescription
                    this.form.imageOne = response.data.product.imageOne
                    this.form.imageTwo = response.data.product.imageTwo
                    this.form.imageThree = response.data.product.imageThree
                })
        },

        async updateProduct() {
            this.loading = true
            await this.$store.dispatch('category/updateProductAction', this.form)
                .then(() => {

                })
            this.$router.push('/products-list')
            this.loading = false
        }
    },
    mounted() {
        this.getSingleProductMethod()
        this.getAllCategories()
    },
}
</script>
    
<style>
.ck-editor__editable {
    min-height: 100px;
}
</style>
  