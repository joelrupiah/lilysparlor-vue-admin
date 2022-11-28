<template>
    <div id="booking-list">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h4 class="card-title">Orders/Bookings List</h4>
                                <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark"
                                    placeholder="Search" />
                            </div>

                            <p class="card-description">
                                <RouterLink to="/create-bookings">
                                    <vs-button color="dark" type="filled" size="small">
                                        Create Booking
                                    </vs-button>
                                </RouterLink>

                            </p>

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Order Date</th>
                                            <th>Expected Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="orders" v-for="order in orders" :key="order.id">
                                            <td>{{ order.order_id }}</td>
                                            <td>{{ order.user.name }}</td>
                                            <td>
                                                <span :class="statusColor(order.status)">
                                                    {{ order.status }}
                                                </span>
                                            </td>
                                            <td>{{ order.total }}</td>
                                            <td class="text-success">
                                                {{ moment(order.updated_at).format("ddd MMM DD, YYYY [at] HH:mm a")}}
                                            </td>
                                            <td class="text-success">
                                                {{ moment(order.shipping.expected_date).format("ddd MMM DD, YYYY")}}
                                            </td>
                                            <td>
                                                <RouterLink :to="`/edit-bookings/${order.order_id}`">
                                                    <el-button size="small" style="background:orange;color:white">
                                                        Assign
                                                    </el-button>
                                                </RouterLink>
                                                <el-button size="small" style="background:red;color:white"
                                                    @click.prevent="deleteCategory(order)">
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
import moment from "moment"
export default {
    name: 'BookingList',
    data() {
        return {
            loading: false,
            moment: moment
        }
    },
    methods: {
    getOrders: async function () {
      await this.$store.dispatch("order/getAllUserOrders");
    },
    statusColor(status) {
      let data = {
        pending: "badge badge-info",
        processing: "badge badge-primary",
        delivering: "badge badge-warning",
        complete: "badge badge-success",
        cancelled: "badge badge-danger",
      };
      return data[status];
    },
  },

  computed: {
    orders() {
      return this.$store.getters["order/getAllOrders"];
    },
  },

  mounted() {
    this.getOrders();
  },
}
</script>