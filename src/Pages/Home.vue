<template>
  <div class="min-h-screen bg-gray-50 overflow-hidden">
    
    <!-- Navbar with Glassmorphism -->
    <nav 
      class="fixed top-0 z-50 w-full transition-all duration-500"
      :class="scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl' : 'bg-white/60 backdrop-blur-md shadow-lg'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex items-center space-x-4">
            <div 
              class="h-12 w-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold transform transition-all duration-300 cursor-pointer"
              :class="{ 'rotate-[360deg] scale-125': logoHover }"
              @mouseenter="logoHover = true"
              @mouseleave="logoHover = false">
              <span class="animate-pulse">RW</span>
            </div>
            <div>
              <h1 class="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">RW 05 Si Doi</h1>
              <p class="text-xs text-gray-600">Kelurahan Sejahtera</p>
            </div>
          </div>
          
          <div class="hidden md:flex items-center space-x-6">
            <a href="/" class="nav-link active">Beranda</a>
            <a href="/program" class="nav-link">Program</a>
            <a href="/keuangan" class="nav-link">Keuangan</a>
            <a href="/pengaduan" class="nav-link">Pengaduan</a>
          </div>
        </div>
      </div>
      <div class="h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400" 
           :style="{ width: scrollProgress + '%' }"></div>
    </nav>

    <!-- Hero Section with Particles & Parallax -->
    <section class="relative h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-900 overflow-hidden">
      <!-- Animated Mesh Background -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div 
          v-for="i in 20" 
          :key="i"
          class="particle"
          :style="{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: (10 + Math.random() * 10) + 's'
          }"></div>
      </div>

      <!-- Parallax Blobs -->
      <div class="absolute inset-0" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <div 
            class="hero-content"
            :style="{ transform: `translateY(${scrollY * 0.3}px)`, opacity: 1 - scrollY * 0.002 }">
            <h1 class="hero-title mb-6">
              <span class="glitch" data-text="Selamat Datang di RW 05">Selamat Datang di RW 05</span>
            </h1>
            <p class="text-2xl mb-10 text-green-100 animate-fadeInUp" style="animation-delay: 0.3s">
              Bersama Membangun Lingkungan yang Harmonis dan Sejahtera
            </p>
            <div class="flex justify-center space-x-6 animate-fadeInUp" style="animation-delay: 0.6s">
              <a href="/pengaduan" class="cta-button cta-primary group">
                <span class="relative z-10">Ajukan Pengaduan</span>
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-xl"></div>
                <div class="button-glow"></div>
              </a>
              <a href="/tentang" class="cta-button cta-secondary group">
                <span class="relative z-10">Tentang Kami</span>
                <div class="button-border"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>

    <!-- Stats Section with 3D Cards -->
    <section class="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="stat-card group"
          :class="{ 'visible': statsVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @mouseenter="stat.hover = true"
          @mouseleave="stat.hover = false"
          @mousemove="handleCardMove($event, index)">
          
          <div class="stat-card-inner" :style="cardTransforms[index]">
            <div class="stat-glow"></div>
            
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between mb-4">
                <div class="stat-icon" :class="{ 'active': stat.hover }">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    <path v-if="index === 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-gray-600 text-sm font-medium mb-2">{{ stat.label }}</p>
              <p class="text-4xl font-bold bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent">
                {{ animatedValues[index] }}
              </p>
              
              <div v-if="stat.hover" class="mt-4 flex space-x-1">
                <div v-for="i in 3" :key="i" 
                     class="confetti"
                     :style="{ animationDelay: `${i * 0.1}s` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services with Hover Effects -->
    <section class="max-w-7xl mx-auto px-4 py-20">
      <h2 class="section-title">Layanan Cepat</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a 
          v-for="(service, index) in quickServices" 
          :key="index"
          :href="service.href" 
          class="service-card group"
          @mouseenter="service.hover = true"
          @mouseleave="service.hover = false">
          
          <div class="service-card-bg"></div>
          
          <div class="relative z-10">
            <div :class="`service-icon ${service.color}`">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ service.desc }}</p>
            
            <div class="flex items-center text-green-600 font-medium">
              <span>Lihat Detail</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Visi Misi with Parallax Images -->
    <section class="max-w-7xl mx-auto px-4 py-20">
      <h2 class="section-title">Visi & Misi</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="vision-card">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-green-700 mb-3">Visi</h3>
                <p class="text-gray-700 leading-relaxed">
                  Mewujudkan RW 05 Si Doi sebagai lingkungan yang harmonis, sejahtera, dan berdaya saing dengan mengedepankan gotong royong dan transparansi dalam setiap aspek kehidupan bermasyarakat.
                </p>
              </div>
            </div>
          </div>
          
          <div class="vision-card">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-green-700 mb-4">Misi</h3>
                <ul class="space-y-3">
                  <li v-for="(misi, idx) in misiList" :key="idx" class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-green-600 transition-colors">
                      <svg class="w-4 h-4 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700">{{ misi }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery with Ken Burns Effect -->
        <div>
          <div class="gallery-main group">
            <img 
              :src="currentMainImage" 
              :alt="currentImageTitle"
              class="gallery-image">
            <div class="gallery-overlay">
              <div class="text-white">
                <p class="text-sm font-medium mb-1 opacity-80">Pengurus RW 05</p>
                <h4 class="text-2xl font-bold">{{ currentImageTitle }}</h4>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-3 mt-6">
            <div 
              v-for="(img, idx) in galleryImages.slice(0, 8)" 
              :key="idx"
              @click="selectImage(idx)"
              class="gallery-thumb group"
              :class="{ 'active': selectedImageIndex === idx }">
              <img :src="img.src" :alt="img.title" class="w-full h-full object-cover">
              <div class="gallery-thumb-overlay">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section with Flip Cards -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="section-title mb-0">Berita & Pengumuman</h2>
          <a href="/berita" class="news-link group">
            <span>Lihat Semua</span>
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(news, index) in latestNews" 
            :key="news.id" 
            class="news-card group"
            @mouseenter="news.hover = true"
            @mouseleave="news.hover = false">
            
            <div class="news-image-wrapper">
              <img :src="news.image" :alt="news.title" class="news-image">
              <div class="news-image-overlay"></div>
              <div class="news-badge">{{ news.category }}</div>
            </div>
            
            <div class="news-content">
              <p class="news-date">{{ news.date }}</p>
              <h3 class="news-title">{{ news.title }}</h3>
              <p class="news-excerpt">{{ news.excerpt }}</p>
              
              <div class="news-action">
                <span>Baca Selengkapnya</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Baksos Stats with Radial Progress -->
    <section class="max-w-6xl mx-auto px-4 py-20">
      <h2 class="section-title">Program Bakti Sosial</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(stat, index) in stats2" 
          :key="index"
          class="baksos-card">
          <div class="baksos-icon">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
            </svg>
          </div>
          
          <div class="flex-1">
            <p class="text-gray-600 text-lg font-medium mb-2">{{ stat.label }}</p>
            <p class="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Rp {{ animatedValues2[index].toLocaleString('id-ID') }}
            </p>
          </div>
          
          <div class="baksos-progress">
            <svg class="transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="8"/>
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="url(#gradient)" 
                stroke-width="8"
                stroke-linecap="round"
                :stroke-dasharray="`${(animatedValues2[index] / stats2[index].value) * 283} 283`"
                class="transition-all duration-1000"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#10b981"/>
                  <stop offset="100%" style="stop-color:#059669"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Table Section -->
    <section class="max-w-6xl mx-auto px-4 py-20">
      <div class="table-container">
        <div class="table-header">
          <div>
            <h2 class="text-3xl font-bold text-white mb-2">Riwayat Bantuan Terkini</h2>
            <p class="text-green-100">Data penerima bantuan terbaru</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="table-head-row">
                <th class="table-head">No</th>
                <th class="table-head">Nama</th>
                <th class="table-head">Tanggal</th>
                <th class="table-head">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(item, index) in tableData" 
                :key="index"
                class="table-row">
                <td class="table-cell font-medium">{{ item.no }}</td>
                <td class="table-cell">
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <span>{{ item.nama.charAt(0) }}</span>
                    </div>
                    <span class="font-medium">{{ item.nama }}</span>
                  </div>
                </td>
                <td class="table-cell">
                  <span class="date-badge">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ item.tanggal }}
                  </span>
                </td>
                <td class="table-cell">
                  <span class="status-badge">{{ item.keterangan }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Footer with Animated Wave -->
    <footer class="relative bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden">
      <svg class="footer-wave" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="url(#wave-gradient)"/>
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#10b981"/>
            <stop offset="50%" style="stop-color:#059669"/>
            <stop offset="100%" style="stop-color:#10b981"/>
          </linearGradient>
        </defs>
      </svg>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="footer-section">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              RW 05 Si Doi
            </h3>
            <p class="text-gray-400">Kelurahan Sejahtera, Kecamatan Bahagia, Kota Harmonis</p>
          </div>
          
          <div class="footer-section">
            <h4 class="font-bold mb-4 text-lg">Menu</h4>
            <div class="space-y-3">
              <a href="/" class="footer-link">Beranda</a>
              <a href="/tentang" class="footer-link">Tentang</a>
              <a href="/program" class="footer-link">Program</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="font-bold mb-4 text-lg">Kontak</h4>
            <div class="space-y-3 text-gray-400">
              <p class="footer-link">📞 +62 812-3456-7890</p>
              <p class="footer-link">✉ rw05@email.com</p>
              <p class="footer-link">📍 Jl. Sejahtera No. 123</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="font-bold mb-4 text-lg">Ikuti Kami</h4>
            <div class="flex space-x-4">
              <a href="#" class="social-icon">
                <span>FB</span>
              </a>
              <a href="#" class="social-icon">
                <span>IG</span>
              </a>
              <a href="#" class="social-icon">
                <span>TW</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p class="text-gray-400">© 2024 RW 05 Si Doi. All rights reserved.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      scrolled: false,
      scrollProgress: 0,
      logoHover: false,
      statsVisible: false,
      animatedValues: [0, 0, 0, 0],
      animatedValues2: [0, 0],
      cardTransforms: [{}, {}, {}, {}],
      selectedImageIndex: 0,
      
      stats: [
        { label: 'Total Penduduk', value: 2543, hover: false },
        { label: 'Jumlah RT', value: 12, hover: false },
        { label: 'Program Aktif', value: 8, hover: false },
        { label: 'Pengaduan Selesai', value: 156, hover: false },
      ],
      
      stats2: [
        { label: 'Total Pemasukan', value: 15750000, hover: false },
        { label: 'Total Pengeluaran', value: 8420000, hover: false }
      ],
      
      quickServices: [
        { 
          title: 'Laporan Keuangan', 
          desc: 'Transparansi keuangan RW per bulan',
          color: 'bg-gradient-to-br from-blue-500 to-blue-700',
          href: '/keuangan',
          hover: false
        },
        { 
          title: 'Ajukan Pengaduan', 
          desc: 'Sampaikan keluhan atau aspirasi Anda',
          color: 'bg-gradient-to-br from-red-500 to-red-700',
          href: '/pengaduan',
          hover: false
        },
        { 
          title: 'Program RW', 
          desc: 'Jadwal Ronda, Bersih-Bersih, Bank Sampah, Bakti Sosial',
          color: 'bg-gradient-to-br from-green-500 to-green-700',
          href: '/program',
          hover: false
        }
      ],
      
      misiList: [
        'Meningkatkan kualitas pelayanan dan transparansi administrasi warga',
        'Memberdayakan masyarakat melalui program-program sosial dan ekonomi',
        'Menciptakan lingkungan yang bersih, aman, dan nyaman untuk semua',
        'Membangun solidaritas dan kerukunan antar warga melalui kegiatan bersama'
      ],
      
      galleryImages: [
        { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', title: 'Ketua RW' },
        { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', title: 'Wakil Ketua' },
        { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', title: 'Sekretaris' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', title: 'Bendahara' },
        { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', title: 'Seksi Keamanan' },
        { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', title: 'Seksi Kebersihan' },
        { src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400', title: 'Seksi Sosial' },
        { src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400', title: 'Seksi Pembangunan' }
      ],
      
      latestNews: [
        {
          id: 1,
          title: 'Gotong Royong Bersih Lingkungan',
          excerpt: 'Kegiatan bersih-bersih lingkungan dilaksanakan setiap Minggu pagi...',
          date: '15 Okt 2024',
          category: 'Kegiatan',
          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',
          hover: false
        },
        {
          id: 2,
          title: 'Bantuan Sosial untuk 25 Keluarga',
          excerpt: 'RW 05 menyalurkan bantuan sembako kepada warga yang membutuhkan...',
          date: '12 Okt 2024',
          category: 'Sosial',
          image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
          hover: false
        },
        {
          id: 3,
          title: 'Jadwal Ronda Bulan November',
          excerpt: 'Pengumuman jadwal pos ronda untuk bulan November 2024...',
          date: '10 Okt 2024',
          category: 'Pengumuman',
          image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400',
          hover: false
        }
      ],
      
      tableData: [
        { no: 1, nama: 'Ahmad Fauzi', tanggal: '20 Okt 2025', keterangan: 'Bantuan uang pemakaman' },
        { no: 2, nama: 'Siti Nurhaliza', tanggal: '19 Okt 2025', keterangan: 'Bantuan uang pemakaman' },
        { no: 3, nama: 'Budi Santoso', tanggal: '18 Okt 2025', keterangan: 'Bantuan uang pemakaman' },
        { no: 4, nama: 'Dewi Kusuma', tanggal: '17 Okt 2025', keterangan: 'Bantuan uang pemakaman' },
        { no: 5, nama: 'Rudi Hermawan', tanggal: '16 Okt 2025', keterangan: 'Bantuan uang pemakaman' }
      ]
    }
  },
  
  computed: {
    currentMainImage() {
      return this.galleryImages[this.selectedImageIndex].src
    },
    currentImageTitle() {
      return this.galleryImages[this.selectedImageIndex].title
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    
    setTimeout(() => {
      this.statsVisible = true
      this.animateStats()
    }, 500)
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      this.scrolled = this.scrollY > 50
      
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.scrollProgress = (winScroll / height) * 100
    },
    
    handleCardMove(event, index) {
      const card = event.currentTarget
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      this.cardTransforms[index] = {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
      }
    },
    
    animateStats() {
      this.stats.forEach((stat, idx) => {
        let current = 0
        const increment = stat.value / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            this.animatedValues[idx] = stat.value
            clearInterval(timer)
          } else {
            this.animatedValues[idx] = Math.floor(current)
          }
        }, 20)
      })
      
      this.stats2.forEach((stat, idx) => {
        let current = 0
        const increment = stat.value / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            this.animatedValues2[idx] = stat.value
            clearInterval(timer)
          } else {
            this.animatedValues2[idx] = Math.floor(current)
          }
        }, 20)
      })
    },
    
    selectImage(index) {
      this.selectedImageIndex = index
    }
  }
}
</script>

<style scoped lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

/* Navbar Styles */
.nav-link {
  @apply text-gray-700 font-medium relative py-2 transition-all duration-300;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #059669);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  @apply text-green-600;
}

/* Hero Styles */
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

.glitch {
  position: relative;
  display: inline-block;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 2s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px, -2px);
  opacity: 0.8;
}

.glitch::after {
  animation: glitch-2 2s infinite;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px, 2px);
  opacity: 0.8;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

/* Particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float-particle 10s infinite ease-in-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

@keyframes float-particle {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

/* Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: blob-float 20s infinite ease-in-out;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  top: 10%;
  left: 10%;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.15);
  bottom: 10%;
  right: 10%;
  animation-delay: -5s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.25);
  top: 50%;
  left: 50%;
  animation-delay: -10s;
}

@keyframes blob-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* CTA Buttons */
.cta-button {
  @apply px-8 py-4 rounded-xl font-bold text-lg relative overflow-hidden transition-all duration-300;
  transform-style: preserve-3d;
}

.cta-primary {
  @apply bg-white text-green-700 shadow-2xl;
}

.cta-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.button-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(16, 185, 129, 0.4), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.cta-primary:hover .button-glow {
  opacity: 1;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

.cta-secondary {
  @apply bg-green-700 text-white border-2 border-white/50;
}

.cta-secondary:hover {
  @apply bg-green-600 border-white;
  transform: translateY(-4px) scale(1.05);
}

.button-border {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #10b981, #059669, #10b981);
  border-radius: 0.75rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.cta-secondary:hover .button-border {
  opacity: 1;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Scroll Indicator */
@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(16px);
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll 2s infinite;
}

/* Stats Cards */
.stat-card {
  position: relative;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card-inner {
  @apply bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden;
  height: 100%;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.stat-card:hover .stat-card-inner {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.stat-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.stat-card:hover .stat-glow {
  opacity: 1;
  animation: rotate-glow 3s linear infinite;
}

@keyframes rotate-glow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.stat-icon {
  @apply w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white;
  transition: all 0.3s ease;
}

.stat-icon.active {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
}

/* Confetti */
.confetti {
  @apply w-2 h-2 rounded-full;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: confetti-fall 1s ease-out;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(40px) rotate(360deg);
    opacity: 0;
  }
}

/* Section Title */
.section-title {
  @apply text-4xl font-bold text-center mb-16;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 2px;
}

/* Service Cards */
.service-card {
  @apply relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.service-card-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(5, 150, 105, 0.1));
  opacity: 0;
  transition: opacity 0.4s;
}

.service-card:hover .service-card-bg {
  opacity: 1;
}

.service-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mb-6;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Vision Cards */
.vision-card {
  @apply bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-lg;
  transition: all 0.3s ease;
}

.vision-card:hover {
  transform: translateX(8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Gallery */
.gallery-main {
  @apply relative overflow-hidden rounded-2xl shadow-2xl h-96;
  cursor: pointer;
}

.gallery-image {
  @apply w-full h-full object-cover;
  transition: transform 0.7s ease;
}

.gallery-main:hover .gallery-image {
  transform: scale(1.15) rotate(2deg);
}

.gallery-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6;
  opacity: 0;
  transition: opacity 0.4s;
}

.gallery-main:hover .gallery-overlay {
  opacity: 1;
}

.gallery-thumb {
  @apply relative h-24 rounded-lg overflow-hidden cursor-pointer shadow-md;
  transition: all 0.3s ease;
}

.gallery-thumb:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.gallery-thumb.active {
  @apply ring-4 ring-green-500;
}

.gallery-thumb-overlay {
  @apply absolute inset-0 bg-black/40 flex items-center justify-center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-thumb:hover .gallery-thumb-overlay {
  opacity: 1;
}

/* News Cards */
.news-card {
  @apply bg-white rounded-2xl shadow-lg overflow-hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.news-image-wrapper {
  @apply relative h-56 overflow-hidden;
}

.news-image {
  @apply w-full h-full object-cover;
  transition: transform 0.6s ease;
}

.news-card:hover .news-image {
  transform: scale(1.2) rotate(3deg);
}

.news-image-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/60 to-transparent;
  opacity: 0;
  transition: opacity 0.4s;
}

.news-card:hover .news-image-overlay {
  opacity: 1;
}

.news-badge {
  @apply absolute top-4 left-4 px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-full;
  transition: transform 0.3s;
}

.news-card:hover .news-badge {
  transform: scale(1.1);
}

.news-content {
  @apply p-6;
}

.news-date {
  @apply text-gray-500 text-sm mb-2;
  transition: color 0.3s;
}

.news-card:hover .news-date {
  @apply text-green-600;
}

.news-title {
  @apply text-xl font-bold text-gray-900 mb-3;
  transition: all 0.3s;
}

.news-card:hover .news-title {
  @apply text-green-600;
  transform: translateX(4px);
}

.news-excerpt {
  @apply text-gray-600 mb-4;
}

.news-action {
  @apply flex items-center text-green-600 font-medium;
  transition: transform 0.3s;
}

.news-card:hover .news-action {
  transform: translateX(8px);
}

.news-link {
  @apply text-green-600 font-medium flex items-center;
  transition: all 0.3s;
}

.news-link:hover {
  @apply text-green-700;
}

/* Baksos Cards */
.baksos-card {
  @apply bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-10 flex items-center gap-8;
  transition: all 0.4s ease;
}

.baksos-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
}

.baksos-icon {
  @apply w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white shadow-lg;
  transition: all 0.3s ease;
}

.baksos-card:hover .baksos-icon {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 15px 30px rgba(16, 185, 129, 0.4);
}

.baksos-progress {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}

/* Table */
.table-container {
  @apply bg-white rounded-2xl shadow-2xl overflow-hidden;
}

.table-header {
  @apply bg-gradient-to-r from-green-600 to-green-700 px-8 py-8;
}

.table-head-row {
  @apply bg-gray-50 border-b-2 border-green-200;
}

.table-head {
  @apply px-6 py-4 text-left text-sm font-semibold text-gray-700;
}

.table-row {
  @apply border-b border-gray-100 transition-all duration-300;
}

.table-row:hover {
  @apply bg-green-50;
  transform: scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.table-cell {
  @apply px-6 py-5 text-gray-700;
}

.avatar {
  @apply w-10 h-10 rounded-full bg-green-100 flex items-center justify-center;
}

.avatar span {
  @apply text-green-700 font-semibold;
}

.date-badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700;
}

.status-badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700;
}

/* Footer */
.footer-wave {
  @apply absolute top-0 left-0 w-full;
  height: 120px;
  animation: wave-move 8s linear infinite;
}

@keyframes wave-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.footer-section {
  transition: transform 0.3s ease;
}

.footer-section:hover {
  transform: translateY(-4px);
}

.footer-link {
  @apply block transition-all duration-300;
}

.footer-link:hover {
  @apply text-white;
  transform: translateX(8px);
}

.social-icon {
  @apply w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold;
  transition: all 0.3s ease;
}

.social-icon:hover {
  @apply bg-green-600;
  transform: translateY(-4px) rotate(10deg) scale(1.1);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.4);
}

/* Animations */
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

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .stat-card-inner {
    padding: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .news-card {
    margin-bottom: 1rem;
  }
  
  .baksos-card {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .baksos-progress {
    width: 80px;
    height: 80px;
  }
  
  .gallery-main {
    height: 16rem;
  }
  
  .table-container {
    overflow-x: auto;
  }
}

/* Loading State */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
</style>