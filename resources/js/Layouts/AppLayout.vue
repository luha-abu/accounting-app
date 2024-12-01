<script setup>
import { Head, router } from '@inertiajs/vue3';


defineProps({
    title: String,
});


const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />
        <slot />
    </div>
</template>
