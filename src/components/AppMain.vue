<script>
export default {
    name: 'AppMain'
}
</script>

<template>
    <main class="">
        <!--searchbar-->
        <!-- <div class="input-group mb-3 mt-4">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fas fa-search"></i></span>
            <input type="text" class="form-control" placeholder="cerca il tuo ristorante" aria-label="Username"
                aria-describedby="basic-addon1">
        </div> -->

        <!--types buttons-->
        <h2 class="text-center pt-5">Categorie più richieste</h2>
        <div class="buttons-container">
            <a class="button">Pizzeria</a>
            <a class="button">Griglieria</a>
            <a class="button">Hamburger </a>
            <a class="button">Pizzeria</a>
            <a class="button">Cinese</a>
            <a class="button">Fast food </a>
            <a class="button">Kebab </a>
            <a class="button">Indiano </a>
            <a class="button">Poké </a>

        </div>

        <!--buttons-->
        <h2 class="text-center pt-5">Scarica la nostra app!</h2>
        <div class="buttons-container">
            <!-- tipologia ristoranti per ricerca -->
            <a class="button">
                <i class="fab fa-app-store"></i>
                App Store
            </a>
            <!-- per app store e google play -->
            <a class="button">
                <i class="fab fa-google-play"></i>
                Google Play
            </a>

        </div>

        <h2 class="text-center pt-5">I nostri valori più importanti</h2>
        <!--info boxes-->
        <div class="d-flex justify-content-center row gap-4 mt-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/quality.jpeg" class="card-img-top" alt="...">
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

            <div class="card" style="width: 18rem;">
                <img src="../assets/rider.jpeg" class="card-img-top" alt="rider-image">
                <div class="card-body">
                    <h5 class="card-title">Velocità</h5>
                    <p class="card-text">Con noi, la tua fame non aspetta! Grazie alla nostra rapida e puntuale
                        consegna,
                        puoi gustare i tuoi piatti preferiti comodamente a casa tua,
                        senza dover attendere. Nulla è più importante della soddisfazione del tuo appetito!</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/friends.jpeg" class="card-img-top" alt="...">
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
        <div class="food-delivery mt-3">

        </div>
        <div class="work-with-us container-sm">
            <h2>Lavora con noi - Ristoratori</h2>
            <p>Diventa parte del nostro team e unisciti alla nostra rete di ristoranti partner.</p>
            <button class="partner-button">Diventa Partner</button>
        </div>
    </main>

</template>

<style lang='scss' scoped>
.food-delivery {
    background-image: url("../assets/food-delivery.jpg");
    background-size: cover;
    background-position: center;
    height: 300px;
    opacity: 0.9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}
</style>