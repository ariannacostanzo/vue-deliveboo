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
        // createDropin() {
        //     const button = document.querySelector('#submit-button')
        //     braintree.dropin.create({
        //         // selector: #dropin-container,
        //         autorization: this.clientToken
        //     }, (error, dropinInstance) => {
        //         console.log(error)
        //         button.addEventListener('click', () => {
        //             dropinInstance.requestPaymentMethod((err, payload) => {

        //             })
        //         })
        //     });
        // },

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
                            return;
                        }
                        this.sendPayment(payload.nonce);
                    });
                });
            });
        },
        sendPayment(nonce) {
            axios.post('/api/get-clientToken', { nonce })
                .then(response => {
                    console.log('Pagamento elaborato con successo:', response.data);
                    // Aggiorna l'interfaccia utente o esegui altre operazioni di cui hai bisogno
                }).catch(error => {
                    console.error('Errore durante l\'elaborazione del pagamento: ', error);
                    // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
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
    <div class="py-12">
        <div id="dropin-container" style="display: flex; justify-content: center; align-items: center;"></div>
        <div style="display: flex; justify-content: center; align-items: center; color: white"> <button
                id="submit-button" class="cm-button w-75" @click="submitPayment">Invia pagamento</button> </div>
    </div>
</template>

<style lang='scss' scoped>
/* style here */
</style>