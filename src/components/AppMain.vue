<script>
import Loader from './Loader.vue';
import {store} from '../store.js'

export default {
    name: 'AppMain',
    components: { Loader },

    data() {
        return {
            isLoading: true,
            store

        }
    },
    mounted() {
        const savedStore = localStorage.getItem('store');
        if (savedStore) {
            try {
                // Parse the saved store object from local storage
                const parsedStore = JSON.parse(savedStore);
                // Update each property of the reactive store with the parsed values
                Object.assign(store, parsedStore);
            } catch (error) {
                console.error('Error parsing store data from local storage:', error);
            }
        }
        setTimeout(() => {
            this.isLoading = false;
        }, 1000)
    },
    watch: {
        store: {
            handler(newStore) {
                localStorage.setItem('store', JSON.stringify(newStore));
            },
            deep: true
        }
    }
}
</script>

<template>
    <Loader :isLoading="isLoading" />

    <main class="">



        <!--SVG UPPER WAVE-->
        <div class="background-wave " >
            <svg class="upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff9e6" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <!--info boxes-->
        <div class="bg-warning bg-opacity-10">
            <div class="py-5 container-sm">
                <h2 class="text-center">I nostri valori più importanti</h2>

                <div class="d-flex justify-content-center row gap-5 mt-4">
                    <!--quality-->

                    <article class="my_card">
                        <div class="temporary_text">
                            <img src="../assets/restaurant-quality.png" class="cm-card-img" alt="food-quality">
                        </div>
                        <div class="my_card_content">
                            <span class="my_card_title">Qualità</span>
                            <p class="my_card_description">Abbiamo stretto collaborazioni solo con i migliori ristoranti
                                della
                                zona,
                                garantendo ai nostri utenti un'esperienza gastronomica senza pari. I nostri partner non
                                sono
                                solo locali rinomati,
                                ma sono anche certificati per la loro dedizione alla qualità e all'eccellenza.</p>

                        </div>
                    </article>

                    <!--speed-->

                    <article class="my_card">
                        <div class="temporary_text">
                            <img src="../assets/rider.jpeg" class="cm-card-img" alt="friends-eating">
                        </div>
                        <div class="my_card_content">
                            <span class="my_card_title">Velocità</span>
                            <p class="my_card_description">Con noi, non devi aspettare per soddisfare la tua fame!
                                Grazie
                                alla nostra consegna rapida e puntuale, puoi gustare i tuoi piatti preferiti comodamente
                                a casa tua, senza alcuna attesa. Nulla è più importante della soddisfazione del tuo
                                appetito!</p>

                        </div>
                    </article>

                    <!--new-->
                    <article class="my_card">
                        <div>
                            <img src="../assets/friends.jpeg" class="cm-card-img" alt="friends-eating">
                        </div>
                        <div class="my_card_content">
                            <span class="my_card_title">Novità</span>
                            <p class="my_card_description">Lasciati trasportare in un viaggio senza confini: dalla
                                cucina
                                di casa
                                ai
                                sapori del mondo!
                                Che tu stia sperimentando le delizie esotiche o riscoprendo i gusti familiari,
                                ogni morso è un'esperienza unica, un incontro tra il nuovo e il familiare, tra il
                                presente e il
                                passato.</p>

                        </div>
                    </article>

                </div>
            </div>
        </div>

        <!--SVG LOWER WAVE-->
        <div class="background-wave">
            <svg class="lower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff9e6" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>



        <!--buttons to download the app-->
        <div class="py-5 my-5 container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6">
                    <h2 class="text-center">Scarica la nostra app!</h2>
                    <div class="buttons-container">
                        <!-- app store -->
                        <a href="https://www.apple.com/it/app-store/" target=”_blank”
                            class="btn btn-lg btn-block mb-3 cm-button">
                            <i class="fab fa-app-store"></i>
                            App Store
                        </a>
                        <!-- google play -->
                        <a href="https://play.google.com/" target=”_blank” class="btn btn-lg btn-block mb-3 cm-button">
                            <i class="fab fa-google-play"></i>
                            Google Play
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="../assets/food-app.jpeg" alt="app" class="img-fluid">
                </div>
            </div>
        </div>

        <!--SVG UPPER WAVE-->
        <div class="background-wave">
            <svg class="upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff9e6" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <!--work section-->
        <div class="bg-warning bg-opacity-10 pb-5">
            <h2 class="text-center pb-2">Diventa nostro partner</h2>

            <div class="container">
                <div class="work-card-hover">
                    <div class="work-card-hover__content">
                        <h3 class="work-card-hover__title">
                            Lavora <span>con</span> noi!
                        </h3>
                        <p class="work-card-hover__text">Vuoi far crescere il tuo business culinario? Diventa nostro
                            partner! Con la nostra app di
                            food delivery, avrai l'opportunità di raggiungere un vasto pubblico di clienti affamati,
                            garantendo una visibilità senza precedenti per il tuo ristorante. Unisciti a noi per
                            offrire ai clienti la comodità di gustare i tuoi piatti eccezionali direttamente a casa
                            loro. Scegli la crescita, scegli di diventare nostro partner oggi stesso!</p>
                        <a class="work-card-hover__link">
                            <span>Diventa partner</span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <img src="https://ilfattoalimentare.it/wp-content/uploads/2020/04/cibo-sano-frutta-verdura-cereali-olio-di-oliva-pollo-salmone-uova-aromi-AdobeStock_296379930-scaled.jpeg"
                        alt="work-with-us">
                </div>
            </div>




        </div>

        <!-- work section  -->


    </main>

</template>

<style lang='scss' scoped>
.background-wave {
    padding-top: 100px;
    padding-bottom: 120px;
    width: 100%;
    // background: white;
    position: relative;
}

.upper {
    margin-top: 2rem;
    position: absolute;
    bottom: -7px;
    left: 0;
    z-index: 0;
}

.lower {
    position: absolute;
    top: -3px;
    left: 0;
    transform: rotate(180deg);
}
</style>