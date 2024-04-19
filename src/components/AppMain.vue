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

        <!--buttons-->
        <div class="buttons-container">
            <!-- tipologia ristoranti per ricerca -->
            <a href="" class="button">bottoni</a>
            <!-- per app store e google play -->
            <a class="button"> bottoni </a>
        </div>

        <!--info boxes-->
        <div class="d-flex justify-content-center row gap-2 mt-4">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">I migliori ristoranti della tua città</h5>
                    <p class="card-text">Approfitta di un'ampia varietà di ristoranti per ordinare i tuoi piatti
                        preferiti
                        oppure trovane di nuovi nei dintorni!</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">I migliori ristoranti della tua città</h5>
                    <p class="card-text">Approfitta di un'ampia varietà di ristoranti per ordinare i tuoi piatti
                        preferiti
                        oppure trovane di nuovi nei dintorni!</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">I migliori ristoranti della tua città</h5>
                    <p class="card-text">Approfitta di un'ampia varietà di ristoranti per ordinare i tuoi piatti
                        preferiti
                        oppure trovane di nuovi nei dintorni!</p>
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