<template>
    <div id="edit-booking">
        Edit Booking
    </div>
</template>

<script>
import Api from '../../../requests/Api'
export default {
    name: 'EditBooking',
    data() {
        return {
            order: {}
        }
    },
    methods: {
        async getAllAdmins() {
            await this.$store.dispatch('admin/getAllAdmins')
                .then((_) => {
                    // console.log(response)
                })
        },
        async getSpecificUserOrder() {
            console.log(this.$route.params.order_id)
            await Api().get('admin/get-user-specific-order/' + this.$route.params.order_id)
                .then((response) => {
                    console.log(response)
                })
        },
    },
    computed: {
        // orders() {
        //     return this.$store.getters['order/getSpecificUserOrder']
        // },
        admins() {
            return this.$store.getters['admin/getAllAdminsGetter']
        }
    },
    async mounted() {
        await this.getAllAdmins()
        await this.getSpecificUserOrder()
    }
}
</script>