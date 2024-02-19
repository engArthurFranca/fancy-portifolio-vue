import { ref } from "vue";

export default function useToogle() {


    let isActive = ref(false);

    function toogleElement() {
        isActive.value =!isActive.value;
    }

    return { isActive, toogleElement };
}