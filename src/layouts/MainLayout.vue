<template>
  <div class="app-main-layout">
    <main
      class="app-content"
      :class="{
        full: !isOpen,
      }"
    >
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
