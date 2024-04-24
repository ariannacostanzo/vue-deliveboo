<script>
export default {
    name: 'AppMain',
    data() {
        return
    }
}
</script>

<template>
    <main class="">

        <!--restaurant types buttons-->
        <div class="container-sm">
            <div class="types-section row py-5">
                <div>
                    <h2 class="text-center mb-0">Categorie più richieste</h2>
                </div>
                <div class="buttons-container">
                    <a class="button text-decoration-none">Pizzeria</a>
                    <a class="button text-decoration-none">Griglieria</a>
                    <a class="button text-decoration-none">Hamburger </a>
                    <a class="button text-decoration-none">Sushi</a>
                    <a class="button text-decoration-none">Cinese</a>
                    <a class="button text-decoration-none">Italiano</a>
                    <a class="button text-decoration-none">Fast food </a>
                    <a class="button text-decoration-none">Kebab </a>
                    <a class="button text-decoration-none">Indiano </a>
                    <a class="button text-decoration-none">Poké </a>
                </div>
            </div>
        </div>

        <!--SVG UPPER WAVE-->
        <div class="background-wave">
            <svg class="upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e3e5" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <!--info boxes-->
        <div class="bg-secondary-subtle">
            <div class="py-5 container-sm">
                <h2 class="text-center">I nostri valori più importanti</h2>

                <div class="d-flex justify-content-center row gap-5 mt-4">
                    <!--quality-->
                    <div class="card pt-3" style="width: 18rem;">
                        <img src="../assets/restaurant-quality.png" class="card-img-top" alt="food-quality">
                        <div class="card-body">
                            <h5 class="card-title">Qualità</h5>
                            <p class="card-text">Abbiamo stretto collaborazioni solo con i migliori ristoranti della
                                zona,
                                garantendo ai nostri utenti un'esperienza gastronomica senza pari. I nostri partner non
                                sono
                                solo locali rinomati,
                                ma sono anche certificati per la loro dedizione alla qualità e all'eccellenza.</p>
                        </div>
                    </div>

                    <!--speed-->
                    <div class="card pt-3" style="width: 18rem;">
                        <img src="../assets/rider.jpeg" class="card-img-top img-fluid" alt="rider-image">
                        <div class="card-body">
                            <h5 class="card-title">Velocità</h5>
                            <p class="card-text">Con noi, la tua fame non aspetta! Grazie alla nostra rapida e puntuale
                                consegna,
                                puoi gustare i tuoi piatti preferiti comodamente a casa tua,
                                senza dover attendere. Nulla è più importante della soddisfazione del tuo appetito!</p>
                        </div>
                    </div>

                    <!--new-->
                    <div class="card pt-3" style="width: 18rem;">
                        <img src="../assets/friends.jpeg" class="card-img-top img-fluid" alt="friends-eating">
                        <div class="card-body">
                            <h5 class="card-title">Novità</h5>
                            <p class="card-text">Lasciati trasportare in un viaggio senza confini: dalla cucina di casa
                                ai
                                sapori del mondo!
                                Che tu stia sperimentando le delizie esotiche o riscoprendo i gusti familiari,
                                ogni morso è un'esperienza unica, un incontro tra il nuovo e il familiare, tra il
                                presente e il
                                passato.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--SVG LOWER WAVE-->
        <div class="background-wave">
            <svg class="lower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e3e5" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
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
                        <a href="#" class="btn btn-lg btn-block mb-3 button">
                            <i class="fab fa-app-store"></i>
                            App Store
                        </a>
                        <!-- google play -->
                        <a href="#" class="btn btn-lg btn-block mb-3 button">
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
                <path fill="#e2e3e5" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <!--work section-->
        <div class="bg-secondary-subtle pb-5">
            <h2 class="text-center pb-2">Diventa nostro partner</h2>


            <div class="work-with-us container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="../assets/work.jpeg" class="img-fluid" alt="work-with-us">
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <h2>Lavora con noi</h2>
                            <p>Vuoi far crescere il tuo business culinario? Diventa nostro partner! Con la nostra app di
                                food delivery, avrai l'opportunità di raggiungere un vasto pubblico di clienti affamati,
                                garantendo una visibilità senza precedenti per il tuo ristorante. Unisciti a noi per
                                offrire ai clienti la comodità di gustare i tuoi piatti eccezionali direttamente a casa
                                loro. Scegli la crescita, scegli di diventare nostro partner oggi stesso!
                            </p>
                            <button class="btn button">Diventa Partner</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--SVG LOWER WAVE-->
        <div class="background-wave">
            <svg class="lower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e3e5" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,
                304C384,299,480,277,576,245.3C672,213,768,171,864,170.7C960,171,
                1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,
                320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

        </div>


    </main>

</template>

<style lang='scss' scoped>
.background-wave {
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    background: white;
    position: relative;
}

.upper {
    position: absolute;
    bottom: 0;
    left: 0;
}

.lower {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
}
</style>