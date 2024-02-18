<script setup>
  import NavBar from './components/NavBar.vue';
  import AboutComponent from './components/AboutComponent.vue';
  import ProjectsComponent from './components/ProjectsComponent.vue';
  import FormationComponent from './components/FormationComponent.vue';
  import ContactComponent from './components/ContactComponent.vue';
  
  import { computed } from 'vue';
  import { useStore } from 'vuex';


  const store = useStore();
  let isDark = computed(() => {
    return store.state.theme.isDark;
  });

</script>

<template>
  <div :class="{'dark': isDark}" >
    <div class="dark:bg-gray-700">
      <NavBar />
      <AboutComponent id="about" />
      <ProjectsComponent id="projects" />
      <FormationComponent id="formation"></FormationComponent>
      <ContactComponent id="contact"></ContactComponent>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
