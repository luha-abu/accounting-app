<script setup>
import { useForm, Link, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import { toUpper, showToast } from '@/Helper/luha';
import { onMounted } from 'vue';

const page = usePage();

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
        },{preserveState: true})
        return;
    }
    form.post(route('paymentTypes.store'), {
        onSuccess: () => {
            form.reset();
        }
    },  {preserveState: true});
};

const edit = (paymentType) => {
    form.id = paymentType.id;
    form.name = paymentType.name;
}

onMounted(() => {
    if (page.props.flash.message) {
        showToast(page.props.flash.message)
    }
    console.log(page.props);
})

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
                        <input type="text" class="form-control fw-bold me-2" :class="form.errors.name && 'is-invalid'" v-model="form.name" @input="toUpper(form, 'name', $event)">
                        <button class="btn btn-primary fw-bold" :class="form.id && 'btn-success'">{{ form.id ? 'UPDATE' : 'CREATE' }}</button>
                        <button class="btn btn-secondary fw-bold ms-2" @click="form.reset();form.clearErrors()" v-if="form.id">CANCEL</button>
                    </div>
                    <small class="fw-bold text-danger" v-if="form.errors.name">{{ form.errors.name }}</small>
                </div>
                <!-- submit -->
            </form>
            <div class="list-group">
                <button class="list-group-item list-group-item-action fw-bold" v-for="paymentType in paymentTypes" @click="edit(paymentType)">
                    {{ paymentType.name }}
                </button>
            </div>
        </div>
    </AppLayout>
</template>
