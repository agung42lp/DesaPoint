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
            <router-link to="/" class="text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-green-600 after:scale-x-100 transition-all">Beranda</router-link>
            <router-link to="/program" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Program</router-link>
            <router-link to="/keuangan" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Keuangan</router-link>
            <router-link to="/form" class="text-gray-700 hover:text-green-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all">Pengaduan</router-link>
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
            <router-link to="/form" class="px-6 py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg animate-bounce-slow">
              Ajukan Pengaduan
            </router-link>
            <router-link to="/tentang" class="px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transform hover:scale-110 transition-all duration-300 border-2 border-white/50 hover:border-white">
              Tentang Kami
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Bagian stat ya guys-->
    <section class="max-w-7xl mx-auto px-4 -mt-16 mb-8 scroll-animate">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Stat card pertama dengan donut ya guys-->
        <div 
          class="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform transition-all duration-500 cursor-pointer animate-fadeInUp relative overflow-hidden group"
          style="animation-delay: 0s"
          @mouseenter="stats[0].hover = true"
          @mouseleave="stats[0].hover = false">

          <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative">
            <p class="text-gray-600 text-sm font-medium transition-colors mb-4" :class="{ 'text-green-600': stats[0].hover }">
              {{ stats[0].label }}
            </p>
            
            <!-- Container untuk donut dan legend ya guys-->
            <div class="flex items-center justify-between gap-4">
              <!-- Donut ya guys -->
              <div class="relative w-24 h-24 flex-shrink-0 transform transition-all duration-500" 
                  :class="{ 'scale-125': stats[0].hover }">
                <svg class="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <!-- Lingkaran di bg guys -->
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" stroke-width="12"/>
                  
                  <!-- Bagian cewek guys -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#86efac" 
                    stroke-width="12"
                    :stroke-dasharray="`${animateChart ? chartFemalePercentage * 2.51 : 0} 251`"
                    stroke-dashoffset="0"
                    stroke-linecap="round"
                    class="transition-all duration-1000 ease-out"
                    :class="{ 'stroke-[14]': stats[0].hover }"/>
                  
                  <!-- Bagian cowok guys -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#16a34a" 
                    stroke-width="12"
                    :stroke-dasharray="`${animateChart ? chartMalePercentage * 2.51 : 0} 251`"
                    :stroke-dashoffset="`-${animateChart ? chartFemalePercentage * 2.51 : 0}`"
                    stroke-linecap="round"
                    class="transition-all duration-1000 ease-out"
                    :class="{ 'stroke-[14]': stats[0].hover }"/>
                </svg>
                
                <!-- Angka di tengah donut guys -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-700 transition-all duration-300" 
                        :class="{ 'scale-110': stats[0].hover }">
                    <span v-if="animateNumbers">{{ animatedValues[0] }}</span>
                    <span v-else>0</span>
                  </span>
                </div>
              </div>
              
              <!-- Legend ya guys -->
              <div class="space-y-2 flex-1">
                <div class="flex items-center gap-2 transform transition-all duration-300" 
                    :class="{ 'translate-x-1': stats[0].hover }">
                  <div class="w-3 h-3 rounded-full bg-green-600 transition-transform duration-500"
                      :class="{ 'scale-125': animateChart }"></div>
                  <div class="flex-1">
                    <p class="text-xs text-gray-600">Laki-laki</p>
                    <p class="text-sm font-bold text-gray-800">
                      <span v-if="animateNumbers">{{ genderData.male }}</span>
                      <span v-else>0</span>
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2 transform transition-all duration-300" 
                    :class="{ 'translate-x-1': stats[0].hover }">
                  <div class="w-3 h-3 rounded-full bg-green-300 transition-transform duration-500"
                      :class="{ 'scale-125': animateChart }"></div>
                  <div class="flex-1">
                    <p class="text-xs text-gray-600">Perempuan</p>
                    <p class="text-sm font-bold text-gray-800">
                      <span v-if="animateNumbers">{{ genderData.female }}</span>
                      <span v-else>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stat cards yang lain guys -->
        <div 
          v-for="(stat, index) in stats.slice(1)" 
          :key="index + 1"
          class="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform transition-all duration-500 cursor-pointer animate-fadeInUp hover:scale-105 hover:z-10"
          :style='{ animationDelay: `${(index + 1) * 0.1}s` }'
          @mouseenter="stat.hover = true"
          @mouseleave="stat.hover = false">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-sm font-medium transition-colors" :class="{ 'text-green-600': stat.hover }">
                {{ stat.label }}
              </p>
              <p class="text-3xl font-bold text-green-700 mt-2 transition-all duration-300" :class="{ 'scale-110': stat.hover }">
                <span v-if="animateNumbers">{{ animatedValues[index + 1] }}</span>
                <span v-else>0</span>
              </p>
            </div>
            <div class="p-4 bg-green-100 rounded-xl transition-all duration-300" :class="{ 'bg-green-600 scale-110 rotate-12': stat.hover }">
              <svg class="w-8 h-8 transition-colors" :class="stat.hover ? 'text-white' : 'text-green-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bagian layanan cepat ya guys -->
    <section class="max-w-7xl mx-auto px-4 py-16 mt-8 scroll-animate">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeInUp">Layanan Cepat</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a 
          v-for="(service, index) in quickServices" 
          :key="index"
          :href="service.href" 
          class="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden animate-fadeInUp"
          :style='{ animationDelay: `${(index + 4) * 0.1}s` }'>
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

    <!-- Bagian visi misi ya guys -->
    <section class="max-w-7xl mx-auto px-4 py-16 mt-8 scroll-animate">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">Visi & Misi</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

        <div class="animate-fadeInUp" style="animation-delay: 0.4s">
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

          <div class="relative">
            <div class="overflow-hidden">
              <div 
                class="flex gap-3 transition-transform duration-500 ease-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
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

    <!-- Bagian berita ya guys -->
    <section class="bg-white py-16 scroll-animate">
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

    <!-- Bagian stat baksos guys -->
    <section class="max-w-5xl mx-auto px-4 mt-16 scroll-animate">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeInUp">Program Bakti Sosial</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(stat, index) in stats2" 
          :key="index"
          class="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer animate-fadeInUp"
          :style='{ animationDelay: `${index * 0.1}s` }'
          @mouseenter="stat.hover = true"
          @mouseleave="stat.hover = false">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-lg font-medium transition-colors" :class="{ 'text-green-600': stat.hover }">{{ stat.label }}</p>
              <p class="text-5xl font-bold text-green-700 mt-4 transition-all duration-300" :class="{ 'scale-110': stat.hover }">
                <span v-if="animateNumbers2">{{ animatedValues2[index] }}</span>
                <span v-else>0</span>
              </p>
            </div>
            <div class="p-6 bg-green-100 rounded-xl transition-all duration-300" :class="{ 'bg-green-600 scale-110 rotate-12': stat.hover }">
              <svg class="w-12 h-12 transition-colors" :class="stat.hover ? 'text-white' : 'text-green-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bagian tabel baksos ya guys-->
    <section class="max-w-5xl mx-auto px-4 mt-12 mb-16 scroll-animate">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <h2 class="text-2xl font-bold text-white">Riwayat Bantuan Terkini</h2>
          <p class="text-green-100 mt-1">Data penerima bantuan terbaru</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50 border-b-2 border-green-200">
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-16">No</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tgl Dibantu</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(item, index) in tableData" 
                :key="index"
                class="border-b border-gray-100 hover:bg-green-50 transition-all duration-300 cursor-pointer transform hover:scale-[1.01]"
                :class="{ 'animate-fadeInUp': true }"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <td class="px-6 py-5 text-gray-700 font-medium">{{ item.no }}</td>
                <td class="px-6 py-5">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-700 font-semibold">{{ item.nama.charAt(0) }}</span>
                    </div>
                    <span class="text-gray-800 font-medium">{{ item.nama }}</span>
                  </div>
                </td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ item.tanggal }}
                  </span>
                </td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm"
                    :class="item.keterangan">
                    {{ item.keterangan }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p class="text-sm text-gray-600">Menampilkan {{ tableData.length }} data terbaru</p>
        </div>
      </div>
    </section>

    <!-- Bagian Program Kebersihan -->
    <section class="max-w-4xl mx-auto px-4 py-16 mt-8 scroll-animate">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeInUp">Program Kebersihan</h2>
      
      <div class="relative">
        <!-- Navigation Arrows -->
        <button 
          @click="prevCleaningSlide"
          :disabled="currentCleaningSlide === 0"
          class="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Card Container -->
        <div class="overflow-hidden rounded-2xl shadow-xl">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentCleaningSlide * 100}%)` }">
            
            <div 
              v-for="(event, index) in cleaningEvents" 
              :key="index"
              class="min-w-full">
              
              <!-- Foto -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="event.image" 
                  :alt="event.title" 
                  class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                
                <!-- Label -->
                <div class="absolute top-4 left-4">
                  <span class="text-white/90 text-sm font-medium">{{ event.label }}</span>
                </div>
              </div>

              <!-- Info Card -->
              <div class="bg-white p-6">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-green-700 mb-4">{{ event.title }}</h3>
                    
                    <div class="space-y-2">
                      <div>
                        <p class="text-gray-600 text-sm mb-1">Kegiatan Dilaksanakan pada:</p>
                        <p class="text-gray-900 font-semibold">{{ event.date }}</p>
                        <p class="text-gray-700 text-sm">{{ event.time }}</p>
                      </div>
                      
                      <div>
                        <p class="text-gray-600 text-sm mb-1">Lokasi:</p>
                        <p class="text-gray-900 font-semibold">{{ event.location }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Status Badge -->
                  <div class="ml-6">
                    <div 
                      v-if="event.status === 'thisweek'"
                      class="px-4 py-2 bg-red-500 text-white rounded-lg font-bold text-sm shadow-md transform rotate-3">
                      Minggu Ini
                    </div>
                    <div 
                      v-else-if="event.status === 'completed'"
                      class="px-4 py-2 bg-green-500 text-white rounded-lg font-bold text-sm shadow-md flex items-center gap-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Selesai
                    </div>
                    <div 
                      v-else-if="event.status === 'upcoming'"
                      class="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold text-sm shadow-md">
                      Akan Datang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          @click="nextCleaningSlide"
          :disabled="currentCleaningSlide === cleaningEvents.length - 1"
          class="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-6">
          <button 
            v-for="(event, idx) in cleaningEvents" 
            :key="idx"
            @click="currentCleaningSlide = idx"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentCleaningSlide === idx ? 'bg-green-600 w-8' : 'bg-gray-300'">
          </button>
        </div>
      </div>
    </section>

    <!-- Bagian stat bank sampah guys -->
    <section class="max-w-5xl mx-auto px-4 mt-16 scroll-animate">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeInUp">Program Bank Sampah</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(stat, index) in stats3" 
          :key="index"
          class="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer animate-fadeInUp"
          :style='{ animationDelay: `${index * 0.1}s` }'
          @mouseenter="stat.hover = true"
          @mouseleave="stat.hover = false">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-600 text-lg font-medium transition-colors" :class="{ 'text-green-600': stat.hover }">{{ stat.label }}</p>
              <p class="text-5xl font-bold text-green-700 mt-4 transition-all duration-300" :class="{ 'scale-110': stat.hover }">
                <span v-if="animateNumbers3">{{ animatedValues3[index] }}</span>
                <span v-else>0</span>
              </p>
            </div>
            <div class="p-6 bg-green-100 rounded-xl transition-all duration-300" :class="{ 'bg-green-600 scale-110 rotate-12': stat.hover }">
              <svg class="w-12 h-12 transition-colors" :class="stat.hover ? 'text-white' : 'text-green-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

     <!-- Bagian tabel bank sampah ya guys-->
    <section class="max-w-5xl mx-auto px-4 mt-12 mb-16 scroll-animate">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <h2 class="text-2xl font-bold text-white">Rekening Bank Sampah</h2>
          <p class="text-green-100 mt-1">Data rekening bank sampah warga</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50 border-b-2 border-green-200">
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-16">No</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Sampah</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Uang</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(item, index) in tableData2" 
                :key="index"
                class="border-b border-gray-100 hover:bg-green-50 transition-all duration-300 cursor-pointer transform hover:scale-[1.01]"
                :class="{ 'animate-fadeInUp': true }"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <td class="px-6 py-5 text-gray-700 font-medium">{{ item.no }}</td>
                <td class="px-6 py-5">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-green-700 font-semibold">{{ item.nama.charAt(0) }}</span>
                    </div>
                    <span class="text-gray-800 font-medium">{{ item.nama }}</span>
                  </div>
                </td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ item.tanggal }}
                  </span>
                </td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm"
                    :class="item.keterangan">
                    {{ item.keterangan }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p class="text-sm text-gray-600">Menampilkan {{ tableData.length }} data terbaru</p>
        </div>
      </div>
    </section>

    <!-- Bagian footer ya guys -->
    <footer class="bg-gray-900 text-white py-12 relative overflow-hidden">
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

const observedElements = ref([])
const isVisible = ref(false)
const animateNumbers = ref(false)
const animatedValues = ref([0, 0, 0, 0])

const animateNumbers2 = ref(false)
const animatedValues2 = ref([0, 0, 0, 0])

const animateNumbers3 = ref(false)
const animatedValues3 = ref([0, 0, 0, 0])

const animateChart = ref(false)
const chartMalePercentage = ref(0)
const chartFemalePercentage = ref(0)

const setupScrollAnimations = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
      }
    })
  }, options)

  const elements = document.querySelectorAll('.scroll-animate')
  elements.forEach(el => {
    observer.observe(el)
    observedElements.value.push(el)
  })

  return observer
}

let scrollObserver = null

const stats = ref([
  { label: 'Total Penduduk', value: 2543, hover: false },
  { label: 'Jumlah RT', value: 12, hover: false },
  { label: 'Program Aktif', value: 8, hover: false },
  { label: 'Pengaduan Selesai', value: 156, hover: false },
])

const genderData = ref({
  male: 1320,
  female: 1223,
  total: 2543
})

const malePercentage = computed(() => ((genderData.value.male / genderData.value.total) * 100).toFixed(1))
const femalePercentage = computed(() => ((genderData.value.female / genderData.value.total) * 100).toFixed(1))

const stats2 = ref([
  { label: 'Total Pemasukan', value: 15750000, hover: false },
  { label: 'Total Pengeluaran', value: 8420000, hover: false }
])

const stats3 = ref([
  { label: 'Total Sampah Terkumpul', value: 5000, hover: false },
  { label: 'Total Pendapatan', value: 2750000, hover: false }
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

const tableData = ref([
  {
    no: 1,
    nama: 'Ahmad Fauzi',
    tanggal: '20 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 2,
    nama: 'Siti Nurhaliza',
    tanggal: '19 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 3,
    nama: 'Budi Santoso',
    tanggal: '18 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 4,
    nama: 'Dewi Kusuma',
    tanggal: '17 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 5,
    nama: 'Rudi Hermawan',
    tanggal: '16 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  }
])

const tableData2 = ref([
  {
    no: 1,
    nama: 'Ahmad Fauzi',
    tanggal: '20 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 2,
    nama: 'Siti Nurhaliza',
    tanggal: '19 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 3,
    nama: 'Budi Santoso',
    tanggal: '18 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 4,
    nama: 'Dewi Kusuma',
    tanggal: '17 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  },
  {
    no: 5,
    nama: 'Rudi Hermawan',
    tanggal: '16 Okt 2025',
    keterangan: 'Bantuan uang pemakaman'
  }
])

const currentCleaningSlide = ref(0)
const cleaningEvents = ref([
  {
    label: 'Ketua RW',
    title: 'Bumi Hijau',
    date: 'Minggu, 26 Oktober 2025',
    time: 'jam 9 - selesai',
    location: 'Mushola At-Taqwa',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
    status: 'thisweek'
  },
  {
    label: 'Ketua RW',
    title: 'Bersih Taman',
    date: 'Minggu, 2 November 2025',
    time: 'jam 9 - selesai',
    location: 'Taman RW 05',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
    status: 'upcoming'
  },
  {
    label: 'Ketua RW',
    title: 'Gotong Royong',
    date: 'Minggu, 19 Oktober 2025',
    time: 'jam 9 - selesai',
    location: 'Jalan Utama',
    image: 'https://images.unsplash.com/photo-1588783948922-8caa83db48b3?w=800',
    status: 'completed'
  }
])

const nextCleaningSlide = () => {
  if (currentCleaningSlide.value < cleaningEvents.value.length - 1) {
    currentCleaningSlide.value++
  }
}

const prevCleaningSlide = () => {
  if (currentCleaningSlide.value > 0) {
    currentCleaningSlide.value--
  }
}

onMounted(() => {
  isVisible.value = true
  
  setTimeout(() => {
    animateNumbers.value = true
    animateNumbers2.value = true
    animateNumbers3.value = true
    animateChart.value = true
    setTimeout(() => {
      scrollObserver = setupScrollAnimations()
    }, 100)

    let currentMale = 0
    let currentFemale = 0
    const targetMale = parseFloat(malePercentage.value)
    const targetFemale = parseFloat(femalePercentage.value)
    const incrementMale = targetMale / 50
    const incrementFemale = targetFemale / 50
    
    const chartTimer = setInterval(() => {
      currentMale += incrementMale
      currentFemale += incrementFemale
      
      if (currentMale >= targetMale) {
        chartMalePercentage.value = targetMale
        chartFemalePercentage.value = targetFemale
        clearInterval(chartTimer)
      } else {
        chartMalePercentage.value = currentMale
        chartFemalePercentage.value = currentFemale
      }
    }, 30)

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

    stats2.value.forEach((stat, idx) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          animatedValues2.value[idx] = stat.value
          clearInterval(timer)
        } else {
          animatedValues2.value[idx] = Math.floor(current)
        }
      }, 30)
    })

    stats3.value.forEach((stat, idx) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          animatedValues2.value[idx] = stat.value
          clearInterval(timer)
        } else {
          animatedValues2.value[idx] = Math.floor(current)
        }
      }, 30)
    })
  }, 500)
})

onUnmounted(() => {
  if (scrollObserver) {
    observedElements.value.forEach(el => {
      scrollObserver.unobserve(el)
    })
  }
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-animate.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate:nth-child(even) {
  transform: translateY(50px) translateX(-20px);
}

.scroll-animate.animate-visible:nth-child(even) {
  transform: translateY(0) translateX(0);
}

section.scroll-animate > div {
  transition-delay: 0.2s;
}

.scroll-animate .grid > * {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animate.animate-visible .grid > * {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.scroll-animate.animate-visible .grid > *:nth-child(1) { transition-delay: 0.1s; }
.scroll-animate.animate-visible .grid > *:nth-child(2) { transition-delay: 0.2s; }
.scroll-animate.animate-visible .grid > *:nth-child(3) { transition-delay: 0.3s; }
.scroll-animate.animate-visible .grid > *:nth-child(4) { transition-delay: 0.4s; }
.scroll-animate.animate-visible .grid > *:nth-child(5) { transition-delay: 0.5s; }
.scroll-animate.animate-visible .grid > *:nth-child(6) { transition-delay: 0.6s; }

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes chartPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.scroll-animate.animate-visible svg circle {
  animation: chartPulse 0.5s ease-out;
}
</style>