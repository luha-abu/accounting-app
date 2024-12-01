<script setup>
import { Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
    contacts: Array
});
</script>
<template>
    <AppLayout title="Contacts">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Contacts</span>
                <Link :href="route('contacts.create')" as="button" class="btn btn-sm btn-outline-success"><i class="bi bi-plus-lg me-2"></i>Add Contact</Link>
            </div>
        </nav>
        <div class="container py-3">
            <ul class="list-group">
                <Link class="list-group-item list-group-item-action" v-for="contact in contacts" :href="route('contacts.edit', contact.id)">{{ contact.name }}</Link>
            </ul>
        </div>
    </AppLayout>
</template>
