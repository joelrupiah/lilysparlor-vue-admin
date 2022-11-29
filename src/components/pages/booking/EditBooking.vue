<template>
<div id="edit-booking">
  <div class="content-wrapper">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Edit/Apply Booking for # {{order.order_id}}</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <div class="centerx labelx">
                        <p style="margin-left: 10px">
                          User Name<span class="text-danger"></span>
                        </p>
                        <el-input class="w-100 m-2" :placeholder="order.user_name" size="small" disabled />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="centerx labelx">
                        <p style="margin-left: 10px">
                          Services Price<span class="text-danger">*</span>
                        </p>
                        <el-input class="w-100 m-2" :placeholder="order.total_price" size="small" disabled />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-4" v-for="service in order.services">
                      <div class="centerx labelx">
                        <div class="card" style="width: 18rem">
                          <img class="card-img-top" :src="service.service.image_one" alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">{{service.service.name}}</h5>
                            <p class="card-text" v-html="service.service.description">
                            </p>
                            <p class="card-text text-muted">
                              kshs{{service.service.price}}
                            </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <div class="centerx labelx">
                        <p style="margin-left: 10px">
                          Select Admin To Assign<span class="text-danger">*</span>
                        </p>
                        <el-select v-model="form.admin_id" class="w-100 m-2" placeholder="Select Admin" size="small">
                          <el-option v-for="admin in admins" :key="admin.id" :label="admin.name" :value="admin.id" />
                        </el-select>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Upload Image One <span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-6">
                      <vs-input class="mb-2" border success type="file" @change="loadBookingImageOne($event)">
                      </vs-input>
                    </div>
                    <div class="col-md-3">
                      <span><img :src="form.image_one" alt="" style="width: 150px; height: 150px" /></span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Upload Image Two <span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-6">
                      <vs-input class="mb-2" border success type="file" @change="loadBookingImageTwo($event)">
                      </vs-input>
                    </div>
                    <div class="col-md-3">
                      <span><img :src="form.image_two" alt="" style="width: 150px; height: 150px" /></span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Upload Image Three <span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-6">
                      <vs-input class="mb-2" border success type="file" @change="loadBookingImageThree($event)">
                      </vs-input>
                    </div>
                    <div class="col-md-3">
                      <span><img :src="form.image_three" alt="" style="width: 150px; height: 150px" /></span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Upate Status<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-12">

                      <input class="form-check-input" type="checkbox" value="0" v-model="form.status" id="newCheck">
                      <label class="form-check-label mr-5" for="newCheck"> New </label>

                      <input class="form-check-input" type="checkbox" value="1" v-model="form.status" id="reviewingCheck">
                      <label class="form-check-label mr-5" for="reviewingCheck"> Reviewing </label>

                      <input class="form-check-input" type="checkbox" value="2" v-model="form.status" id="processingCheck">
                      <label class="form-check-label mr-5" for="processingCheck"> Booked </label>

                      <input class="form-check-input" type="checkbox" value="3" v-model="form.status" id="comleteCheck">
                      <label class="form-check-label mr-5" for="comleteCheck"> Processing </label>

                      <input class="form-check-input" type="checkbox" value="4" v-model="form.status" id="rejectedCheck">
                      <label class="form-check-label mr-5" for="rejectedCheck"> Completed </label>
                    </div>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <el-button size="small" style="background: black; color: white">
                    Cancel
                  </el-button>
                  <el-button type="success" size="small" :loading="loading" @click.prevent="updateBooking">
                    {{ loading ? 'Submitting booking data.....' : 'Update Booking' }}
                  </el-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Api from "../../../requests/Api";
export default {
  name: "EditBooking",
  data() {
    return {
      loading: false,
      admins: [],
      order: {
        user_name: "",
        total_price: "",
        order_id: "",
        services: []
      },
      form: {
        order_id: "",
        admin_id: "",
        image_one: "",
        image_two: "",
        image_three: "",
        status: []
      },
    };
  },
  methods: {
    loadBookingImageOne(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_one = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    loadBookingImageTwo(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_two = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    loadBookingImageThree(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.image_three = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async getAllAdmins() {
      await this.$store.dispatch("admin/getAllAdmins").then((response) => {
        // console.log(response);
        this.admins = response.data.admins;
        // console.log(response)
      });
    },
    async getSpecificUserOrder() {
      // console.log(this.$route.params.order_id)
      await Api()
        .get("admin/get-user-specific-order/" + this.$route.params.order_id)
        .then((response) => {
          this.form.order_id = response.data.order.order_id
          this.order.user_name = response.data.order.user.name;
          this.order.total_price = response.data.order.total;
          this.order.services = response.data.order.service
          this.order.order_id = response.data.order.order_id
          //  console.log(response)
        });
    },
    updateBooking() {
      this.loading = true
      Api().post('/admin/update-booking/' + this.$route.params.order_id, this.form)
        .then(() => {
          this.getSpecificUserOrder()
          this.loading = false
          this.form.status = []
        })
        .catch((error) => {
          this.loading = false
        })
    }
  },
  computed: {
    // orders() {
    //     return this.$store.getters['order/getSpecificUserOrder']
    // },
    // admins() {
    // return this.$store.getters['admin/getAllAdminsGetter']
    // }
  },
  created() {
    this.getAllAdmins();
    this.getSpecificUserOrder();
  },
};
</script>
