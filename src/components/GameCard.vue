<script setup lang="ts">
import { onMounted, ref } from 'vue';
import GameDetails from './GameDetails.vue';
import type { Game } from '../typescript/types';
import { useActiveComponent, useGamesStore } from '../store';

const { changeSelectedGame } = useGamesStore();
const { changeComponent } = useActiveComponent();
const { id } = defineProps({
    id: {
        type: Number,
        required: true,
    },
});

const game = ref<Game>();

onMounted(() => {
    const { getGame } = useGamesStore();
    game.value = getGame(id);
});

function openStore(url: string) {
    window.open(url, '_blank');
}

function loadGameDetails(gameId: number) {
    changeSelectedGame(gameId);
    changeComponent(GameDetails);
}
</script>

<template>
    <div v-if="game">
        <article
            class="container"
            @click="loadGameDetails(game.id)"
        >
            <h3>{{ game.name }}</h3>
            <img
                :src="game.linkImage"
                :title="game.name"
                :alt="game.name"
            />
            <p
                class="description"
                :title="game.description"
            >
                {{ game.description }}
            </p>
            <p class="price">{{ game.price }}</p>
            <button @click.prevent.stop="openStore(game.store)">
                Comprar en la web
            </button>
        </article>
    </div>

    <div v-else>
        <article class="container empty">
            <img
                src="https://ih1.redbubble.net/image.3217273955.0495/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.jpg"
                alt="Claptrap is so sorry. This game is not available"
                title="Game not found"
            />
        </article>
    </div>
</template>

<style scoped>
img {
    display: block;
    max-width: 100%;
}

.container {
    --my-padding: 1em;

    border-color: hsl(0, 0%, 90%);
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    padding-inline: var(--my-padding);
    padding-bottom: var(--my-padding);
    cursor: pointer;
}

.empty {
    padding: var(--my-padding);
}

.description {
    height: 100px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
}

.price {
    color: hsl(0 60% 50%);
    font-family: monospace;
    font-size: 1.4rem;
    font-weight: bolder;

    flex-grow: 2;

    &::after {
        content: ' €';
    }
}
</style>
