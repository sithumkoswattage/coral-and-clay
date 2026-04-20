<script setup lang="ts">
import { ref, provide } from 'vue';
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
  // TODO: Send reservation data to backend API
};

const handleCloseModal = () => {
  showReservationModal.value = false;
};

provide('handleBookTable', handleBookTable);
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