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
                                        <label class="col-sm-3 col-form-label">Category Name <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="create users" size="small"
                                                style="width:100%" v-model="form.name" />
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
import { mapActions, mapGetters } from 'vuex';
import Api from '../../../requests/Api'
import {
  GET_SINGLE_CATEGORY_ACTION,
  GET_SINGLE_CATEGORY_GETTER
} from '../../../store/storeConstants'
export default {
    name: 'EditCategory',
    data() {
        return {
            form: {
                name: ''
            }
        }
    },
    methods: {
        // ...mapActions('category', {
        //     getSingleCategory: (GET_SINGLE_CATEGORY_ACTION, this.$route.params.id)
        // }),
        getSingleCategoryMethod() {
            // this.getSingleCategory()
            this.$store.dispatch('category/getSingleCategoryAction', this.$route.params.id)
        }
    },
    created: {
      ...mapGetters('category', {
        singleCategory: GET_SINGLE_CATEGORY_GETTER
      })
    },
    mounted() {
      this.getSingleCategoryMethod()
    }
}
</script>
