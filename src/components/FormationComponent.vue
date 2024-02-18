<script setup>
    import FormationCard from './card/FormationCard.vue';
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    let formations = computed(() => store.state.formations);


</script>

<template>
    <div class="max-w-screen-xl flex flex-col text-left mx-auto p-10 bg-inherit my-8 dark:text-white">
        <p class="mb-8 text-2xl font-semibold text-center">Education Background</p>
        <ol class="items-center sm:flex justify-center">
            <FormationCard v-for="formation in formations" :key="formation.title"
                :title="formation.title"
                :date="formation.date"
                :desc="formation.desc"
                :institution="formation.institution"
                :link="formation.link"
            ></FormationCard>
        </ol>
    </div>
</template>