<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import ReservationModal from './components/ReservationModal.vue';

const showReservationModal = ref(false);

interface ReservationData {
  name: string;
  date: string;
  time: string;
  numberOfGuests: number;
}

const handleBookTable = () => {
  showReservationModal.value = true;
};

const handleReservationSubmit = (data: ReservationData) => {
  console.log('Reservation submitted:', data);
  // Here you would typically send the data to your backend API
};

const handleCloseModal = () => {
  showReservationModal.value = false;
};
</script>

<template>
  <div class="antialiased">
    <NavBar :onBookTable="handleBookTable" />
    <ReservationModal
      :isOpen="showReservationModal"
      @close="handleCloseModal"
      @submit="handleReservationSubmit"
    />
    <main>
      <router-view />
    </main>
  </div>
</template>