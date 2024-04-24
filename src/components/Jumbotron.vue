<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
    <section class="jumbotron">
        <div class="search-bar">
            <div class="card">
                <div class="card-body">
                    <h1 class="title-jumbotron text-center pt-5">Il bello è prenderci gusto</h1>
                    <p class="text-center">Ordina online dai tuoi ristoranti preferiti</p>
                    <div class="input-group justify-content-center">
                        <span class="input-group-text text-black" id="basic-addon1"><i
                                class="fa-solid fas fa-search"></i></span>
                        <input class="form-control" placeholder="cerca il tuo ristorante">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
.jumbotron {
    background-image: url("../assets/jumbotron-image.jpg");
    background-size: cover;
    background-position: center;
    height: 600px;
    opacity: 0.9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);


    // SearchBar
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-control {
        max-width: 500px;
        height: 60px;

    }

    .search-bar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-body {
        min-width: 800px;
        min-height: 300px;

    }

    .title-jumbotron {
        color: #F48C08;
    }
}
</style>
