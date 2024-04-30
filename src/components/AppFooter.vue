<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'AppFooter'
}
</script>

<template>

    <footer class="py-4">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-3 mb-3 mb-md-0">
                    <div class="logo">
                        <img src="../assets/logo-deliveboo.png" alt="Logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-0 mb-3 mb-md-0">
                    <div class="social-icons">
                        <ul class="list-inline mb-0 d-flex justify-content-center justify-content-md-center pt-3">
                            <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i
                                        class="fab fa-facebook"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="https://twitter.com/?lang=it" target="_blank"><i
                                        class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-0 mb-3 mb-md-0">
                    <div class="footer-links">
                        <ul class="list-unstyled mb-0 d-flex justify-content-center justify-content-md-center pt-3">
                            <li><a class="text-decoration-none text-black">FAQ</a></li>
                            <li><a class="text-decoration-none text-black">Supporto</a></li>
                            <li>
                                <RouterLink :to="{ name: 'contact-us' }" class=" text-decoration-none text-black">
                                    Contatti
                                </RouterLink>
                            </li>
                            <li><a class="text-decoration-none text-black">Termini e condizioni</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-0 mb-3 mb-md-0">
                    <div class="store-icons">
                        <ul class="list-inline mb-0 d-flex justify-content-center justify-content-md-center py-3">
                            <li class="list-inline-item"><a href="https://www.apple.com/it/app-store/"
                                    target=”_blank”><i class="fab fa-app-store"></i></a></li>
                            <li class="list-inline-item"><a href="https://play.google.com/store/games?hl=it&gl=US"
                                    target=”_blank”><i class="fab fa-google-play"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center text-md-end">
                    <p class="mb-0 copyright">© 2024 Deliveboo. Tutti i diritti riservati.</p>
                </div>
            </div>
        </div>
    </footer>


</template>

<style lang='scss'></style>