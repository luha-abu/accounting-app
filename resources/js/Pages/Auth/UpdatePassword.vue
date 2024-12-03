<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import { showToast } from '@/Helper/luha';

const page = usePage();

const form = useForm({
    password: '',
    password_confirmation: ''
});

const submit = () => {
    form.put(route('auth.password.store', page.props.auth.user.id), {
        onError: (errors) => {
            for(let key in errors) {
                showToast(errors[key]);
            }
        }
    })
}

</script>
<template>
    <AppLayout title="Change Password">
        <nav class="navbar shadow-sm bg-body-tertiary">
            <div class="container-fluid">
                <div class="left-bar">
                    <span class="navbar-brand mb-0 h1 py-0"><Link :href="route('dashboard')" class="btn btn-link"><i class="bi bi-arrow-left"></i></Link>Update Password</span>
                </div>
            </div>
        </nav>
        <div class="container py-3">
            <form @submit.prevent="submit">
                <div class="form-group mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" class="form-control" v-model="form.password">
                </div>
                <div class="form-group mb-3">
                    <label for="password_confirmation" class="form-label">Confirm Password</label>
                    <input id="password_confirmation" type="password" class="form-control" v-model="form.password_confirmation">
                </div>
                <button class="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    </AppLayout>
</template>
