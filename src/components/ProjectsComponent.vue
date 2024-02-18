<script setup>
    import CardComponent from "./card/CardComponent.vue";
    import { computed } from "vue";

    import { useStore } from "vuex";

    const store = useStore();

    let cards = computed(() => {
        return store.state.cards;
    });

</script>

<template>
    <div class="max-w-screen-xl flex flex-col text-left mx-auto p-10 bg-inherit  dark:text-white">
        <div class="text-left w-full">
            <p class="text-xl text-red-500 font-bold mt-2">My Projects</p>
            <p class="text-3xl mt-2 font-bold" >WHAT I DID</p>
        </div>
        <p class="text-lg text-red-500 font-semibold mt-8">Big Projects</p>
        <div class="flex flex-wrap mt-4">
            <CardComponent v-for="card in cards.big" :key="card.title"
                :title="card.title"
                :desc="card.desc"
                :link="card.link"
                :gitLink="card.gitLink"
                :svgIcon="card.svgIcon"
            ></CardComponent>
        </div>
        <p v-if="cards.small.length" class="text-lg text-red-500 font-semibold mt-8">Small Projects</p>
        <div  class="flex flex-wrap mt-4">
            <CardComponent v-for="card in cards.small" :key="card.title"
                :title="card.title"
                :desc="card.desc"
                :link="card.link"
                :gitLink="card.gitLink"
                :svgIcon="card.svgIcon"
            ></CardComponent>
        </div>
    </div>
</template>