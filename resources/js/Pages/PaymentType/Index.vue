<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
    paymentTypes: Array
});

const form = useForm({
    id: '',
    name: '',
});

const submit = () => {
    if (form.id) {
        form.put(route('paymentTypes.update', form.id), {
            onSuccess: () => {
                form.reset();
            }
        })
        return;
    }
    form.post(route('paymentTypes.store'), {
        onSuccess: () => {
            form.reset();
        }
    });
};

const edit = (paymentType) => {
    form.id = paymentType.id;
    form.name = paymentType.name;
}
</script>
<template>
    <AppLayout title="Create Contact">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Payment Types</span>
                </div>
            </div>
        </nav>
        <div class="container py-3">
            <form @submit.prevent="submit" class="w-100">
                <!-- name -->
                <div class="form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <div class="d-flex align-items-center">
                        <input type="text" class="form-control fw-bold me-2" :class="form.errors.name && 'is-invalid'" v-model="form.name">
                        <button class="btn btn-primary fw-bold" :class="form.id && 'btn-success'">{{ form.id ? 'Update' : 'Create' }}</button>
                        <button class="btn btn-secondary fw-bold ms-2" @click="form.reset();form.clearErrors()" v-if="form.id">Cancel</button>
                    </div>
                    <small class="fw-bold text-danger" v-if="form.errors.name">{{ form.errors.name }}</small>
                </div>
                <!-- submit -->
            </form>
            <div class="list-group">
                <button class="list-group-item list-group-item-action" v-for="paymentType in paymentTypes" @click="edit(paymentType)">
                    {{ paymentType.name }}
                </button>
            </div>
        </div>
    </AppLayout>
</template>
