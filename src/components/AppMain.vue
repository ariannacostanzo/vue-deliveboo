<script>
export default {
    name: 'AppMain'
}
</script>

<template>
    <main>

        <!--restaurant types buttons-->
        <div class="py-5">
            <h2 class="text-center">Categorie più richieste</h2>
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

        <!--info boxes-->
        <div class="bg-secondary-subtle py-5">
            <h2 class="text-center">I nostri valori più importanti</h2>

            <div class="d-flex justify-content-center row gap-4 mt-4">
                <!--quality-->
                <div class="card pt-3" style="width: 18rem;">
                    <img src="../assets/quality.jpeg" class="card-img-top" alt="food-quality">
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
                    <img src="../assets/rider.jpeg" class="card-img-top" alt="rider-image">
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
                    <img src="../assets/friends.jpeg" class="card-img-top" alt="friends-eating">
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



        <!--buttons to download the app-->
        <div class="py-5 mt-5 d-flex justify-content-center gap-5">

            <div class="align-self-center">
                <h2 class="text-center">Scarica la nostra app!</h2>
                <div class="buttons-container">
                    <!-- app store -->
                    <a class="button text-decoration-none">
                        <i class="fab fa-app-store"></i>
                        App Store
                    </a>
                    <!-- google play -->
                    <a class="button text-decoration-none">
                        <i class="fab fa-google-play"></i>
                        Google Play
                    </a>
                </div>
            </div>
            <img src="../assets/food-app.jpeg" alt="app">

        </div>


        <!-- foto ???-->
        <!--<div class="food-delivery mt-3"></div>-->


        <div class="bg-secondary-subtle py-5 mt-5">
            <div class="work-with-us container-sm gap-4 mt-0">
                <img src="../assets/work.jpeg" class="card-img-top" alt="work-with-us">
                <div>
                    <h2>Lavora con noi - Ristoratori</h2>
                    <p>Vuoi far crescere il tuo business culinario? Diventa nostro partner! Con la nostra app di food
                        delivery,
                        avrai l'opportunità di raggiungere un vasto pubblico di clienti affamati, garantendo una
                        visibilità
                        senza precedenti
                        per il tuo ristorante. Unisciti a noi per offrire ai clienti la comodità di gustare i tuoi
                        piatti
                        eccezionali
                        direttamente a casa loro. Scegli la crescita, scegli di diventare nostro partner oggi stesso!
                    </p>
                    <button class="partner-button">Diventa Partner</button>
                </div>
            </div>
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