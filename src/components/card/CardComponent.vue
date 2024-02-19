<script setup>
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        gitLink: {
            type: String,
            required: false,
        },
        svgIcon: {
            type: String,
            required: false,
            default: '',
        }
    });

    let svgPath = computed(() => {
        return require(`../../assets/projectLogos/${props.svgIcon}.svg`);
    })
</script>

<template>
    <div class="max-w-sm ml-2 mt-2 h-full  text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img v-if="svgIcon"  :src="svgPath" class="mx-auto"/>
        
        <a :href="props.link" target="_blank">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h5>
        </a>
        <p class="mb-5 mt-3 font-normal text-gray-500 dark:text-gray-400">{{ props.desc }}</p>
        <a :href="props.link" class="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer" target="_blank">Access</a>
        <a v-if="props.gitLink" :href="props.gitLink" target="_blank" class="inline-flex font-medium items-center text-blue-600 hover:underline">
            GitHub Link
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
    </div>
</template>