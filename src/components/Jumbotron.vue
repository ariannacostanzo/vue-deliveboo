<script>
import axios from 'axios';

export default {
    name: 'Jumbotron',
    // data() {
    //     return {
    //         searchTerm: '',
    //         restaurants: [],
    //         types: []
    //     };
    // },
    // methods: {
    //     async searchRestaurants() {
    //         if (this.searchTerm.trim() !== '') {
    //             try {
    //                 const response = await axios.get('http://localhost:8000/api/restaurants');
    //                 this.restaurants = response.data.filter(restaurant =>
    //                     restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //                     restaurant.types.some(type => type.label.toLowerCase().includes(this.searchTerm.toLowerCase()))
    //                 );
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         } else {
    //             // Se la barra di ricerca è vuota, imposta vuoto
    //             this.restaurants = [];
    //         }
    //     },
    //     async fetchTypes() {
    //         try {
    //             const response = await axios.get('http://localhost:8000/api/types');
    //             this.types = response.data;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // },
    // created() {
    //     this.fetchTypes();
    // }
}
</script>


<template>
    <section class="jumbotron">

    </section>

    <!-- sezione visuale filtro ricerca -->
    <section id="search-section">
        <div class="card-container">
            <div class="card" v-for="restaurant in restaurants" :key="restaurant.id">
                <img :src="restaurant.image" class="card-img-top" alt="Restaurant Image">
                <div class="card-body">
                    <h5 class="card-title">{{ restaurant.name }}</h5>
                    <p class="card-text">{{ restaurant.address }}</p>
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
    height: 300px;
    opacity: 0.9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);


    // // SearchBar
    // display: flex;
    // flex-direction: column;
    // justify-content: center;

    // .form-control {
    //     max-width: 500px;
    //     height: 60px;

    // }

    // .search-bar {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    // }

    // .card-body {
    //     min-width: 800px;
    //     min-height: 300px;

    // }

    // .title-jumbotron {
    //     color: #F48C08;
    // }

    // li {
    //     list-style: none;
    // }
}
</style>
