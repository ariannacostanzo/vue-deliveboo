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
            customer_info: {customer_name: '', customer_surname: '', customer_address: '', customer_email: '', customer_phone: '' },
            order_dishes: [],
            errorBag: {name_error: '', surname_error: '', address_error: '', email_error: '', phone_error: ''}
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
                    this.collectOrderData();
                    store.orderSuccesfull = 'Il tuo ordine è in preparazione...'
                    store.cart = []
                    this.$router.push('/')
                }).catch(error => {
                    // console.error('Errore durante l\'elaborazione del pagamento: ', error);
                    this.errorMessage = 'Errore durante l\'elaborazione del pagamento. Riprova'
                });
        },
        submitPayment() {
            this.validationOrderFields();
        },
        collectOrderData() {
            //! validazione 
        },
        validationOrderFields() {
            if(this.customer_info.customer_name === '') {
                this.errorBag.name_error = 'Inserisci il tuo nome'
                return
            }
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
    <!-- Dettagli consegna  -->
    <section id="delivery">
        <h2>Dettagli di consegna</h2>
        <h5 class="mb-5">Inserisci i tuoi dati</h5>
        <div class="row row-cols-1 row-cols-lg-2 justify-content-between align-items-baseline">
            <div class="cm-input-group col">
                <label for="name">Nome</label>
                <input type="text" class="cm-input" id="name" name="customer_name" required
                    v-model="customer_info.customer_name"></input>
                <p v-if="errorBag.name_error" class="form-errors">{{ errorBag.name_error }}</p>
            </div>
            <div class="cm-input-group col">
                <label for="surname">Cognome</label>
                <input type="text" class="cm-input" id="surname" name="customer_surname" required
                    v-model="customer_info.customer_surname"></input>
                <p v-if="errorBag.surname_error">{{ errorBag.surname_error }}</p>
            </div>
            <div class="cm-input-group col">
                <label for="address">Indirizzo</label>
                <input type="text" class="cm-input" id="address" placeholder="via Roma 15" name="customer_address"
                    required v-model="customer_info.customer_address"></input>
                <p v-if="errorBag.address_error">{{ errorBag.address_error }}</p>
            </div>
            <div class="cm-input-group col">
                <label for="city">Città</label>
                <input type="text" class="cm-input" id="city" value="Lamezia Terme, CZ 88046" disabled
                    name="customer_address"></input>
            </div>
            <div class="cm-input-group col">
                <label for="email">Email</label>
                <input type="email" class="cm-input" id="email" name="customer_email" required
                    v-model="customer_info.customer_email"></input>
                <p v-if="errorBag.email_error">{{ errorBag.email_error }}</p>
            </div>
            <div class="cm-input-group col">
                <label for="phone_number">Numero di telefono</label>
                <input type="text" class="cm-input" id="phone_number" placeholder="+39315224451"
                    name="customer_phone_number" required v-model="customer_info.customer_phone"></input>
                <p v-if="errorBag.phone_error">{{ errorBag.phone_error }}</p>
            </div>
        </div>

    </section>

    <section id="payment">
        <h2>Metodo di pagamento</h2>
        <div class="py-12">
            <div id="dropin-container" @click="errorMessage = null"
                style="display: flex; justify-content: center; align-items: center;"></div>
            <div style="display: flex; justify-content: center; align-items: center; color: white"> <button
                    id="submit-button" class="cm-button w-75" @click="submitPayment">Invia ordine</button> </div>

            <div class="my-5 text-center">
                <div v-if="successMessage" class="cm-alert success">
                    <p class="">{{ successMessage }}</p>
                </div>
                <div v-if="errorMessage" class="cm-alert fail">
                    <p class="">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
.cm-alert {
    padding: 1rem;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
    p {
        margin: 0;
    }

    &.success {
        border-color: green;
        color: green;
    }

    &.fail {
        border-color: red;
        color: red;
    }
}

.form-errors {
    color: red;
    font-size: 14px;
    padding-left: 15px;
}
// .success-alert {
//     padding: 1rem ;
//     border: 2px solid green;
//     color: green;
//     border-radius: 10px;
//     p {
//         margin: 0;
//     }
// }
// .fail-alert {
//     padding: 1rem ;
//     border: 2px solid red;
//     color: red;
//     border-radius: 10px;

//     p {
//             margin: 0;
//         }
// }

section {
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 1rem;
    }
}

//inputs 

.cm-input {
    border: 1px solid rgba(128, 128, 128, 0.349);
    border-radius: 40px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
    overflow: hidden;
    padding: 10px 20px;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    margin-top: .2rem;

}
</style>