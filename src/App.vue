<script setup lang="ts"></script>

<template>
    <router-view></router-view>
</template>

<style>
/* ::view-transition-old(root),
::view-transition-new(root) {
    animation-duration: 1s;
} */

@keyframes disappear {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

::view-transition-old(root) {
    animation: 0.3s linear both disappear;
}

::view-transition-new(root) {
    animation: 0.3s linear both appear;
}
</style>
