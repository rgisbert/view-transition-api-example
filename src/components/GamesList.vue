<script setup lang="ts">
import { useGamesStore } from '../store';
import GameCard from './GameCard.vue';

const { getAllIdGames } = useGamesStore();
</script>

<template>
    <h2>Juegos de Borderlands</h2>
    <div class="wrapper">
        <GameCard
            v-for="game in getAllIdGames()"
            :key="game"
            :id="game"
        />
    </div>
</template>

<style scoped>
.wrapper {
    max-width: min(80dvw, 800px);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 2rem;
}
</style>
