<template>
    <div id="admin-list">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h4 class="card-title">Admins List</h4>
                                <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark"
                                    placeholder="Search" />
                            </div>

                            <p class="card-description">
                                <RouterLink to="/create-admins">
                                    <vs-button color="dark" type="filled" size="small">
                                        Create Admins
                                    </vs-button>
                                </RouterLink>

                            </p>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Date Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="admins" v-for="(admin, index) in admins">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ admin.name }}</td>
                                            <td>
                                                {{ admin.email }}
                                            </td>
                                            <td class="text-success">
                                                {{ moment(admin.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                                            </td>
                                            <td>
                                                <RouterLink :to="`/show-history/${admin.id}`">
                                                    <el-button size="small" style="background:orange;color:white">
                                                        Show History
                                                    </el-button>
                                                </RouterLink>
                                                <el-button size="small" style="background:red;color:white"
                                                    @click.prevent="deleteAdmin(admin)">
                                                    {{ loading ? 'Deleting data.....' : 'Delete' }}
                                                </el-button>
                                            </td>
                                        </tr>
                                        <tr v-else>
                                            <p>No data available</p>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <Page :total="pageInfo.total" size="small" :current="pageInfo.current_page" :page-size="parseInt(pageInfo.per_page)" v-if="pageInfo" @on-change="getAllCategories" /> -->
                            <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4 ms-3" />
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
    name: 'AdminList',
    data() {
        return {
            loading: false,
            moment: moment,
            admins: []
        }
    },
    methods: {
        getAllAdmins: async function(){
            await Api().get('all-admins')
                .then(response => {
                    this.admins = response.data.admins
                })
        },
        deleteAdmin() { }
    }
}
</script>