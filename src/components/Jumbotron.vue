<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
    <section class="jumbotron">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fas fa-search"></i></span>
            <input type="text" class="form-control" placeholder="cerca il tuo ristorante" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
    </section>
</template>

<style lang='scss' scoped>
.jumbotron {
    background-image: url("../assets/jumbotron-image.jpg");
    background-size: cover;
    background-position: center;
    height: 200px;
    opacity: 0.9;


    // SearchBar
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
