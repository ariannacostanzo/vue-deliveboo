<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    name: 'Braintree',

    data() {
        return {
            store,
            clientToken: null,
            errorMessage: null,
            successMessage: null,
        }

    },
    methods: {

        getToken() {
            axios.get('http://localhost:8000/api/token').then(res => {
                this.clientToken = res.data
                this.setupBrainTreeDropIn()
            }).catch(err => console.log(err))
            .then(()=> {})
        },
        setupBrainTreeDropIn() {
            const button = document.querySelector('#submit-button');
            braintree.dropin.create({
                authorization: this.clientToken,
                container: '#dropin-container'
            }, (createErr, instance) => {
                if (createErr) {
                    console.error('Error creating Drop-in UI:', createErr);
                    return;
                }
                // Attach event listener after Drop-in UI instance is created
                button.addEventListener('click', () => {
                    instance.requestPaymentMethod((err, payload) => {
                        if (err) {
                            console.error('Error during payment request:', err);
                            // button.value = payload.nonce;
                            return;
                        }
                        this.sendPayment(payload.nonce);
                    });
                });
            });
        },
        sendPayment(nonce) {
            axios.post('http://localhost:8000/api/get-clientToken', { nonce })
                .then(response => {
                    // console.log('Pagamento elaborato con successo:', response.data);
                    this.successMessage = 'Pagamento elaborato con successo.'
                    store.orderSuccesfull = 'Il tuo ordine è in preparazione...'
                    store.cart = []
                    this.$router.push('/')
                }).catch(error => {
                    // console.error('Errore durante l\'elaborazione del pagamento: ', error);
                    this.errorMessage = 'Errore durante l\'elaborazione del pagamento. Riprova'
                });
        },
        submitPayment() {
            // Non è necessario fare nulla qui, la logica di invio del pagamento è gestita nel metodo sendPayment
        }
    },
    mounted() {
        this.getToken();
        
    },
}

</script>

<template>
    <!-- <form id="payment-form" method="POST">
        <div class="py-12">
            <div id="dropin-container" style="display: flex; justify-content: center; align-items: center;"></div>
            <div style="display: flex; justify-content: center; align-items: center; color: white"> <button
                    id="submit-button" class="cm-button w-75" @click="submitPayment">Invia pagamento</button> </div>
                    <input type="hidden" id="nonce" name="payment_method_nonce">
        </div>
    </form> -->

    <div class="py-12">
        <div id="dropin-container" style="display: flex; justify-content: center; align-items: center;"></div>
        <div style="display: flex; justify-content: center; align-items: center; color: white"> <button
                id="submit-button" class="cm-button w-75" @click="submitPayment">Invia ordine</button> </div>

        <div class="my-5 text-center">
            <div v-if="successMessage" class="success-alert">
                <p class="">{{ successMessage }}</p>
            </div>
            <div v-if="errorMessage" class="fail-alert">
                <p class="">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.success-alert {
    padding: 1rem ;
    border: 2px solid green;
    color: green;
    border-radius: 10px;
    p {
        margin: 0;
    }
}
.fail-alert {
    padding: 1rem ;
    border: 2px solid red;
    color: red;
    border-radius: 10px;

    p {
            margin: 0;
        }
}
</style>