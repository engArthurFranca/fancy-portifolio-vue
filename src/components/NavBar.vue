<script setup>
import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    let isDark = computed(() => {
        return store.state.theme.isDark;
    });

    function toogleTheme() {
        console.log(store.state.theme.isDark)
        store.commit('toggleTheme');
    }
</script>

<template>
    <nav class="bg-inherit border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://arthurfranca.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets/logo.svg" class="w-14 " alt="AF Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style="font-family: 'Abhaya Libre', serif;">Arthur&lt;<span class="text-red-600">/</span>&gt;França</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" @click="toogleTheme" class="text-white bg-gray-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-2 py-2 text-center dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            <img v-if="isDark" src="../assets/lightDown.svg" class="w-6 h-6"/>
            <img v-else src="../assets/lightUp.svg" class="w-6 h-6"/>
        </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-inherit dark:border-gray-700">
      <li>
        <a href="#about" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">About</a>
      </li>
      <li>
        <a href="#formation" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Formation</a>
      </li>
      <li>
        <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
      </li>
      <li>
        <a href="#contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
        </div>
    </nav>
</template>

<style scoped>

.logo-container {
    position: relative;
}

.logo-container::after {
    content: '';
    position: absolute;
    bottom: 0; /* Ajuste conforme necessário para posicionar a sombra */
    left: 0;
    width: 55px; /* Largura da sombra */
    height: 57px; /* Altura da sombra */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.4)); /* Gradiente de transparência */
    border-radius: 50%; /* Formato de círculo */
}
</style>