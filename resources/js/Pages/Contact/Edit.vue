<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({
    contact: Object
})

const form = useForm({
    name: props.contact.name,
    city: props.contact.city,
    state: props.contact.state,
    phone: props.contact.phone
});

const submit = () => {
    form.put(route('contacts.update', props.contact.id));
};
</script>
<template>
    <AppLayout title="Create Contact">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('contacts.index')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Edit Contact</span>
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
                <button class="btn btn-success w-100 mt-2 fw-bold">UPDATE</button>
            </form>
        </div>
    </AppLayout>
</template>
