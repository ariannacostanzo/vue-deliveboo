<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <h3 class="text-center"> 404 | Page not found</h3>
        <router-link to="/" class="btn btn-primary mt-3">Torna Indietro</router-link>
    </div>
</template>

<style lang='scss' scoped>
div{
    @media (min-width: 425px) {
        height: 63vh; /* Modifica l'altezza per schermi con larghezza di almeno 425px */
    }
    @media (min-width: 768px) {
        height: 70vh; /* Modifica l'altezza per schermi con larghezza di almeno 768px */
    }
    @media (min-width: 1024px) {
        height: 70vh; /* Modifica l'altezza per schermi con larghezza di almeno 1024px */
    }

    @media (min-width: 1440px) {
        height: 70vh; /* Modifica l'altezza per schermi con larghezza di almeno 1440px */
    }
@media (min-width: 2560px) {
        height: 76vh; /* Modifica l'altezza per schermi con larghezza di almeno 2560px */
    }
  
    overflow-y: hidden;
}
.btn-primary {
    background-color: #faa307;
    border: 1px solid #faa307;
}


</style>