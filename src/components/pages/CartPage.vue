<script>
import Jumbotron from '../Jumbotron.vue';
  export default {
    name: 'CartPage',
    components: {Jumbotron}
  }
</script>

<template>
    <Jumbotron/>
    <div class="container my-5 d-md-flex justify-content-between gap-5">
        <div class="left-content">

            <!-- riepilogo piatti -->
            <section id="dishes">
                <h2>Il tuo ordine</h2>
                <p>x prodotto da <strong>Nome Ristorante</strong></p>

                <!-- list item  -->
                <div class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option"><i class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">1</span>
                        <span class="dish-option"><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">1x</strong> nome Piatto </span>
                        <span class="dish-price">6,40€</span>
                    </div>
                </div>
                <div class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option"><i class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">1</span>
                        <span class="dish-option"><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">1x</strong> nome Piatto </span>
                        <span class="dish-price">6,40€</span>
                    </div>
                </div>
                <div class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option"><i class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">1</span>
                        <span class="dish-option"><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">1x</strong> nome Piatto </span>
                        <span class="dish-price">6,40€</span>
                    </div>
                </div>
                <div class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option"><i class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">1</span>
                        <span class="dish-option"><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">1x</strong> nome Piatto </span>
                        <span class="dish-price">6,40€</span>
                    </div>
                </div>
                <div class="dishes-list-item d-lg-flex gap-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between gap-lg-3 mb-2">
                        <span class="dish-option"><i class="fa-solid fa-minus"></i></span>
                        <span class="d-none d-lg-inline">1</span>
                        <span class="dish-option"><i class="fa-solid fa-plus"></i></span>
                    </div>
                    <div class="d-flex  justify-content-between w-100">
                        <span class="dish-info mb-2"><strong class="d-lg-none">1x</strong> nome Piatto </span>
                        <span class="dish-price">6,40€</span>
                    </div>
                </div>

               

            </section>


        </div>

        <form class="right-content">

            <!-- Dettagli consegna  -->
            <section id="delivery">
                <h2>Dettagli di consegna</h2>
                <h5 class="mb-5">Inserisci i tuoi dati</h5>
                <div class="row row-cols-1 row-cols-lg-2 justify-content-between align-items-baseline">
                    <div class="cm-input-group col">
                        <label for="name">Nome</label>
                        <input type="text" class="cm-input" id="name" name="customer_name" required></input>
                    </div>
                    <div class="cm-input-group col">
                        <label for="surname">Cognome</label>
                        <input type="text" class="cm-input" id="surname" name="customer_surname" required></input>
                    </div>
                    <div class="cm-input-group col">
                        <label for="address">Indirizzo</label>
                        <input type="text" class="cm-input" id="address" placeholder="via Roma 15"
                            name="customer_address" required></input>
                    </div>
                    <div class="cm-input-group col">
                        <label for="email">Email</label>
                        <input type="email" class="cm-input" id="email" name="customer_email" required></input>
                    </div>
                    <div class="cm-input-group col">
                        <label for="phone_number">Numero di telefono</label>
                        <input type="text" class="cm-input" id="phone_number" placeholder="+39315224451"
                            name="customer_phone_number" required></input>
                    </div>
                </div>


            </section>

            <!-- riepilogo  -->
            <section id="overview">
                <h2>Riepilogo</h2>
                <div class="d-flex align-items-center justify-content-between ">
                    <p>Prodotto</p>
                    <p>14,10 €</p>
                </div>
                <div class="d-flex align-items-center justify-content-between ">
                    <p>Consegna</p>
                    <p><span class="discount">2,99€</span><span class="gratis">GRATIS</span></p>
                </div>
                <hr>
                <div class="d-flex align-items-center justify-content-between">
                    <p><strong>TOTALE</strong></p>
                    <p><strong>14,10 €</strong></p>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
                    <!-- <button class="cm-button">Conferma l'ordine</button> -->
                    <button class="cm-button w-75">Vai al pagamento</button>
                </div>
            </section>
        </form>
    </div>
</template>

<style lang='scss' scoped>
@use '../../assets/scss/_vars.scss' as *;



section {
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 1rem;
    }
}

hr {
    color: black;
    opacity: .5;
}

.left-content {
    flex-basis: 40%;
}

.right-content {
    flex-basis: 40%;
}


.dish-option {
    padding: 6px;
    background-color: #f48d06ad;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
}

.discount {
    font-size: 13px;
    text-decoration: line-through;
}


.gratis {
    background-color: $princeton-orange;
    padding: 2px 4px;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 5px;
}

//inputs 

.cm-input {
    border: 1px solid rgba(128, 128, 128, 0.349);
    border-radius: 40px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
    overflow: hidden;
    padding: 10px 20px;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    margin-top: .2rem;

}



</style>