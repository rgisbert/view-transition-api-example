import { createRouter, createWebHistory } from 'vue-router';

import GameDetails from '../components/GameDetails.vue';
import GameList from '../components/GamesList.vue';

const routes = [
    {
        path: '/',
        component: GameList,
        name: 'game:list',
    },
    {
        path: '/game/:id',
        component: GameDetails,
        name: 'game:details',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
