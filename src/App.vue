<script setup lang="ts">
import { useActiveComponent } from './store';
const activeComponent = useActiveComponent();
</script>

<template>
    <component :is="activeComponent.component"></component>
</template>
