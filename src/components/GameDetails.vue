<script setup lang="ts">
import GamesList from './GamesList.vue';
import { useActiveComponent, useGamesStore } from '../store';
const { changeComponent } = useActiveComponent();
const { getSelectedGame } = useGamesStore();

const game = getSelectedGame();
</script>

<template>
    <main
        v-if="game"
        class="container"
    >
        <button
            class="go-back"
            @click="changeComponent(GamesList)"
        >
            Volver a la lista
        </button>
        <h1>{{ game.name }}</h1>
        <img
            :src="game.linkImage"
            :title="game.name"
        />
        <p>{{ game.description }}</p>
    </main>
    <aside v-else>
        <h2>No hay juego</h2>
        <p>
            Tal vez Jack el Guapo o los hermanos Calypso lo han robado, ¡ve a
            buscar en qué cámara lo guardan!
        </p>
    </aside>
</template>

<style scoped>
.container {
    max-width: 90%;
    max-width: 90dvw;

    display: flex;
    flex-direction: column;
}

img {
    width: 100%;
}

p {
    text-align: left;
}

.go-back {
    position: relative;
    right: 0;
}
</style>
