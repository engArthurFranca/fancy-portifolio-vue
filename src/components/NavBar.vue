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
            <svg viewBox="0 0 235 235" xmlns="http://www.w3.org/2000/svg" class="w-14">
              <g transform="matrix(8.659842, 0, 0, 9.030336, 106.082008, -921.528564)" style="transform-origin: 12.736px 1040.33px;">
                <path d="M 25.658 1038.522 L 23.839 1040.016 L 23.655 1040.094 C 23.659 1040.511 23.656 1040.938 23.648 1041.371 L 23.874 1041.424 L 25.727 1043.017 L 25.139 1045.017 L 22.724 1045.386 L 22.508 1045.315 C 22.377 1045.739 22.155 1046.1 21.835 1046.414 L 22.001 1046.563 L 22.8 1048.819 L 21.267 1050.267 L 18.956 1049.416 L 18.801 1049.248 C 18.414 1049.458 18.03 1049.66 17.655 1049.855 L 17.666 1050.047 L 17.172 1052.313 L 15.075 1052.792 L 13.471 1050.997 L 13.365 1050.748 C 12.96 1050.784 12.462 1050.75 12.078 1050.741 L 11.971 1050.92 L 10.399 1052.635 L 8.311 1052.051 L 7.817 1049.708 L 7.915 1049.551 C 7.424 1049.296 7.049 1049.073 6.684 1048.827 L 6.588 1048.985 L 4.24 1049.659 L 2.635 1048.081 L 3.446 1045.917 L 3.652 1045.796 C 3.372 1045.413 3.2 1045.059 2.946 1044.636 L 2.77 1044.718 L 0.396 1044.177 L -0.255 1042.09 L 1.662 1040.655 L 1.837 1040.573 C 1.834 1040.156 1.838 1039.73 1.848 1039.301 L 1.623 1039.248 L -0.233 1037.651 L 0.356 1035.648 L 2.773 1035.283 L 2.894 1035.299 L 3.566 1034.198 L 3.495 1034.105 L 2.696 1031.85 L 4.229 1030.406 L 6.54 1031.25 L 6.694 1031.422 C 7.081 1031.211 7.465 1031.008 7.841 1030.817 L 7.831 1030.624 L 8.229 1028.297 L 10.425 1027.876 L 12.027 1029.671 L 12.035 1029.867 C 12.538 1029.884 12.94 1029.865 13.415 1029.928 L 13.429 1029.691 L 15.002 1027.979 L 17.187 1028.619 L 17.676 1030.963 L 17.581 1031.114 C 17.973 1031.317 18.35 1031.539 18.814 1031.841 L 18.912 1031.683 L 21.258 1031.008 L 22.771 1032.536 L 21.953 1034.698 L 21.847 1034.873 C 22.031 1035.201 22.294 1035.607 22.454 1035.976 L 22.729 1035.952 L 25.103 1036.49 L 25.658 1038.522 Z" style="fill: rgb(54, 54, 54); stroke-width: 0.231884px; stroke: rgb(255, 255, 255); transform-origin: 12.515px 1040.45px;" class="animate-spin-slow"></path>
              </g>
              <circle style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;" cx="119.869" cy="118.103" r="67.5"></circle>
              <path d="M 131.404 135.227 L 137.215 120.43 C 130.042 120.355 126.454 119.445 126.454 117.699 C 126.442 117.036 126.713 116.403 127.192 115.977 C 127.299 115.879 127.412 115.789 127.53 115.707 C 128.108 115.311 128.592 115.073 128.984 114.995 C 129.072 114.977 129.163 114.968 129.252 114.967 C 129.274 114.967 129.296 114.968 129.318 114.968 C 129.526 114.972 130.195 114.985 131.323 115.01 C 131.53 115.015 131.737 115.019 131.942 115.024 C 133.262 115.054 135.021 115.093 137.222 115.145 C 137.937 115.162 138.653 115.178 139.368 115.195 C 140.573 112.337 141.872 109.524 143.262 106.762 C 147.638 98.136 151.776 92.916 155.678 91.104 C 156.64 90.641 157.681 90.395 158.738 90.382 C 160.023 90.395 161.286 90.735 162.42 91.375 C 163.46 91.94 164.493 92.747 165.518 93.797 C 165.969 94.275 166.257 94.897 166.338 95.567 C 166.366 95.773 166.38 95.98 166.379 96.187 C 166.381 96.589 166.358 96.989 166.311 97.387 C 166.115 98.939 165.492 99.715 164.442 99.715 C 164.293 99.713 164.149 99.665 164.025 99.579 C 163.806 99.435 163.586 99.178 163.366 98.805 C 163.087 98.288 162.637 97.86 162.017 97.523 C 162.001 97.514 161.984 97.505 161.967 97.496 C 161.321 97.154 160.712 96.984 160.137 96.984 C 158.076 96.973 156.098 97.837 154.645 99.382 C 154.592 99.435 154.539 99.49 154.487 99.545 C 153.035 101.082 151.668 103.034 150.388 105.402 C 150.245 105.667 150.105 105.934 149.968 106.203 C 148.569 108.935 147.08 111.933 145.502 115.195 L 146.793 115.195 C 153.539 115.195 158.337 115.11 161.185 114.941 C 161.59 114.918 161.993 114.888 162.397 114.853 C 162.54 114.892 162.648 114.948 162.719 115.023 C 162.791 115.098 162.831 115.201 162.827 115.308 C 162.827 115.824 160.991 116.504 157.315 117.348 C 156.607 117.511 155.898 117.666 155.187 117.812 C 153.179 118.116 151.205 118.458 149.268 118.837 C 147.331 119.217 145.358 119.596 143.349 119.975 C 142.708 121.436 141.965 123.085 141.121 124.922 C 140.718 125.797 140.314 126.671 139.906 127.544 C 138.543 130.466 137 133.709 135.278 137.275 C 132.698 142.388 130.473 146.701 128.606 150.211 C 128.074 151.214 127.535 152.214 126.992 153.21 C 126.555 154.012 126.116 154.811 125.673 155.609 C 124.212 158.239 123.146 160.056 122.472 161.063 C 117.472 168.602 112.564 173.12 107.747 174.619 C 106.589 174.986 105.387 175.174 104.178 175.177 C 102.256 175.191 100.419 174.342 99.122 172.84 C 98.973 172.676 98.828 172.507 98.69 172.332 C 98.019 171.502 97.467 170.574 97.048 169.576 C 96.606 168.505 96.36 167.354 96.322 166.185 C 96.462 165.593 96.648 165.193 96.879 164.986 C 96.992 164.88 97.139 164.821 97.291 164.82 C 97.458 164.823 97.612 164.916 97.699 165.068 C 97.867 165.318 97.977 165.755 98.029 166.381 C 98.035 166.448 98.04 166.517 98.044 166.584 C 98.089 167.217 98.262 167.83 98.554 168.384 C 98.759 168.788 99.026 169.19 99.353 169.588 C 99.486 169.749 99.624 169.905 99.766 170.055 C 100.068 170.38 100.397 170.674 100.749 170.937 C 101.498 171.488 102.246 171.762 102.994 171.762 C 106.236 171.729 109.386 170.617 111.998 168.585 C 114.683 166.595 117.242 163.671 119.674 159.811 C 120.047 159.229 120.408 158.637 120.757 158.037 C 121.901 156.082 123.226 153.581 124.732 150.535 C 126.114 147.744 127.597 144.461 129.181 140.683 C 129.94 138.872 130.681 137.053 131.404 135.227 Z" id="1" vector-effect="non-scaling-stroke" style="fill: rgb(54, 54, 54); transform-box: fill-box; transform-origin: 50% 50%;"></path>
              <path d="M 38.509 153.716 L 77.845 50.985 L 80.54 50.985 L 117.548 153.847 L 38.509 153.716 Z M 47.582 147.338 L 101.547 147.338 L 87.674 109.125 C 85.002 100.882 76.799 79.353 75.556 74.265 C 74.541 80.23 66.421 98.471 61.339 111.886 L 47.582 147.338 Z" style="fill: rgb(0, 255, 227); stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;"></path>
            </svg>
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

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.animate-spin-slow {
    animation: spin-slow 8s linear infinite;
}
</style>