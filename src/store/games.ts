import { defineStore } from 'pinia';

import type { Game } from '../typescript/types';
import DataGames from '../data/data.json';

export const useGamesStore = defineStore('list-of-games', () => {
    const games: Game[] = DataGames;
    const getAllIdGames = (): number[] => games.map((game) => game.id);

    const getGame = (id: number): Game | undefined =>
        games.find((game) => game.id === id);

    return {
        getAllIdGames,
        getGame,
    };
});
