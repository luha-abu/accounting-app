<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

const form = useForm({
    name: '',
    city: '',
    state: '',
    phone: ''
});

const submit = () => {
    form.post(route('contacts.store'));
};
</script>
<template>
    <AppLayout title="Create Contact">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('contacts.index')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Create Contact</span>
                </div>
            </div>
        </nav>
        <div class="container py-3">
            <form @submit.prevent="submit" class="w-100">
                <!-- name -->
                <div class="form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="form.name">
                </div>
                <!-- city -->
                <div class="form-group mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" v-model="form.city">
                </div>
                <!-- state -->
                <div class="form-group mb-3">
                    <label for="state" class="form-label">State</label>
                    <input type="text" class="form-control" v-model="form.state">
                </div>
                <!-- phone -->
                <div class="form-group mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="number" class="form-control" v-model="form.phone">
                </div>
                <!-- submit -->
                <button class="btn btn-primary w-100 mt-2 fw-bold">Submit</button>
            </form>
        </div>
    </AppLayout>
</template>
