<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
    <section class="jumbotron">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fas fa-search"></i></span>
            <input class="form-control" placeholder="cerca il tuo ristorante">
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
}
</style>
