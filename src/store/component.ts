import { Component, ref } from 'vue';
import { defineStore } from 'pinia';

import GamesList from '../components/GamesList.vue';

export const useActiveComponent = defineStore('active-component', () => {
    const component = ref<Component>(GamesList);
    const changeComponent = (newComponent: Component) => {
        component.value = newComponent;
    };

    return {
        component,

        changeComponent,
    };
});
