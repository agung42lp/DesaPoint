<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Bagian navbar ya guys -->
        <nav class="bg-white shadow-lg sticky top-0 z-50 animate-slideDown">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
            <div class="flex items-center space-x-4">
                <div class="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                RW
                </div>
                <div>
                <h1 class="text-xl font-bold text-green-700">RW 05 Si Doi</h1>
                <p class="text-xs text-gray-600">Kelurahan Sejahtera</p>
                </div>
            </div>
            
            <div class="hidden md:flex items-center space-x-6">
                <a href="/" class="text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-green-600 after:scale-x-100 transition-all">Beranda</a>
                <a href="/program" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Program</a>
                <a href="/keuangan" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Keuangan</a>
                <a href="/pengaduan" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Pengaduan</a>
            </div>
            </div>
        </div>
        </nav>

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
            <div class="flex space-x-4">
                <a href="/pengaduan" class="px-6 py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg animate-bounce-slow">
                Ajukan Pengaduan
                </a>
                <a href="/tentang" class="px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transform hover:scale-110 transition-all duration-300 border-2 border-white/50 hover:border-white">
                Tentang Kami
                </a>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script setup>

const isVisible = ref(false)

</script>

<style scoped>



</style>