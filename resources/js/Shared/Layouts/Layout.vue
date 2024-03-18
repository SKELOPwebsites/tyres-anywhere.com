<template>
    <header class="bg-white">
        <Header />
        <Navbar />
    </header>

    <slot />

    <Footer />

</template>

<script setup>
import Header from "/resources/js/Shared/Main/Header.vue"
import Navbar from "/resources/js/Shared/Main/Navbar.vue"
import Footer from "/resources/js/Shared/Main/Footer.vue"

</script>

<style scoped>

</style>
