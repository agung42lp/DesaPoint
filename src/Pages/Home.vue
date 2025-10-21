<!-- resources/js/Pages/Home.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- Navbar with slide down animation -->
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
            <a href="/tentang" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Tentang</a>
            <a href="/program" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Program</a>
            <a href="/statistik" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Statistik</a>
            <a href="/keuangan" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Keuangan</a>
            <a href="/pengaduan" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Pengaduan</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section with floating elements -->
    <section class="relative h-[500px] bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
      <!-- Animated background circles -->
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

    <!-- Quick Stats with staggered animation -->
    <section class="max-w-7xl mx-auto px-4 -mt-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer animate-fadeInUp"
          :style='{ animationDelay: `${index * 0.1}s` }'
          @mouseenter="stat.hover = true"
          @mouseleave="stat.hover = false">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm font-medium transition-colors" :class="{ 'text-green-600': stat.hover }">{{ stat.label }}</p>
              <p class="text-3xl font-bold text-green-700 mt-2 transition-all duration-300" :class="{ 'scale-110': stat.hover }">
                <span v-if="animateNumbers">{{ animatedValues[index] }}</span>
                <span v-else>0</span>
              </p>
            </div>
            <div class="p-4 bg-green-100 rounded-xl transition-all duration-300" :class="{ 'bg-green-600 scale-110 rotate-12': stat.hover }">
              <svg class="w-8 h-8 transition-colors" :class="stat.hover ? 'text-white' : 'text-green-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                <path v-if="index === 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access with ripple effect -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeInUp">Layanan Cepat</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a 
          v-for="(service, index) in quickServices" 
          :key="index"
          :href="service.href" 
          class="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden animate-fadeInUp"
          :style='{ animationDelay: `${(index + 4) * 0.1}s` }'>
          <!-- Ripple effect background -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/10 group-hover:to-green-600/10 transition-all duration-500"></div>
          
          <div class="relative flex items-start space-x-4">
            <div :class='`p-3 rounded-lg ${service.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`'>
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 transform group-hover:translate-x-2">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors">{{ service.desc }}</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>
    </section>

    <!-- Visi Misi Section -->
<section class="max-w-7xl mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">Visi & Misi</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- Text Content - Left Side -->
    <div class="space-y-6 animate-fadeInUp" style="animation-delay: 0.2s">
      <div>
        <h3 class="text-2xl font-bold text-green-700 mb-4 flex items-center">
          <span class="w-2 h-8 bg-green-600 mr-3 rounded"></span>
          Visi
        </h3>
        <p class="text-gray-700 leading-relaxed text-lg">
          Mewujudkan RW 05 Si Doi sebagai lingkungan yang harmonis, sejahtera, dan berdaya saing dengan mengedepankan gotong royong dan transparansi dalam setiap aspek kehidupan bermasyarakat.
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-bold text-green-700 mb-4 flex items-center">
          <span class="w-2 h-8 bg-green-600 mr-3 rounded"></span>
          Misi
        </h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Meningkatkan kualitas pelayanan dan transparansi administrasi warga</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Memberdayakan masyarakat melalui program-program sosial dan ekonomi</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Menciptakan lingkungan yang bersih, aman, dan nyaman untuk semua</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Membangun solidaritas dan kerukunan antar warga melalui kegiatan bersama</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Image Gallery - Right Side -->
    <div class="animate-fadeInUp" style="animation-delay: 0.4s">
      <!-- Main Large Image -->
      <div class="relative overflow-hidden rounded-2xl shadow-2xl mb-4 h-80 bg-gray-200 group">
        <img 
          :src="currentMainImage" 
          alt="Pengurus RW" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 text-white">
          <p class="text-sm font-medium mb-1">Pengurus RW 05</p>
          <h4 class="text-xl font-bold">{{ currentImageTitle }}</h4>
        </div>
      </div>

      <!-- Thumbnail Gallery with Navigation -->
      <div class="relative">
        <div class="overflow-hidden">
          <div 
            class="flex gap-3 transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- First set of 4 -->
            <div class="flex gap-3 min-w-full">
              <div 
                v-for="(img, idx) in galleryImages.slice(0, 4)" 
                :key="idx"
                @click="selectImage(idx)"
                class="flex-1 h-24 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                :class="{ 'ring-4 ring-green-600': selectedImageIndex === idx }">
                <img :src="img.src" :alt="img.title" class="w-full h-full object-cover">
              </div>
            </div>
            
            <!-- Second set of 4 -->
            <div class="flex gap-3 min-w-full">
              <div 
                v-for="(img, idx) in galleryImages.slice(4, 8)" 
                :key="idx + 4"
                @click="selectImage(idx + 4)"
                class="flex-1 h-24 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                :class="{ 'ring-4 ring-green-600': selectedImageIndex === idx + 4 }">
                <img :src="img.src" :alt="img.title" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          :disabled="currentSlide === 0"
          class="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button 
          @click="nextSlide"
          :disabled="currentSlide === 1"
          class="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Slide Indicators -->
        <div class="flex justify-center gap-2 mt-4">
          <button 
            v-for="n in 2" 
            :key="n"
            @click="currentSlide = n - 1"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentSlide === n - 1 ? 'bg-green-600 w-8' : 'bg-gray-300'">
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Latest News with zoom effect -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center mb-8 animate-fadeInUp" style="animation-delay: 0.7s">
          <h2 class="text-3xl font-bold text-gray-900">Berita & Pengumuman</h2>
          <a href="/berita" class="text-green-600 hover:text-green-700 font-medium group flex items-center">
            <span class="group-hover:mr-2 transition-all">Lihat Semua</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(news, index) in latestNews" 
            :key="news.id" 
            class="group cursor-pointer animate-fadeInUp"
            :style='{ animationDelay: `${(index + 7) * 0.1}s` }'>
            <div class="relative overflow-hidden rounded-xl mb-4 h-48 bg-gray-200 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <img :src="news.image" :alt="news.title" class="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full transform group-hover:scale-110 transition-transform">
                {{ news.category }}
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-2 group-hover:text-green-600 transition-colors">{{ news.date }}</p>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2 transform group-hover:translate-x-2 duration-300">
              {{ news.title }}
            </h3>
            <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{{ news.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer with wave animation -->
    <footer class="bg-gray-900 text-white py-12 relative overflow-hidden">
      <!-- Animated wave -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 animate-wave"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold mb-4">RW 05 Si Doi</h3>
            <p class="text-gray-400 text-sm">Kelurahan Sejahtera, Kecamatan Bahagia, Kota Harmonis</p>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <h4 class="font-bold mb-4">Menu</h4>
            <div class="space-y-2">
              <a href="/" class="block text-gray-400 hover:text-white text-sm hover:translate-x-2 transition-all">Beranda</a>
              <a href="/tentang" class="block text-gray-400 hover:text-white text-sm hover:translate-x-2 transition-all">Tentang</a>
              <a href="/program" class="block text-gray-400 hover:text-white text-sm hover:translate-x-2 transition-all">Program</a>
            </div>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <h4 class="font-bold mb-4">Kontak</h4>
            <div class="space-y-2 text-gray-400 text-sm">
              <p class="hover:text-white transition-colors cursor-pointer">📞 +62 812-3456-7890</p>
              <p class="hover:text-white transition-colors cursor-pointer">✉ rw05@email.com</p>
              <p class="hover:text-white transition-colors cursor-pointer">📍 Jl. Sejahtera No. 123</p>
            </div>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <h4 class="font-bold mb-4">Ikuti Kami</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                FB
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-125 hover:-rotate-12">
                IG
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 RW 05 Si Doi. All rights reserved.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isVisible = ref(false)
const animateNumbers = ref(false)
const animatedValues = ref([0, 0, 0, 0])

const stats = ref([
  { label: 'Total Penduduk', value: 2543, hover: false },
  { label: 'Jumlah RT', value: 12, hover: false },
  { label: 'Program Aktif', value: 8, hover: false },
  { label: 'Pengaduan Selesai', value: 156, hover: false }
])

const quickServices = ref([
  { 
    title: 'Laporan Keuangan', 
    desc: 'Transparansi keuangan RW per bulan',
    color: 'bg-blue-500',
    href: '/keuangan'
  },
  { 
    title: 'Ajukan Pengaduan', 
    desc: 'Sampaikan keluhan atau aspirasi Anda',
    color: 'bg-red-500',
    href: '/pengaduan'
  },
  { 
    title: 'Program RW', 
    desc: 'Jadwal Ronda, Jadwal Bersih-Bersih Bersama, Bank Sampah, Bakti Sosial',
    color: 'bg-green-500',
    href: '/program'
  }
])

const latestNews = ref([
  {
    id: 1,
    title: 'Gotong Royong Bersih Lingkungan',
    excerpt: 'Kegiatan bersih-bersih lingkungan dilaksanakan setiap Minggu pagi...',
    date: '15 Okt 2024',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400'
  },
  {
    id: 2,
    title: 'Bantuan Sosial untuk 25 Keluarga',
    excerpt: 'RW 05 menyalurkan bantuan sembako kepada warga yang membutuhkan...',
    date: '12 Okt 2024',
    category: 'Sosial',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400'
  },
  {
    id: 3,
    title: 'Jadwal Ronda Bulan November',
    excerpt: 'Pengumuman jadwal pos ronda untuk bulan November 2024...',
    date: '10 Okt 2024',
    category: 'Pengumuman',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400'
  }
])

const currentSlide = ref(0)
const selectedImageIndex = ref(0)

const galleryImages = ref([
  { 
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', 
    title: 'Ketua RW' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', 
    title: 'Wakil Ketua' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', 
    title: 'Sekretaris' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 
    title: 'Bendahara' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', 
    title: 'Seksi Keamanan' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', 
    title: 'Seksi Kebersihan' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400', 
    title: 'Seksi Sosial' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400', 
    title: 'Seksi Pembangunan' 
  }
])

const currentMainImage = computed(() => galleryImages.value[selectedImageIndex.value].src)
const currentImageTitle = computed(() => galleryImages.value[selectedImageIndex.value].title)

const selectImage = (index) => {
  selectedImageIndex.value = index
}

const nextSlide = () => {
  if (currentSlide.value < 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

onMounted(() => {
  isVisible.value = true
  
  // Animate numbers
  setTimeout(() => {
    animateNumbers.value = true
    stats.value.forEach((stat, idx) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          animatedValues.value[idx] = stat.value
          clearInterval(timer)
        } else {
          animatedValues.value[idx] = Math.floor(current)
        }
      }, 30)
    })
  }, 500)
})
</script>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(20px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(15px) translateX(-15px);
  }
  66% {
    transform: translateY(-10px) translateX(10px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.1);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-slideDown {
  animation: slideDown 0.8s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-wave {
  animation: wave 3s linear infinite;
}
</style>