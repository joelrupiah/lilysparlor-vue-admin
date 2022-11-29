<template>
<div id="show-history">
  <div class="content-wrapper">
    <div class="row">
      <div class="col-12 grid-margin stretch-card" v-for="order in orders" :key="order.id">
        <div class="card">
          <div class="row">
            <div class="card-body">
              <h4 class="card-title">#{{order.order_id}}</h4>
              <p class="card-description">Worked on by <code>{{order.admin.name}}</code> </p>
              <div class="template-demo">
                <div class="row">
                  <h5>Services Booked</h5>
                  <div class="col-md-4" v-for="service in order.service">
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
                <div class="row">
                  <h5>End Result</h5>
                  <div class="col-md-4">
                    <div class="centerx labelx">
                      <div class="card" style="width: 18rem">
                        <img class="card-img-top" :src="order.image_one" alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="centerx labelx">
                      <div class="card" style="width: 18rem">
                        <img class="card-img-top" :src="order.image_two" alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="centerx labelx">
                      <div class="card" style="width: 18rem">
                        <img class="card-img-top" :src="order.image_three" alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: 'ShowHistory',
  data() {
    return {
      orders: []
    }
  },
  methods: {
    async getUserSpecificHistory() {
      await Api()
        .get("admin/get-user-specific-history/" + this.$route.params.id)
        .then((response) => {
          console.log(response)
          this.orders = response.data.orders
        });
    },
  },
  mounted() {
    this.getUserSpecificHistory()
  }
}
</script>
