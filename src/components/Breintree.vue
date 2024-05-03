<script>
import axios from 'axios';
export default {
    name: 'Braintree',

    data() {
        return {
            clientToken: null
        }

    },
    methods: {
        createDropin() {
            braintree.dropin.create({
                container: document.getElementById('dropin-container'),
                autorization: this.clientToken
                // ...plus remaining configuration
            }, (error, dropinInstance) => {
                console.log(error, dropinInstance)
                // Use 'dropinInstance' here
                // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
            });
        },
        getToken(e) {
            e.preventDefault()
            axios.get('http://127.0.0.1:8000/api/token').then(res => {
                this.clientToken = res.data
            })
        }
    },
    mounted() {
        this.getToken();
    },
}

</script>

<template>
    <form id="payment-form" @click="getToken" method="post">
        <!-- Putting the empty container you plan to pass to
      'braintree.dropin.create' inside a form will make layout and flow
      easier to manage -->
        <div id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
    </form>


</template>

<style lang='scss' scoped>
/* style here */
</style>