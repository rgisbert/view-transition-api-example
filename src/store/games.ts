import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Game } from '../typescript/types';
import DataGames from '../data/data.json';

export const useGamesStore = defineStore('list-of-games', () => {
    const selectedGame = ref(Infinity);
    const games: Game[] = DataGames;

    // SelectedGame features
    const changeSelectedGame = (id: number): void => {
        if (getAllIdGames().includes(id)) {
            selectedGame.value = id;
        }
    };

    const getSelectedGame = (): Game | undefined =>
        selectedGame.value !== Infinity
            ? getGame(selectedGame.value)
            : undefined;

    // Games features
    const getAllIdGames = (): number[] => games.map((game) => game.id);

    const getGame = (id: number): Game | undefined =>
        games.find((game) => game.id === id);

    return {
        changeSelectedGame,
        getSelectedGame,
        getAllIdGames,
        getGame,
    };
});
