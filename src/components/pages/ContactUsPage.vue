<script>
import Jumbotron from '../Jumbotron.vue';
export default {
    name: 'ContactUsPage',
    components: {Jumbotron}
}
</script>

<template>
    <Jumbotron/>
    <h1 class="text-center mt-5">Contattaci</h1>
    <div class="d-flex flex-column align-items-center justify-content-center container">
        <p class="my-5 text-center"><strong>Per altre informazioni potete contattarci tramite email o direttamente parlare con un nostro operatore.</strong></p>
        <span><strong>Email:</strong> clientsupport@delivebool.com</span>
        <span><strong>Telefono:</strong> 3904456781</span>
    </div>
</template>

<style lang='scss' scoped>
p{
    font-size: 20px;
}
span {
    font-size: 20px;
}
div{
    @media (min-width: 425px) {
        height: 36vh; /* Modifica l'altezza per schermi con larghezza di almeno 425px */
    }
    @media (min-width: 768px) {
        height: 41vh; /* Modifica l'altezza per schermi con larghezza di almeno 768px */
    }
    @media (min-width: 1024px) {
        height: 41vh; /* Modifica l'altezza per schermi con larghezza di almeno 1024px */
    }

    @media (min-width: 1440px) {
        height: 41vh; /* Modifica l'altezza per schermi con larghezza di almeno 1440px */
    }
@media (min-width: 2560px) {
        height: 52vh; /* Modifica l'altezza per schermi con larghezza di almeno 2560px */
    }
  
    overflow-y: hidden;
}
</style>