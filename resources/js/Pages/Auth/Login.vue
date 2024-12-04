<script setup>
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />

    <div class="container py-3 vh-100">
        <div class="d-flex align-items-center justify-content-center h-100 flex-column">
            <div class="text-center">
                <i class="bi bi-person-circle" style="font-size: 36px;"></i>
                <h4>User Login</h4>
            </div>
            <form @submit.prevent="submit" class="w-100">
                <!-- email -->
                <div class="form-group mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control fw-bold" v-model="form.email">
                </div>
                <!-- password -->
                <div class="form-group mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control fw-bold" v-model="form.password">
                </div>
                <!-- submit -->
                <button class="btn btn-primary w-100 mt-2 fw-bold">LOGIN</button>
            </form>
        </div>
    </div>
</template>
