<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '../router';
import { useGamesStore } from '../store';
import { openStore } from '../utils/generic';

const id = Number(useRoute().params.id);
const game = useGamesStore().getGame(id);

const changeComponent = () => {
    router.push({ name: 'game:list' });
};

document.startViewTransition(() => {
    console.log('Entra a startViewTransition desde GameDetails');
});
</script>

<template>
    <main
        v-if="game"
        class="container"
    >
        <button
            class="go-back"
            @click="changeComponent()"
        >
            Volver a la lista
        </button>
        <h1>{{ game.name }}</h1>
        <img
            :src="game.linkImage"
            :title="game.name"
        />
        <p>{{ game.description }}</p>

        <p>
            PVP:
            <span class="price">
                {{ game.price }}
            </span>
        </p>
        <button @click="openStore(game.store)">Ir a la tienda</button>
    </main>
    <aside v-else>
        <h2>No hay juego</h2>
        <p>
            Tal vez Jack el Guapo o los hermanos Calypso lo han robado, ¡ve a
            buscar en qué cámara lo guardan!
        </p>
        <button
            class="go-back"
            @click="changeComponent()"
        >
            Volver a la lista
        </button>
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
    max-width: 100%;
    height: auto;
}

p {
    text-align: left;
}

.price {
    color: red;
    text-align: right;

    &:after {
        content: ' €';
    }
}

.go-back {
    position: relative;
    right: 0;
}
</style>
