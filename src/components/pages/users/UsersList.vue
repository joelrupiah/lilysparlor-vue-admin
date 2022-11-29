<template>
<div class="content-wrapper">
  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h4 class="card-title">Users List</h4>
            <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark" placeholder="Search" />
          </div>

          <p class="card-description">
            <RouterLink to="/create-categories">
              <vs-button color="dark" type="filled" size="small">
                Create Users
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
                <tr v-if="users" v-for="(user, index) in users">
                  <td>{{ index + 1 }}</td>
                  <td>
                  <RouterLink :to="`/show-history/${user.id}`" style="color:green;text-decoration:none">
                      {{ user.name }}
                  </RouterLink>
                  </td>
                  <td>
                    {{ user.email }}
                  </td>
                  <td class="text-success">
                    {{ moment(user.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                  </td>
                  <td>
                    <RouterLink :to="`/show-history/${user.id}`">
                      <el-button size="small" style="background:orange;color:white">
                        Show History
                      </el-button>
                    </RouterLink>
                    <el-button size="small" style="background:red;color:white" @click.prevent="deleteUser(user)">
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
</template>

<script>
import Api from '../../../requests/Api'
import moment from "moment"
export default {
  name: 'UsersList',
  data() {
    return {
      loading: false,
      moment: moment,
      users: []
    }
  },
  methods: {
    getAllUsers() {
      Api().get('admin/get-all-users')
        .then((response) => {
          this.users = response.data.users
        })
    }
  },
  mounted() {
    this.getAllUsers()
  }
}
</script>
