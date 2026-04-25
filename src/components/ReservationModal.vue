<script setup lang="ts">
import { ref } from 'vue';

interface ReservationFormData {
  name: string;
  date: string;
  time: string;
  numberOfGuests: number;
}

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  close: [];
  submit: [data: ReservationFormData];
}>();

const formData = ref<ReservationFormData>({
  name: '',
  date: '',
  time: '',
  numberOfGuests: 2,
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.date || !formData.value.time) {
    alert('Please fill in all fields');
    return;
  }

  isSubmitting.value = true;
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    emit('submit', formData.value);
    reset();
    emit('close');
  } finally {
    isSubmitting.value = false;
  }
};

const reset = () => {
  formData.value = {
    name: '',
    date: '',
    time: '',
    numberOfGuests: 2,
  };
};

const handleClose = () => {
  reset();
  emit('close');
};
</script>

<template>
  <!-- Backdrop -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      @click="handleClose"
    />
  </Transition>

  <!-- Modal -->
  <Transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-200"
    enter-from-class="opacity-0 scale-95"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click.self="handleClose"
    >
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-warm-clay-100 dark:border-warm-clay-900">
        <!-- Header -->
        <div class="bg-gradient-to-r from-warm-clay-600 to-warm-clay-500 p-6 text-white">
          <h2 class="text-2xl font-serif font-bold">Book a Table</h2>
          <p class="text-warm-clay-100 text-sm mt-1">Reserve your spot at Coral & Clay</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 space-y-5">
          <!-- Name Input -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-warm-clay-100 mb-2">
              Full Name
            </label>
            <input
              v-model="formData.name"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-3 rounded-xl border-2 border-warm-clay-200 dark:border-warm-clay-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:border-warm-clay-500 focus:ring-2 focus:ring-warm-clay-200 dark:focus:ring-warm-clay-800 transition-all"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Date Input -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-warm-clay-100 mb-2">
              Date
            </label>
            <input
              v-model="formData.date"
              type="date"
              class="w-full px-4 py-3 rounded-xl border-2 border-warm-clay-200 dark:border-warm-clay-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:border-warm-clay-500 focus:ring-2 focus:ring-warm-clay-200 dark:focus:ring-warm-clay-800 transition-all"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Time Input -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-warm-clay-100 mb-2">
              Time
            </label>
            <input
              v-model="formData.time"
              type="time"
              class="w-full px-4 py-3 rounded-xl border-2 border-warm-clay-200 dark:border-warm-clay-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:border-warm-clay-500 focus:ring-2 focus:ring-warm-clay-200 dark:focus:ring-warm-clay-800 transition-all"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Number of Guests -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-warm-clay-100 mb-2">
              Number of Guests
            </label>
            <input
              v-model.number="formData.numberOfGuests"
              type="number"
              min="1"
              max="12"
              class="w-full px-4 py-3 rounded-xl border-2 border-warm-clay-200 dark:border-warm-clay-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:border-warm-clay-500 focus:ring-2 focus:ring-warm-clay-200 dark:focus:ring-warm-clay-800 transition-all"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4">
            <button
              type="button"
              @click="handleClose"
              class="flex-1 px-4 py-3 rounded-xl border-2 border-warm-clay-200 dark:border-warm-clay-700 text-slate-700 dark:text-warm-clay-100 font-semibold hover:bg-warm-clay-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isSubmitting"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-warm-clay-600 to-warm-clay-500 text-white font-semibold hover:shadow-lg hover:shadow-warm-clay-500/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Booking...' : 'Reserve Table' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
