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
                                                <p style="margin-left: 10px">Product Name</p>
                                                <el-input v-model="form.name" class="w-100 m-2" size="small"
                                                    placeholder="Input Product Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Product Price</p>
                                                <el-input v-model="form.price" class="w-100 m-2" size="small"
                                                    placeholder="Input Product Price" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <div class="centerx labelx">
                                                <p style="margin-left: 10px">Select Category</p>
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
                                        <label class="col-sm-3 col-form-label">Select Image One <span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <vs-input class="mb-2" border success type="file"
                                                @change="loadCategoryImageOne($event)">
                                            </vs-input>
                                            <span class="text-danger text-sm" v-for="error in getErrors.image"
                                                v-if="getErrors">
                                                {{ error }}
                                            </span>
                                        </div>
                                        <div class="col-md-3">
                                            <span><img :src="form.imageOne" alt=""
                                                    style="width: 150px; height: 150px" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <el-button size="small" style="background:black;color:white"
                                        @click.prevent="clearData">
                                        Cancel
                                    </el-button>
                                    <el-button type="success" size="small" :loading="loading"
                                        @click.prevent="createProduct">
                                        {{ loading ? 'Submitting product data.....' : 'Create Product' }}
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
    CREATE_PRODUCT_ACTION,
    GET_CATEGORIES_ACTION
} from '../../../store/storeConstants'
import {
    mapActions, mapState
} from 'vuex'
export default {
    name: 'CreateProduct',
    data() {
        return {
            loading: false,
            categories: [],
            form: {
                name: '',
                price: '',
                category_id: '',
                imageOne: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions('product', {
            createProductAction: CREATE_PRODUCT_ACTION,
        }),

        ...mapActions('category', {
            getAllCategoriesList: GET_CATEGORIES_ACTION
        }),

        clearData() {
            this.form.name = '',
                this.form.imageOne = ''
        },

        getAllCategories() {
            this.getAllCategoriesList()
                .then((response) => {
                    // console.log(response)
                    this.categories = response.data.categories
                })
        },

        loadCategoryImageOne(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.form.imageOne = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        async createProduct() {
            this.loading = true
            try {
                await this.createProductAction({
                    name: this.form.name,
                    imageOne: this.form.imageOne
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
        ...mapState('product', {
            getErrors: 'errors'
        }),
    },
    async mounted() {
        await this.getAllCategories()
    }
}
</script>
  