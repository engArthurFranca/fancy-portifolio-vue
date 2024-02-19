import { computed } from "vue";
import { useStore } from "vuex";

export default function useToogleTheme() {
    const store = useStore();

    let isDark = computed(() => {
        return store.state.theme.isDark;
    });

    function toogleTheme() {
        store.commit("toggleTheme");
    }

    return { isDark, toogleTheme };
}