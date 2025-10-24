<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Step Indicator -->
      <div class="mb-8 animate-fade-in">
        <div class="flex items-center justify-center gap-4">
          <div class="flex items-center">
            <div 
              :class="[
                'w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300',
                currentStep === 1 ? 'bg-green-600 text-white animate-scale-in' : 'bg-green-500 text-white'
              ]">
              {{ currentStep > 1 ? '✓' : '1' }}
            </div>
            <span 
              :class="[
                'ml-3 font-semibold transition-all',
                currentStep === 1 ? 'text-green-700' : 'text-green-600'
              ]">
              Data Diri
            </span>
          </div>
          
          <div 
            :class="[
              'w-24 h-1 transition-all duration-500',
              currentStep === 2 ? 'bg-green-500' : 'bg-gray-300'
            ]"></div>
          
          <div class="flex items-center">
            <div 
              :class="[
                'w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300',
                currentStep === 2 ? 'bg-green-600 text-white shadow-lg animate-scale-in' : 'bg-gray-300 text-gray-500'
              ]">
              2
            </div>
            <span 
              :class="[
                'ml-3 font-semibold transition-all',
                currentStep === 2 ? 'text-green-700' : 'text-gray-500'
              ]">
              Detail Permasalahan
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <h1 class="text-3xl font-bold text-white">Form Pengaduan Warga</h1>
          <p class="text-green-100 mt-2">
            {{ currentStep === 1 ? 'Langkah 1: Lengkapi data diri Anda' : 'Langkah 2: Detail permasalahan yang dihadapi' }}
          </p>
        </div>

        <!-- Step 1: Data Diri -->
        <div v-if="currentStep === 1" class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-8 space-y-6">
            <div class="animate-fade-slide-up animation-delay-200">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                v-model="formData.nama"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div class="animate-fade-slide-up animation-delay-300">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                RT/RW <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                v-model="formData.rt"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="Contoh: 001/002"
              />
            </div>

            <div class="animate-fade-slide-up animation-delay-400">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                No. HP <span class="text-red-500">*</span>
              </label>
              <input
                type="tel"
                v-model="formData.noHp"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="08xx xxxx xxxx"
              />
            </div>

            <div class="animate-fade-slide-up animation-delay-500">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                No. Rumah <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                v-model="formData.noRumah"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="Nomor rumah"
              />
            </div>

            <button
              @click="nextStep"
              class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 animate-fade-slide-up animation-delay-600">
              Lanjut
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>

          <div class="bg-gradient-to-br from-green-100 to-green-50 p-8 flex items-center justify-center animate-fade-slide-left animation-delay-300">
            <div class="text-center">
              <svg class="w-64 h-64 mx-auto text-green-600 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <p class="mt-6 text-green-700 font-semibold text-lg">Warga Desa Berkumpul</p>
              <p class="mt-2 text-green-600 text-sm">Bersama membangun desa yang lebih baik</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Detail Permasalahan -->
        <div v-if="currentStep === 2" class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-8 space-y-6">
            <div class="animate-fade-slide-up animation-delay-200">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Nama Permasalahan <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                v-model="formData.namaPermasalahan"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="Contoh: Jalan Rusak di RT 01"
              />
            </div>

            <div class="animate-fade-slide-up animation-delay-300">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Kategori Masalah <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-2 gap-3">
                <label 
                  v-for="kategori in kategoriMasalah" 
                  :key="kategori"
                  class="flex items-center p-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all group">
                  <input
                    type="radio"
                    v-model="formData.kategori"
                    :value="kategori"
                    class="w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-500"
                  />
                  <span class="ml-2 text-sm text-gray-700 font-medium group-hover:text-green-700">
                    {{ kategori }}
                  </span>
                </label>
              </div>
            </div>

            <div class="animate-fade-slide-up animation-delay-400">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Detail Permasalahan <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.detailPermasalahan"
                rows="6"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                placeholder="Jelaskan permasalahan secara detail..."
              ></textarea>
            </div>

            <div class="flex gap-3 animate-fade-slide-up animation-delay-500">
              <button
                @click="prevStep"
                class="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                </svg>
                Kembali
              </button>
              <button
                @click="handleSubmit"
                class="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Kirim
              </button>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-100 to-green-50 p-8 animate-fade-slide-left animation-delay-300">
            <label class="block text-sm font-semibold text-gray-700 mb-4">
              Upload Foto Bukti Permasalahan <span class="text-red-500">*</span>
            </label>
            
            <div 
              @click="triggerFileInput"
              class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-all cursor-pointer mb-4">
              <input
                type="file"
                multiple
                accept="image/*"
                @change="handleFileChange"
                class="hidden"
                ref="fileInput"
              />
              <svg class="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-gray-600 font-medium">Klik untuk upload foto</p>
              <p class="text-sm text-gray-400 mt-1">PNG, JPG (Max 5MB)</p>
            </div>

            <div v-if="uploadedImages.length > 0" class="space-y-3">
              <div 
                v-for="(image, index) in uploadedImages" 
                :key="index"
                class="relative rounded-xl overflow-hidden shadow-lg animate-scale-in group">
                <img 
                  :src="image.url" 
                  :alt="image.name"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <button
                    @click="removeImage(index)"
                    class="opacity-0 group-hover:opacity-100 transition-all bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p class="text-white text-sm font-medium truncate">{{ image.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(1)

const formData = ref({
  nama: '',
  rt: '',
  noHp: '',
  noRumah: '',
  namaPermasalahan: '',
  kategori: '',
  detailPermasalahan: ''
})

const kategoriMasalah = ['Infrastruktur', 'Kebersihan', 'Keamanan', 'Pelayanan', 'Lainnya']
const uploadedImages = ref([])
const fileInput = ref(null)

const nextStep = () => {
  if (!formData.value.nama || !formData.value.rt || !formData.value.noHp || !formData.value.noRumah) {
    alert('Mohon lengkapi semua field yang wajib diisi!')
    return
  }
  currentStep.value = 2
}

const prevStep = () => {
  currentStep.value = 1
}

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    if (file.size > 5 * 1024 * 1024) {
      alert(`File ${file.name} terlalu besar! Max 5MB`)
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImages.value.push({
        name: file.name,
        url: e.target.result
      })
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  uploadedImages.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!formData.value.namaPermasalahan || !formData.value.kategori || 
      !formData.value.detailPermasalahan || uploadedImages.value.length === 0) {
    alert('Mohon lengkapi semua field dan upload minimal 1 foto!')
    return
  }
  console.log('Form submitted:', formData.value, uploadedImages.value)
  alert('Pengaduan berhasil dikirim!')
}
</script>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.animate-fade-slide-up {
  animation: fadeSlideUp 0.6s ease-out both;
}

.animate-fade-slide-left {
  animation: fadeSlideLeft 0.6s ease-out both;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out both;
}

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
</style>