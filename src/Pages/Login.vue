<template>
    <div class="min-h-screen bg-gray-50">
         <!-- Bagian hero ya guys-->
        <section class="relative h-[500px] bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
        <div class="absolute inset-0">
            <div class="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div class="text-white" :class="{ 'animate-fadeInUp': isVisible }">
            <h1 class="text-5xl font-extrabold mb-4">Selamat Datang di RW 05</h1>
            <p class="text-xl mb-8 text-green-100">Bersama Membangun Lingkungan yang Harmonis dan Sejahtera</p>
            </div>
        </div>
        </section>
    </div>
</template>

<script setup>

const isVisible = ref(false)

</script>