<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <h1 class="text-3xl font-bold text-white">Form Pengaduan Warga</h1>
          <p class="text-green-100 mt-2">Sampaikan keluhan dan aspirasi Anda</p>
        </div>

        <div class="p-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div class="lg:col-span-2 space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Nama <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="formData.nama"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    NIK <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="formData.nik"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    placeholder="16 digit NIK"
                    maxlength="16"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
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
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    RT/RW <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="formData.rt"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    placeholder="001/002"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Pengaduan <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.pengaduan"
                  rows="6"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                  placeholder="Tulis pengaduan Anda secara detail..."
                ></textarea>
              </div>
            </div>

            <div class="lg:col-span-1">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Jenis Aduan <span class="text-red-500">*</span>
              </label>
              <div class="space-y-3">
                <label 
                  v-for="jenis in jenisAduan" 
                  :key="jenis"
                  class="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all group">
                  <input
                    type="radio"
                    v-model="formData.jenisAduan"
                    :value="jenis"
                    class="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500"
                  />
                  <span class="ml-3 text-gray-700 font-medium group-hover:text-green-700">
                    {{ jenis }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              Upload Foto/Dokumen Pendukung (Opsional)
            </label>
            <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-500 transition-all">
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                @change="handleFileChange"
                class="hidden"
                id="file-upload"
                ref="fileInput"
              />
              <label for="file-upload" class="cursor-pointer">
                <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <p class="text-gray-600">Klik untuk upload file</p>
                <p class="text-sm text-gray-400 mt-1">PNG, JPG, PDF (Max 5MB)</p>
              </label>
            </div>

            <div v-if="files.length > 0" class="mt-4 space-y-2">
              <div 
                v-for="(file, index) in files" 
                :key="index"
                class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span class="text-sm text-gray-700">{{ file.name }}</span>
                <button
                  @click="removeFile(index)"
                  class="text-red-500 hover:text-red-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button
            @click="handleSubmit"
            class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Kirim Pengaduan
          </button>
        </div>
      </div>

      <div class="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <p class="text-sm text-blue-800">
          <strong>Catatan:</strong> Pengaduan Anda akan diproses maksimal 3x24 jam. 
          Anda akan dihubungi melalui nomor HP yang terdaftar.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  nama: '',
  nik: '',
  noHp: '',
  rt: '',
  pengaduan: '',
  jenisAduan: ''
})

const jenisAduan = ['Infrastruktur', 'Kebersihan', 'Keamanan', 'Pelayanan', 'Lainnya']
const files = ref([])
const fileInput = ref(null)

const handleFileChange = (event) => {
  const newFiles = Array.from(event.target.files)
  files.value = [...files.value, ...newFiles]
}

const removeFile = (index) => {
  files.value = files.value.filter((_, i) => i !== index)
}

const handleSubmit = () => {
  if (!formData.value.nama || !formData.value.nik || !formData.value.noHp || 
      !formData.value.rt || !formData.value.pengaduan || !formData.value.jenisAduan) {
    alert('Mohon lengkapi semua field yang wajib diisi!')
    return
  }
  console.log('Form submitted:', formData.value, files.value)
  alert('Pengaduan berhasil dikirim!')
}
</script>